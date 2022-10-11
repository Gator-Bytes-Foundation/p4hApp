from flask_wtf import FlaskForm
from flask import url_for, flash, redirect, render_template, abort, Response
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from flask_login import login_user, current_user
from sqlalchemy import exc
from src import db
from src.models.user_model import User
from src.canvas import CANVAS, course, ROCKET # inject canvas, course objects into file
from src.controllers.posts_controller import loadPosts
from src.controllers.profile_controller import loadProfile
from flask.json import jsonify



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
      fullName = fname + ' ' + lname
      account = CANVAS.get_account(1) # account id
      # create user object
      pseudonym = {
          'unique_id': email,
          'password': password
      }
      canvas_user_fields = {
          'name': fullName,
          'login_id': username,
          'short_name': fname,
          'sortable_name': lname + ', ' + fname,
          'email':email
      }
      # add user in canvas
      try:
        canvas_user = account.create_user(pseudonym, user=canvas_user_fields)
        course.enroll_user(canvas_user.id, enrollment={"type": "StudentEnrollment", "enrollment_state": "active"}, enrollment_type="StudentEnrollment") #enrollment type will be deprecated, but for now triggers error if removed.
        #topic = course.create_discussion_topic(
        #  title = username + ' ' + str(canvas_user.id),
        #  message = 'all posts for ' + fname,
        #  user_can_see_posts = True,
        #  published = True,
      #)
      except Exception as e: # work on python 3.x
        error = str(e)
        error = error.replace("{","").replace("}","").replace('"','')
        return render_template('signup.html', title='signUp', form=form, error=error)

      newUser = User(name=fullName, username=username,email=email,canvasId=canvas_user.id) #,profilePic__file_name="profile.png")
      newUser.set_password(form.password.data)
      # add user in rocket chat (To do: if rocket chat fails, canvas and DB needs to delete new user)
      try:
        rocket_user = ROCKET.users_create(email,fname,newUser.password_hash,username)
        #ROCKET.login
      except Exception as e:
        error = str(e)
        error = error.replace("{","").replace("}","").replace('"','')
        return render_template('signup.html', title='signUp', form=form, error=error)

      # save user in DB
      db.session.add(newUser)
      try:
        db.session.commit() # newUser.save()
      except exc.IntegrityError as e:
        db.session.rollback()
        if('UNIQUE constraint' in e.message):
          print("Identical user")



      flash('Congratulations, you are now a registered user!')
      # todo: research canvas login sessions
      #login_user(newUser)
      #login_info = {
      #  'id' :  current_user.id,
      #   'unique_id': username
      #}
      #login = account.create_user_login(user,login_info)
      form = LoginForm()
      return  form.loginUser()
    else:
      return render_template('signup.html', title='signUp', form=form)

def loginAPI(username,pwd,remember=False):
    user = User.query.filter_by(username=username).first() # query db
    if current_user.is_authenticated:
      return jsonify(user.serialize())
    if(not user):
      return abort(Response("Username not found"))

    if not user.check_password(user.password_hash,pwd):
      return abort(Response("password not correct"))

    login_user(user, remember=remember)
    return jsonify(user.serialize())

class LoginForm(FlaskForm):
  username = StringField('Username', validators=[DataRequired()])
  password = PasswordField('Password', validators=[DataRequired()])
  remember_me = BooleanField('Remember Me')
  submit = SubmitField('Sign In')

  def loginRocketChat(self,user):
    rocket_user = None
    if(ROCKET != None):
      try:
        print(self.password.data)
        rocket_res = ROCKET.login(self.username.data,user.password_hash)
        rocket_user = rocket_res.json().get("data")
      except Exception as e:
        flash(f"Messaging credentials not valid {e=}")
    else:
      flash("Messaging not configured properly, please contact administrator")
    return rocket_user

  def loginUser(self):

    user = User.query.filter_by(username=self.username.data).first() # query db
    if(not user):
      flash("Username not found")
      return redirect(url_for('login'))

    if not user.check_password(user.password_hash,self.password.data):
      flash('Invalid username or password')
      return redirect(url_for('login'))

    if(user and user.canvasId == None):
      user.canvasId = CANVAS.get_user(1)

    login_user(user, remember = self.remember_me.data if hasattr(self, 'remember_me') else False)
    rocket_user = self.loginRocketChat(user)
    if(rocket_user != None and rocket_user['authToken']):
      flash('Logged in successfully.')
    else:
      return redirect(url_for('login'))
    # todo: check for safe url
    #if not is_safe_url(next,{"http://localhost:5000", "p4hteach.org", "www.p4hteach.org"}):
        #return abort(400)
    profile = loadPosts(user)
    return loadProfile(profile,rocket_user)







