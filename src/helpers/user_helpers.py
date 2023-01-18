from canvasapi.exceptions import CanvasException,BadRequest
from flask import flash, render_template
from sqlalchemy import exc
from src import db
from src.models.user_model import User
from src.canvas import CANVAS, course, ROCKET # inject canvas, course objects into file
from src.controllers.login_controller import LoginForm
import json

def getCanvasUserByUsername(username):
    account = CANVAS.get_account(1) # admin account id
    search_results = account.get_users(search_term=username)
    try:
      search_results[0]
    except IndexError:
      print("User not found - (%s)" % (username))
      return False
    print(search_results[0])
    return search_results[0]

def checkUserExists(userData): 
  user = User.query.filter_by(username=userData["username"]).first() # query db
  canvas_user = None
  if(user):
    try:
      canvas_user = CANVAS.get_user(user.canvasId)
      print(canvas_user)
    except BadRequest as e:
      print(str(e))
      canvas_user = getCanvasUserByUsername(userData["username"])

  rocketAccount = ROCKET.users_info(username=userData["username"]).json()
  print(rocketAccount)
  return user, canvas_user, rocketAccount

def createCanvasUser(userData):
  pseudonym = {
      'unique_id': userData["email"],
      #'password': userData["password"]
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
  # TODO: research canvas login sessions
  #topic = course.create_discussion_topic(
  #  title = username + ' ' + str(canvas_user.id),
  #  message = 'all posts for ' + fname,
  #  user_can_see_posts = True,
  #  published = True,
  #)
  #login_info = {
  #  'id' :  current_user.id,
  #   'unique_id': username
  #}
  #login = account.create_user_login(user,login_info
  return canvas_user

def createRocketAccount(userData,pswHash):
  rocket_user = ROCKET.users_create(userData["email"],userData["fullName"],pswHash,userData["username"]).json()
  return rocket_user

def deleteCanvasUser(canvas_user):
  account = CANVAS.get_account(1) # admin account id
  print("DELETING")
  print(canvas_user)
  delete = account.delete_user(canvas_user)
  print(delete)

def deleteRocketUser(rocket_user): 
  delete = ROCKET.users_delete(rocket_user.id)
  print(delete)


def createUser(userData,form):
  
  try:
    canvas_user = createCanvasUser(userData) # create canvas user object
    userData["canvasId"] = canvas_user.id
  except BadRequest as e:
    # if user doesn't exist, then we will correlate canvas data with new user to resync
    # if the canvas data doesn't belong to user signing up, 
    if(userData["canvasId"] is None):
      error = json.loads(e.message)
      errorMessage = error['errors']['pseudonym']['unique_id'][0]['message'] #idk why canvas api hid the error within so many fields

      print("canvas errror!")
      print(error['errors']['pseudonym']['unique_id'][0]['message'])
      return render_template('signup.html', title='signUp', form=form, error=errorMessage)
    
  try:
    newUser = User(name=userData["fullName"], username=userData["username"],email=userData["email"],canvasId=userData["canvasId"]) #,profilePic__file_name="profile.png")
    newUser.set_password(form.password.data)
    # add user in rocket chat (To do: if rocket chat fails, canvas and DB needs to delete new user)
    rocket_user = ROCKET.users_create(userData["email"],userData["fullName"],newUser.password_hash,userData["username"]).json()
    if(rocket_user["success"] == False):
      print(rocket_user)
      deleteCanvasUser(canvas_user)
      return render_template('signup.html', title='signUp', form=form, error=rocket_user["error"])
  except Exception as e:
    error = str(e)
    print("rocket")
    print(error)
    deleteCanvasUser(canvas_user)
    return render_template('signup.html', title='signUp', form=form, error=error)

  # save user in DB
  db.session.add(newUser)
  try:
    db.session.commit() # newUser.save()
  except exc.IntegrityError as e:
    db.session.rollback()
    if('UNIQUE constraint' in e.message):
      print("User already exists")
      deleteRocketUser(rocket_user)
      deleteCanvasUser(canvas_user)
  flash('Congratulations, registration was successful!')
  form = LoginForm()
  return  form.loginUser()
