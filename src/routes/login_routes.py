from flask import url_for, flash, redirect, request, render_template, session, abort
from flask_login import login_user, logout_user, current_user, login_required
from src import app  # from /app import flask app
from is_safe_url import is_safe_url
''' Import Needed Modules '''
from src.models.user_model import User
from src.controllers.login_controller import LoginForm, loadHome, SignUpForm
from src.canvas import CANVAS, account # inject canvas, course objects into file
from src.routes.profile_routes import profile
from src.controllers.posts_controller import loadPosts
''' Import Needed Libraries '''
import json
from rocketchat_API.rocketchat import RocketChat
from src.canvas import ROCKET
from src.controllers.profile_controller import loadProfile

# LOGGING IN AND SIGNING REQUESTS #
@app.route('/signup', methods=['GET', 'POST'])
def signUp():
  form = SignUpForm()
  return form.makeUser()

@app.route('/logout')
@login_required
def logout():
    logout_user()
    if session.get('was_once_logged_in'):
        # prevent flashing automatically logged out message
        del session['was_once_logged_in']
    flash('You have successfully logged yourself out.')
    return redirect('/login')

@app.route('/login/rocket', methods=['GET'])
def loginRocket():
  if(ROCKET != None): rocket_res = ROCKET.login(current_user.username,current_user.password_hash)
  rocket_user = rocket_res.json().get("data")
  return (json.dumps({'success':True,'data':rocket_user}), 200, {'ContentType':False})

@app.route('/login', methods=['GET', 'POST'])
def login():
  print(current_user)
  if(ROCKET == None):
    flash('Messaging server is down')
  if(account == None):
    flash('Canvas server is down')

  if current_user.is_authenticated:
    return redirect(url_for('profile'))

  form = LoginForm()
  if form.validate_on_submit():
    return form.loginUser()
  else : #if login form hasn't been sumbitted yet
    return render_template('login.html', title='login', form=form)

