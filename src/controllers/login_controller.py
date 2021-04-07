from flask_wtf import FlaskForm
from flask import url_for, flash, redirect, request, render_template, send_file, make_response
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import ValidationError, DataRequired, Email, EqualTo
from flask_login import login_user, logout_user, current_user
from sqlalchemy import exc
from src import db
from src.models.user_model import User
from src.canvas import CANVAS, course,ROCKET # inject canvas, course objects into file
from rocketchat_API.rocketchat import RocketChat
import ftplib

  

  
#from user_model import *

#current_user = User(id = 0, sis_user_id = '', login_id = '', email = '', avatar_url = '', bio = '')  # globalize current user as it will need to stay consistent throughout application

def loadHome():    
  if(True): #this is the home page currently
    return render_template('./login/login.html', title='login',  form=form)
  else:
    return render_template('./profile.html', title='login',  form=form)

#def logout():


class SignUpForm(FlaskForm):
  fname = StringField('First Name', validators=[DataRequired()])
  lname = StringField('Last Name', validators=[DataRequired()])
  username = StringField('Username', validators=[DataRequired()])
  email = StringField('Email', validators=[DataRequired()])
  password = PasswordField('Password', validators=[DataRequired()])
  admin = BooleanField('Are you an Administrator?')
  submit = SubmitField('Sign Up')

  def makeUser(self):
    form = self
    #print(form)
    if form.validate_on_submit():
      # Create canvas user #
      email = form.email.data
      fname = form.fname.data
      lname = form.lname.data
      username = form.username.data
      password = form.password.data
      #global rocket_user
      
      account = CANVAS.get_account(1) # account id
      pseudonym = {
          'unique_id': email,
          'password': password
      }
      user = {
          'name': fname + ' ' + lname,
          'short_name': username,
          'sortable_name': lname,
          'email':email
      }
      # 1st add user in canvas 
      try:
        canvas_user = account.create_user(pseudonym, user=user)
        print("canvas user created")
      except Exception as e: # work on python 3.x
        error = str(e)
        error = error.replace("{","").replace("}","").replace('"','')
        return render_template('signup.html', title='signUp', form=form, error=error)

      # 2nd add user in rocket chat (To do: if rocket chat fails, canvas and DB needs to delete new user)
      try:
        rocket_user = ROCKET.users_create(email,fname,password,username)
        #ROCKET.login
      except Exception as e:
        error = str(e)
        error = error.replace("{","").replace("}","").replace('"','')
        return render_template('signup.html', title='signUp', form=form, error=error)

      # 3rd add user in DB
      newUser = User(username=username,email=email,canvasId=canvas_user.id) #,profilePic__file_name="profile.png")
      newUser.set_password(form.password.data)

      db.session.add(newUser)
      try: 
        db.session.commit() # newUser.save()
      except exc.IntegrityError as e: 
        db.session.rollback()
        if('UNIQUE constraint' in e.message):
          print("Identical user")



      login_user(newUser) 
      #flash('Congratulations, you are now a registered user!')
      login_info = {
        'id' :  current_user.id,
        'unique_id': username
      }      
      #login = account.create_user_login(user,login_info)

      
      return redirect(url_for('login')) 
    else:
      return render_template('signup.html', title='signUp', form=form)

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
    #print("form login data: ",result) # log the data
    
    try:
      all_users = course.get_users() # get all users in p4h
    except: 
      error = "canvas is down"
      return "404 Error", 404
    # temp way of checking user credentials
    # TODO: replace with actual canvas login auth (also log user into rocket chat eventually)
    for user in all_users:
      if(result is not None):
        #print(user, " and ", result["username"])
        if(user.login_id == result["username"]): # found user with login id
          current_user = user # current user object is set
          globals()['current_user'] = current_user
          return current_user # we login the user
        else: # no username exists
          error = "There is no user with that username"
      # if loop ends, render with error message
    return False #return login page  
    
    
  

