from flask import url_for, flash, redirect, request, render_template, session, abort
from flask_login import logout_user, current_user, login_required
from src import app  # from /app import flask app
from flask.json import jsonify
#from is_safe_url import is_safe_url
''' Import Needed Modules '''
from src.controllers.login_controller import LoginForm, loginAPI, SignUpForm
from src.canvas import account # inject canvas, course objects into file
''' Import Needed Libraries '''
import json
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
  if(ROCKET != None): rocket_res = ROCKET.login(current_user.username,current_user.password_hash).json()
  rocket_user = rocket_res.get("data")
  return (jsonify(rocket_user))

@app.route('/login', methods=['GET', 'POST'])
def login():
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

@app.route('/api/login', methods=['POST'])
def loginAPIRoute():
  username = request.form.get('username')
  pwd = request.form.get('password')
  return loginAPI(username,pwd)

