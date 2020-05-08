from flask import url_for, flash, redirect, request, render_template, send_file
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.urls import url_parse
from app import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from app.models.user_model import User
from app.canvas import CANVAS, course # inject canvas, course objects into file
from app.models.profile_model import Profile
from app.controllers.profile_controller import loadProfile, updateProfile, handle_submission, assignment_download, loadProgress
from app.controllers.posts_controller import loadPosts, loadNewsFeed, handlePost, handleComment
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

#
# If a request from client has variable data in it, we handle it here and get the data out of the url before routing the user
#
@app.route('/profile/<page_to_load>', methods=['GET', 'POST'])
def customProfileCalls(page_to_load): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  #print("page loading: ",page_to_load)
  if('profile' in page_to_load):
    return profile(page_to_load.replace('profile_','')) # calls profile function on username from route str
  elif('edit_save' in page_to_load):
    updateProfile(request)
    return profile() # this isnt efficient since it reloads the entire page from scratch
  elif('download_assignment' in page_to_load): # check for file download
    assignment_download(page_to_load)
  
  return render_template(page_to_load)

# PROFILE REQUESTS #
@app.route('/progress.html', methods=['GET', 'POST'])
def progress():    
  user = CANVAS.get_user(1) #temp until canvas users are synced with user db
  return loadProgress(user)

@app.route('/')
@app.route('/profile', methods=['GET', 'POST'])
@login_required #
def profile(*args): 
  all_users = list(course.get_users())
  if(args is None or args is ()):
    loadProfile(current_user, all_users)
  # args[0] holds user id to look up if it exists
  user_profile = loadPosts(args[0],0,9) 
  return loadProfile(user_profile, all_users)