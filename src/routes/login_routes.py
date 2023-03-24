from flask import url_for, flash, redirect, request, render_template
from flask_login import current_user, login_required
from src import app  # from /app import flask app
from flask.json import jsonify
''' Import Needed Modules '''
from src.controllers.login_controller import LoginForm, loginAPI, logout
from src.controllers.signup_controller import SignupForm, signupAPI
from src.canvas import account # inject canvas, course objects into file
''' Import Needed Libraries '''
from src.canvas import ROCKET_ADMIN

# LOGGING IN AND SIGNING REQUESTS #
@app.route('/signup', methods=['GET', 'POST'])
def signUpRoute():
  form = SignupForm()
  return form.signUp()

@app.route('/logout')
@login_required
def logoutRoute():
  res = logout()
  flash('You have successfully logged yourself out.')
  return redirect('/login')

@app.route('/api/logout')
@login_required
def logoutAPIRoute():
    res = logout()
    return jsonify(res)

@app.route('/rocket/token', methods=['GET'])
@app.route('/api/rocket/token', methods=['GET'])
def loginRocketRoute():
  users_create_token = ""
  if(ROCKET_ADMIN != None): 
    users_create_token = ROCKET_ADMIN.users_create_token(
        username=current_user.username
    ).json()
  return (jsonify(users_create_token.get("data")))

@app.route('/login', methods=['GET', 'POST'])
def login():
  if(ROCKET_ADMIN == None):
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

@app.route('/api/signup', methods=['POST'])
def signupAPIRoute():
  return signupAPI(request.form)

