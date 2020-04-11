from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from app.models.user_model import User
from app.canvas import * # inject canvas, course objects into file

#from user_model import *

#current_user = User(id = 0, sis_user_id = '', login_id = '', email = '', avatar_url = '', bio = '')  # globalize current user as it will need to stay consistent throughout application

def loadHome():    
  if(True): #this is the home page currently
    return 'login.html'
  else:
    return 'profile.html'

class LoginForm(FlaskForm):
  username = StringField('Username', validators=[DataRequired()])
  password = PasswordField('Password', validators=[DataRequired()])
  remember_me = BooleanField('Remember Me')
  submit = SubmitField('Sign In')

  def loginUser(self,request):
    global user_id # set the current user to be global to limit API calls
    global all_users # temp => this eventually will be taken out on proper login. But it speeds up app a bit for now
    global  current_user
    result = request.form # get form data from request object sent from html form
    print("form login data: ",result) # log the data
    
    all_users = course.get_users() # get all users in p4h

    # temp way of checking user credentials
    # TODO: replace with actual canvas login auth (also log user into rocket chat eventually)
    for user in all_users:
      if(result is not None):
        print(user, " and ", result["username"])
        if(user.login_id == result["username"]):
          print(user.sis_user_id, " and ", result["password"])
          # found user with login id
          if(user.sis_user_id == result["password"]): # temp storage of passwords TODO: OAUTH
            # user password matches
            current_user = user # current user object is set
            globals()['current_user'] = current_user
            return current_user # we login the user
          else:
            #incorrect password 
            error = "Incorrect Password"
            return False #return login page
        else:
          # no username exists
          error = "There is no user with that username"
      # if loop ends, render with error message
    return False #return login page  
    
  def makeUser(self,req):
    email = req.form['email']
    fname = req.form['fname']
    lname = req.form['lname']
    password = req.form['password']
    username = fname[0] + lname
    global rocket_user
    global  current_user
    
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
      'id' :  current_user.id,
      'unique_id': username
    }
    #login = account.create_user_login(user,login_info)
    rocket_user = rocket.users_create(email,fname,password,username)
    return True,  current_user, rocket_user
    
  

