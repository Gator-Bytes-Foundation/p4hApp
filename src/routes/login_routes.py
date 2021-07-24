from flask import url_for, flash, redirect, request, render_template, send_file, session, abort
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
import requests
from requests import sessions
from rocketchat_API.rocketchat import RocketChat
from src.canvas import ROCKET_URL, ROCKET
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

    user = User.query.filter_by(username=form.username.data).first() # query db
    if(not user): print("User not found")
    print('current user: ', user)
    if not user or not user.check_password(user.password_hash,form.password.data):
      flash('Invalid username or password')
      return redirect(url_for('login'))
      
    if(user and user.canvasId == None):
      user.canvasId = CANVAS.get_user(1) 
    #print(form.remember_me.data)
    login_user(user, remember=form.remember_me.data)
    if(ROCKET != None): rocket_res = ROCKET.login(form.username.data,form.password.data)
    #print(rocket_res.json().get("data"))
    rocket_user = rocket_res.json().get("data")
    flash('Logged in successfully.')
    next = request.args.get('next')
    #if not is_safe_url(next,{"http://localhost:5000", "p4hteach.org", "www.p4hteach.org"}):
      #return json.dumps({'success':False}), 404, {'ContentType':False}
    profile = loadPosts(user)   
    return loadProfile(profile,rocket_user)
    #return redirect(url_for('profile'))    
    
  else : #if login form hasn't been sumbitted yet
    return render_template('login.html', title='login', form=form)

