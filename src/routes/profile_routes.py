from flask import url_for, flash, redirect, request, render_template, send_file, Response,make_response
from flask_login import login_user, logout_user, current_user, login_required
#from flask_api import status

from werkzeug.urls import url_parse
from src import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from src.models.user_model import User
from src.canvas import CANVAS, course # inject canvas, course objects into file
from src.models.profile_model import Profile
from src.controllers.profile_controller import loadProfile, updateProfile, getProgress, updateProgress, loadProgress
from src.controllers.posts_controller import loadPosts, loadNewsFeed, handlePost, handleComment
''' Import Needed Libraries ''' 
import json
import requests
import random
from pyper import *
import pickle as p
import logging

# PROFILE MODULE #
#
# If a request from client has variable data in it, we handle it here and get the data out of the url before routing the user
# will either get profile or update it and then return the new profile
#
@app.route('/profile/<profile_id>', methods=['GET','POST'])
def customProfileCalls(profile_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  #print("page loading: ",page_to_load) 
  return profile(profile_id) # calls profile function on username from route str

@app.route('/')
@app.route('/profile', methods=['GET'])
@login_required #
def profile(*args): 
  try:
    all_canvas_users = list(course.get_users())
  except:
    error = "Canvas server is currently down"
    return 400
  if(len(args) > 0):
    user = User.query.filter_by(canvasId=args[0]).first()
  else: user = current_user
  # args[0] holds user id to look up if it exists
  
  user_profile = loadPosts(user)     
  print('current user: ')
  print(current_user.canvasId)
  rocket_res = {}
  # Brings user to their profile view
  return loadProfile(user_profile, all_canvas_users,current_user,rocket_res)


@app.route('/profile', methods=['POST'])
@login_required
def saveProfile():
  print('request: ')
  print(request)
  updateProfile(request,current_user)
  return profile() # this isnt efficient since it reloads the entire page from scratch


## PROGRESS SUB MODULE ## 
## Load progress page - routing
@login_required
@app.route('/profile/<user_id>/progress')
def progress(user_id):    
  milestones = loadProgress(user_id)
  return render_template('progress.html', milestones = milestones, current_user = current_user, user_id = user_id) # get user from profiel to do 



## Download milestone - READ
@app.route('/profile/<user_id>/progress/<milestone_id>', methods=['GET'])
def progressGet(user_id,milestone_id):    
  file_to_download = getProgress(request,user_id,milestone_id)
  if(file_to_download):
    return send_file('../tmp/downloadMilestone', as_attachment=True,attachment_filename=file_to_download["display_name"])
  else:
    return json.dumps({'success':False}), 400, {'ContentType':False}

## Upload milestone - UPDATE
@app.route('/profile/<user_id>/progress/<milestone_id>', methods=['POST'])
def progressPut(user_id,milestone_id):    
  #if(request.method == 'PUT'):
  file_uploaded = updateProgress(request,user_id,milestone_id)
  #print(file_uploaded)
  return json.dumps({'success':True}), 200, {'ContentType':False}

## Delete milestone - DELETE - to do
 

