from flask import url_for, flash, redirect, request, render_template, send_file
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.urls import url_parse
from app import app,db  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from app.models.user_model import User
from app.controllers.login_controller import LoginForm, loadHome, SignUpForm
from app.canvas import CANVAS, course # inject canvas, course objects into file
from app.routes.profile_routes import profile
''' Import Needed Libraries ''' 
import json
from googleapiclient.discovery import build
import requests
from flask import make_response
from oauth2client.service_account import ServiceAccountCredentials, client
from oauth2client import file, client, tools
import random
from pyper import *
import logging


# LOGGING IN AND SIGNING REQUESTS #
@app.route('/signup', methods=['GET', 'POST'])
def signUp():
  form = SignUpForm()
  if form.validate_on_submit():
    makeUser = User(username=form.username.data,email=form.email.data)
    makeUser.set_password(form.password.data)
    db.session.add(makeUser)
    db.session.commit()
    print(makeUser)
    login_user(makeUser) 
    canvas_user = CANVAS.get_user(1)
    #flash('Congratulations, you are now a registered user!')
    return redirect(url_for('login')) 
  else:
    return render_template('signup.html', title='signUp', form=form)

  ''' temp disabled until rocket chat is reconfigured 
  signupSuccess, current_user, rocket_user =  makeUser(request)
  if(signupSuccess):
    #try:
      user_profile = loadPosts(current_user.id,0,9)
      return loadProfile(user_profile, all_users)
    #except:
      #return render_template('signup.html', error = "profile could not be loaded",  current_user =   current_user, users = None)
  else:
    return render_template('signup.html', error = current_user,  current_user = None, users = None)
  '''

@app.route('/login', methods=['GET', 'POST'])
def login():
  if current_user.is_authenticated:
    return redirect(url_for('profile'))
  
  form = LoginForm()
  if form.validate_on_submit():   
    user = User.query.filter_by(username=form.username.data).first() # query db
    canvas_user = CANVAS.get_user(1)  
    print(user)
    if(user is None or not user.check_password(form.password.data)):
      flash('Invalid username or password')
      return redirect(url_for('login'))
    login_user(user, remember=form.remember_me.data)
    
    return profile(canvas_user.id)
  else : #if login form hasn't been sumbitted yet
    return render_template('login.html', title='login',  form=form)
    

@app.route('/')
def home():
  home = loadHome()
  form = LoginForm()
  return render_template(home, current_user = None, form=form)