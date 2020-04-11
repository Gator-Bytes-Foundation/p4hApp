from flask import url_for, flash, redirect, request, render_template, send_file
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.urls import url_parse
from app import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from app.models.user_model import User
from app.canvas import CANVAS, course # inject canvas, course objects into file
from app.models.profile_model import Profile
from app.controllers.profile_controller import loadProfile, updateProfile, handle_submission, loadProgress, assignment_download, loadProgress
from app.controllers.posts_controller import loadPosts, loadNewsFeed, handlePost
''' Import Needed Libraries ''' 
import json
from googleapiclient.discovery import build
import requests
from flask import make_response
from oauth2client.service_account import ServiceAccountCredentials, client
from oauth2client import file, client, tools
import random
from pyper import *
import pickle as p
import logging

# PROFILE REQUESTS #
@app.route('/progress.html', methods=['GET', 'POST'])
def progress():    
  return loadProgress()

#@app.route('/')
@app.route('/profile', methods=['GET', 'POST'])
#@login_required #
def profile(*args): 
  print('here')
  all_users = list(course.get_users())
  if(args is None or args is ()):
    loadProfile(current_user, all_users)
  # args[0] holds user id to look up if it exists
  user_profile = loadPosts(args[0],0,9) 
  return loadProfile(user_profile, all_users)