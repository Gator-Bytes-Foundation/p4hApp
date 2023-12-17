from canvasapi.exceptions import BadRequest
from sqlalchemy import exc
from src import db
from src.models.user_model import User
from src.canvas import CANVAS, course, ROCKET_ADMIN # inject canvas, course objects into file
import json
from rocketchat_API.rocketchat import RocketChat
from src.controllers.login_controller import loginRocketChat

def getCanvasUserByUsername(username):
    account = CANVAS.get_account(1) # admin account id
    search_results = account.get_users(search_term=username)
    try:
      search_results[0]
    except IndexError:
      print("User not found - (%s)" % (username))
      return None
    return search_results[0]

def checkUserExists(userData): 
  '''
    Function to recover partially created accounts in the case of user creation failing
    after rocket and/or canvas accounts were already made
  '''
  user = User.query.filter_by(username=userData["username"]).first() # query db
  canvas_user = None
  rocket_account = None

  print("trying to log into rocket account")
  try:
    rocket_account_response = ROCKET_ADMIN.users_info(username=userData["username"]).json()
    rocket_login = loginRocketChat(userData) # if they can login to the rocket chat account
  except Exception as e:
    print("rocket chat not set up correctly")
    print(e)
    
  # check if rocket user exists and if login works, if so, then person signing up has rocket account already
  if(rocket_account_response and rocket_login and rocket_login.json().get("status") == "success" and "user" in rocket_account_response):
    print("rocket user exists")
    rocket_account = rocket_account_response["user"]

  if(user):
    try:
      canvas_user = CANVAS.get_user(user.canvasId)
    except BadRequest as e:
      if(len(userData["username"]) >= 3): # canvas requires usernames to be at least 3 characters
        canvas_user = getCanvasUserByUsername(userData["username"])
  elif(len(userData["username"]) >= 3): # frontend should stop users from sending usernames with less than 3 characters, but just in case
    canvas_user = getCanvasUserByUsername(userData["username"]) 

  return user, canvas_user, rocket_account

def createCanvasUser(userData):
  pseudonym = {
      'unique_id': userData["email"],
  }
  canvasUser = {
      'name': userData["fname"] + ' ' + userData["lname"],
      'login_id': userData["username"],
      'short_name': userData["fname"],
      'sortable_name': userData["lname"] + ', ' + userData["fname"],
      'email': userData["email"]
  }
  account = CANVAS.get_account(1) # admin account id
  canvas_user = account.create_user(pseudonym, user=canvasUser)
  course.enroll_user(canvas_user.id, enrollment={"type": "StudentEnrollment", "enrollment_state": "active"}, enrollment_type="StudentEnrollment") #enrollment type will be deprecated, but for now triggers error if removed.
  # currently not using canvas login sessions, but may reconsider
  #login_info = {
  #  'id' :  current_user.id,
  #   'unique_id': username
  #}
  #login = account.create_user_login(user,login_info
  return canvas_user

def createRocketAccount(userData):
  rocket_user = ROCKET_ADMIN.users_create(userData["email"],userData["fullName"],userData["password"],userData["username"]).json()
  return rocket_user

def deleteCanvasUser(canvas_user):
  account = CANVAS.get_account(1) # admin account id
  print("DELETING canvas") # debugging on pro
  print(canvas_user)
  account.delete_user(canvas_user)

def deleteRocketUser(rocket_user): 
  if(rocket_user == None): return
  delete = ROCKET_ADMIN.users_delete(rocket_user["id"])
  print("DELETING rocket") # debugging on pro
  print(delete)


def createUser(userData,canvas_user=None,rocket_account=None):
  '''
  abstract: creates user in canvas, rocketchat and then in db.
  returns: An error message to send back to client or None to indicate user was created successfully
  '''
  # if user doesn't exist, then we will correlate canvas data with new user to resync
  # if the canvas data doesn't belong to user signing up, 
  if(canvas_user is None):
    try:
      canvas_user = createCanvasUser(userData) # create canvas user object
      userData["canvasId"] = canvas_user.id
    except BadRequest as e:
        error = json.loads(e.message)
        errorMessage = error['errors']['pseudonym']['unique_id'][0]['message'] #idk why canvas api hid the error within so many fields
        return errorMessage

  try:
    newUser = User(name=userData["fullName"], username=userData["username"],email=userData["email"],canvasId=userData["canvasId"])
    newUser.set_password(userData["password"])
    # add user in rocket chat
    if(rocket_account is None): 
      rocket_res = createRocketAccount(userData)
      if("success" in rocket_res and rocket_res["success"] == True):
        rocket_account = rocket_res["user"]
        print(rocket_account)
      else:
        print("rocket res")
        print(rocket_res)
        deleteCanvasUser(canvas_user)
        print("Rocket status failed")
        if("error" in rocket_res): # rocketchat API response is not consistent (sometimes returns error/message)
          return rocket_res["error"]
        elif("message" in rocket_res):
          return rocket_res["message"]
        else: 
          return "Unknown Rocket Chat Error"
          
  except Exception as e:
    errorMessage = str(e)
    print(errorMessage)
    print("failed rocket creation")
    deleteCanvasUser(canvas_user)
    return errorMessage

  # save user in DB
  db.session.add(newUser)
  try:
    db.session.commit() # newUser.save()
  except exc.IntegrityError as e:
    db.session.rollback()
    deleteRocketUser(rocket_account)
    deleteCanvasUser(canvas_user)
    if('UNIQUE constraint' in e.args):
      print("USER EXISTS")
      return "User already exists"
    else: 
      print(e)
      return "Unknown database error"
  return None # indicates no error
