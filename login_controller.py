from canvas import *



def loginUser(request):
    global user_id # set the current user to be global to limit API calls
    global all_users
    global current_user
    result = request.form # get form data from request object sent from html form
    print("form login data: ",result) # log the data
    global course # so we dont need to declare it in other 
    course = canvas.get_course(1)

    current_user = None
    all_users = course.get_users()._get_next_page() # 
    
    for i in range(len(all_users)):
      if(result is not None):
        print(all_users[i].login_id, " and ", result["username"])
        if(all_users[i].login_id == result["username"]):
          # found user with login id
          if(all_users[i].sis_user_id == result["password"]): # temp storage of passwords TODO: OAUTH
            # user password matches

            current_user = all_users[i]
            user_id = all_users[i].id
            return True # we login the user
          else:
            #incorrect password 
            error = "Incorrect Password"
            return False #return login page
        else:
          # no username exists
          error = "There is no user with that username"
      # if loop ends, render with error message
    return False #return login page  
  
def makeUser(req):
  email = req.form['email']
  fname = req.form['fname']
  lname = req.form['lname']
  password = req.form['password']
  username = fname[0] + lname
  global rocket_user
  global current_user
  
  account = canvas.get_account(1) # account id
  pseudonym = {
      'unique_id': email,
      'password': password
  }
  user = {
      'name': fname,
      'short_name': username,
      'sortable_name': lname + ', ' + fname,
      'sis_user_id': password # temp storage of passwords TODO OAUTH
  }

  try:
    current_user = account.create_user(pseudonym, user=user)
  except:
    return False, "user already exists",None
  login_info = {
    'id' : current_user.id,
    'unique_id': username
  }
  #login = account.create_user_login(user,login_info)
  rocket_user = rocket.users_create(email,fname,password,username)
  return True, current_user, rocket_user
  
 
def loadHome():    
  try:
    return render_template('login.html', current_user = current_user, users = all_users) #this is the home page currently
  except:
    return render_template('login.html', current_user = None,users = None) #    
