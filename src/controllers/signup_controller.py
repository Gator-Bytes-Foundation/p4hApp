from flask_wtf import FlaskForm
from flask import url_for, flash, redirect, render_template, abort, Response
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from src.controllers.login_controller import LoginForm
from src.models.user_model import User
from src.canvas import CANVAS, ROCKET # inject canvas, course objects into file
from flask.json import jsonify
from src.helpers.user_helpers import createUser, checkUserExists, createRocketAccount

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

      return createUser(userData,form,canvasAccount,rocketAccount)
    else:
      return render_template('signup.html', title='signUp', form=form)



