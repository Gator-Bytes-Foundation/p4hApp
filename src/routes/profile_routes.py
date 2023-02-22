from flask import request, render_template, send_file
from flask_login import current_user, login_required
from src import app
''' Import Needed Modules '''
from src.models.user_model import User
from src.controllers.profile_controller import loadProfile, updateProfile, getProgress, updateProgress, loadProgress
from src.controllers.posts_controller import getProfilePic, loadPosts
''' Import Needed Libraries '''
import json
from pyper import *
from flask.json import jsonify

### PROFILE MODULE ###
@app.route('/profile/<userId>', methods=['GET','POST'])
@login_required
def customProfileCalls(userId):
  '''
    If a request from client has variable data in it, we handle it here and get the data out of the url before routing the user
    will either get profile or update it and then return the new profile
  '''
  print("page loading: ", userId)
  return profile(userId) # calls profile function on username from route str

@app.route('/') # default page that loads IF logged in
@app.route('/profile', methods=['GET'])
@login_required
def profile(*args):
  '''
    Load user profile
  '''
  if(len(args) > 0):
    user = User.query.filter_by(canvasId=args[0]).first() # args[0] holds user id to look up if it exists
  else: user = current_user
  
  user_profile = loadPosts(user)
  return loadProfile(user_profile)  # Brings user to their profile view

@app.route('/profile', methods=['POST'])
@login_required
def saveProfile():
  '''
    Edits user profile
  '''
  updateProfile(request)
  return profile() # this isnt efficient since it reloads the entire page from scratch


## PROGRESS SUB MODULE ##
@app.route('/profile/<userId>/progress')
@login_required
def progress(userId):
  '''
    Load progress page - routing
  '''
  print(current_user.id)
  milestones, profile_user = loadProgress(userId)
  return render_template('progress.html', milestones = milestones, current_user=current_user, profileUser=profile_user) # get user from profile to do


# GET milestone
@app.route('/api/profile/<userId>/progress/<milestone_id>', methods=['GET'])
@app.route('/profile/<userId>/progress/<milestone_id>', methods=['GET'])
@login_required
def progressGet(userId,milestone_id):
  '''
    Downloads progress milestone file from associated canvas assignment
  '''
  file_to_download, filePath = getProgress(userId,milestone_id)
  if(file_to_download):
    return send_file(filePath+"downloadMilestone.pdf", as_attachment=True, attachment_filename=file_to_download["display_name"])
  else:
    return json.dumps({'success':False}), 400, {'ContentType':False}

# POST milestone
@app.route('/api/profile/<userId>/progress/<milestone_id>', methods=['POST'])
@app.route('/profile/<userId>/progress/<milestone_id>', methods=['POST'])
@login_required
def progressPut(userId,milestone_id):
  '''
    Upload milestone file to canvas assignment where teacher progress is tracked
  '''
  file_uploaded = updateProgress(request,userId,milestone_id)
  print(file_uploaded)
  return json.dumps({'success':True}), 204, {'ContentType':False}

# DELETE milestone - to do

@app.route('/api/posts', methods=['GET'])
@app.route('/api/posts/<userId>', methods=['GET'])
@login_required
def postsAPI(*args):
  '''
    Gets all posts for a user
  '''
  if(len(args) > 0):
    user = User.query.filter_by(id=args[0]).first()
  else: user = current_user
  user_profile = loadPosts(user)
  user_profile.profilePic = getProfilePic(user_profile.user)
  return jsonify(user_profile.posts)


@app.route('/api/profile/<userId>/progress')
def milestoneAPI(userId):
  '''
    Gets all progress milestones for a user
  '''
  print(userId)
  milestones, profile_user = loadProgress(userId)
  return jsonify(milestones)
