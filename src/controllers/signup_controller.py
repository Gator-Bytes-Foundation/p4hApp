from flask_wtf import FlaskForm
from flask import url_for, flash, redirect, render_template, abort, Response
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from src.controllers.login_controller import LoginForm, loginAPI
from src.helpers.user_helpers import createUser, checkUserExists, createRocketAccount

def signupAPI(form): 
  userData = {
      "email": form.get('email'),
      "fname": form.get('fname'),
      "lname": form.get('lname'),
      "username": form.get('username'),
      "password": form.get('password'),
      "fullName": form.get('fname') + form.get('lname')
  }
  existingUser, canvasAccount, rocketAccount = checkUserExists(userData)
  if(existingUser): # todo try fixing in case account was partially created
    abort(Response("User already exists in database"))
  errorMessage = createUser(userData,canvasAccount,rocketAccount)
  if(errorMessage == None):
    return loginAPI(userData["username"],userData["password"])
  else: 
    return abort(Response(errorMessage))

class SignupForm(FlaskForm):
  fname = StringField('First Name', validators=[DataRequired()])
  lname = StringField('Last Name', validators=[DataRequired()])
  username = StringField('Username', validators=[DataRequired()])
  email = StringField('Email', validators=[DataRequired()])
  password = PasswordField('Password', validators=[DataRequired()])
  admin = BooleanField('Are you an Administrator?')
  submit = SubmitField('Sign Up')

  def signUp(self): #signUp - verb / signup - noun
    form = self
    if form.validate_on_submit():
      fullName = form.fname.data + " " + form.lname.data  
      userData = {
        "email": form.email.data,
        "fname": form.fname.data,
        "lname": form.lname.data,
        "username": form.username.data,
        "password": form.password.data,
        "fullName": fullName
      }
      existingUser, canvasAccount, rocketAccount = checkUserExists(userData) 

      # this shouldn't occur but will be used as a way of repairing a partially created account
      if(existingUser and canvasAccount and rocketAccount is None):
        # authenticate if partial user is one signing up
        if not existingUser.check_password(existingUser.password_hash,userData["password"]):
          flash('User account was partially created. Please try signing up again with previous password to fix account.')
          return redirect(url_for('login'))
        createRocketAccount(userData)
        form = LoginForm()
        return form.loginUser()
      
      # if canvas data already exists without a user, connect current user
      # this should only happen for developers since users should never be deleted
      if(canvasAccount and not existingUser and userData["email"] == canvasAccount.login_id):
        userData["canvasId"] = canvasAccount.id
        print("Canvas exists without db user")

      errorMessage = createUser(userData,canvasAccount,rocketAccount)
      if(errorMessage == None): 
          flash('Congratulations, registration was successful!')
          form = LoginForm()
          return  form.loginUser()
      else: 
        return render_template('signup.html', title='signUp', form=form, error=errorMessage)

    else:
      return render_template('signup.html', title='signUp', form=form)



