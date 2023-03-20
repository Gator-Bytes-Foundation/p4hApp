from flask_wtf import FlaskForm
from flask import url_for, flash, redirect, render_template, abort, Response, session
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from flask_login import login_user, current_user, logout_user
from src.models.user_model import User
from src.canvas import CANVAS # inject canvas, course objects into file
from src.controllers.posts_controller import loadPosts
from src.controllers.profile_controller import loadProfile
from flask.json import jsonify
from rocketchat_API.rocketchat import RocketChat
from flask import current_app

def loadHome():
    return render_template('./login/login.html', title='login',  form=form)

def logout(): 
    logout_user()
    logged_rocket = RocketChat(user_id=session.get("userId"), auth_token=session.get("authToken"), server_url=current_app.config["ROCKET_URL"])
    logged_rocket.logout()
    if session.get('was_once_logged_in'):
        del session['was_once_logged_in'] # prevent flashing automatically logged out message
    res = ({
      "message": "Logged out successful"
    })
    return res

def loginAPI(username,pwd,remember=False):
  user = User.query.filter_by(username=username).first() # query db
  if current_user.is_authenticated:
    return jsonify(user.serialize())
  if(not user):
    return abort(Response("Username not found"))

  if not user.check_password(user.password_hash,pwd):
    return abort(Response("Password not correct"))

  login_user(user, remember=remember)
  return jsonify(user.serialize())

class LoginForm(FlaskForm):
  username = StringField('Username', validators=[DataRequired()])
  password = PasswordField('Password', validators=[DataRequired()])
  remember_me = BooleanField('Remember Me')
  submit = SubmitField('Sign In')

  def loginRocketChat(self,user):
    rocket_user = None
    try:
      rocket = RocketChat(self.username.data, self.password.data, server_url=current_app.config["ROCKET_URL"])
      rocket_res = rocket.login(self.username.data,self.password.data).json()
      rocket_user = rocket_res.get("data")
      session["userId"] = rocket_user["userId"]
      session["authToken"] = rocket_user["authToken"]
    except Exception as e:
      flash(f"Messaging credentials not valid {e=}")
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
    print("rocket user")
    print(rocket_user)
    if(rocket_user != None and rocket_user['authToken']):
      flash('Logged in successfully.')
    else:
      return redirect(url_for('login'))
    # todo: check for safe url
    #if not is_safe_url(next,{"http://localhost:5000", "p4hteach.org", "www.p4hteach.org"}):
        #return abort(400)
    profile = loadPosts(user)
    return redirect(url_for('profile'))
