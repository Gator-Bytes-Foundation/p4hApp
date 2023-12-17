from flask import request, render_template, send_file
from flask_login import current_user, login_required
from src import app
''' Import Needed Modules '''
from src.models.user_model import User
from src.controllers.profile_controller import loadProfile, renderProfilePage, updateProfile, getProgress, updateProgress, loadProgress
from src.controllers.posts_controller import loadPosts, createPost, deletePost, createComment, deleteComment
''' Import Needed Libraries '''
import json
from pyper import *
from flask.json import jsonify

### PROFILE MODULE ###
@app.route('/profile/<userId>', methods=['GET','POST'])
@login_required
def getProfileRoute(userId):
  '''
    If a request from client has variable data in it, we handle it here and get the data out of the url before routing the user
    will either get profile or update it and then return the new profile
  '''
  user = User.query.filter_by(id=userId).first() # args[0] holds user id to look up if it exists
  return renderProfilePage(user) # calls profile function on username from route str

@app.route('/') # default page that loads IF logged in
@app.route('/profile', methods=['GET'])
@login_required
def profile():
  '''
    Load user profile
  '''
  return renderProfilePage(current_user) # Brings user to their profile view

@app.route('/profile', methods=['POST'])
@login_required
def saveProfileRoute():
  '''
    Edits user profile
  '''
  updateProfile(request)
  return profile() # this isnt efficient since it reloads the entire page from scratch

@app.route('/api/profile', methods=['POST'])
@login_required
def saveProfileAPIRoute():
  '''
    Edits user profile and sends back JSON
  '''
  updatedUser = updateProfile(request)
  return jsonify(updatedUser.serialize())

@app.route('/api/profile/<userId>', methods=['GET'])
@login_required
def getProfileAPIRoute(userId):
  '''
    Gets user profile by user id and sends back JSON
  '''
  profile = loadProfile(userId)
  return jsonify(profile)

@app.route('/api/profile', methods=['GET'])
@login_required
def getMyProfileAPIRoute():
  '''
    Gets user profile by current session user id and sends back JSON
  '''
  profile = loadProfile(current_user)
  return jsonify(profile)

# Create post (both API and web)
@app.route('/api/post/<profileUserId>', methods=['GET', 'POST'])
@app.route('/post/<profileUserId>', methods=['GET', 'POST'])
def postsRoute(profileUserId): #url being routed is saved to 'user_id' which we can then use to render the name of the html file
  '''
    Creates a user discussion post in canvas (displayed on user's profile)
  '''
  if(request.method == 'POST'):
    post, profilePic, profileUser = createPost(profileUserId,request)
    if(post.title == None or len(post.title) < 2):
      postUsername = None
    else: 
      postUsername = post.title.split(" ")[1]
    return jsonify({
      "id": post.id, 
      "newPostId": post.id, # deprecate eventually
      "postedAt": post.posted_at,
      "posted_at": post.posted_at, # deprecate eventually
      "profileUser": profileUser.serialize(),
      "postUsername": postUsername,
      "message": post.message,
      "profilePic": profilePic
    })
  else:
    userProfile = loadPosts(current_user)
    return jsonify(userProfile.posts)

# API and web app
@app.route('/api/post/<post_id>', methods=['DELETE'])
@app.route('/post/<post_id>', methods=['DELETE'])
@login_required
def deletePostRoute(post_id):
  '''
    Deletes a user's discussion post
  '''
  res = deletePost(request,post_id)
  return json.dumps({
    'res': res
  }), 200, {'ContentType':'application/json'}

# Create comment
@app.route('/comment/<post_id>', methods=['POST'])
def comments(post_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  '''
    Comments on a user's post in canvas (displayed on user's profile)
  '''
  return createComment(request,post_id)

# Create comment
@app.route('/api/comment/<post_id>', methods=['POST'])
@login_required
def commentsAPI(post_id):
  '''
    API to create a comment
    Returns JSON instead of jinja template
  '''
  comment = createComment(request,post_id)
  return jsonify(comment)

# Delete comment
@app.route('/post/<post_id>/comment/<comment_id>', methods=['DELETE'])
def comment(post_id,comment_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  '''
    Deletes a user's comment on a user's discussion post in canvas (displayed on user's profile)
  '''
  print("post id for commenting: ",post_id)
  return deleteComment(request,post_id,comment_id)

## PROGRESS SUB MODULE ##
@app.route('/profile/<userId>/progress')
@login_required
def progressPageRoute(userId):
  '''
    Load progress page - routing
  '''
  milestones, profile_user = loadProgress(userId)
  return render_template('progress.html', milestones = milestones, current_user=current_user, profileUser=profile_user) # get user from profile to do

# GET milestone
@app.route('/api/profile/<userId>/progress/<milestone_id>', methods=['GET'])
@app.route('/profile/<userId>/progress/<milestone_id>', methods=['GET'])
@login_required
def getProgressRoute(userId,milestone_id):
  '''
    Downloads progress milestone file from associated canvas assignment
  '''
  file_to_download, filePath = getProgress(userId,milestone_id)
  if(file_to_download):
    return send_file(filePath+"downloadMilestone.pdf", as_attachment=True, attachment_filename=file_to_download["display_name"])
  else:
    return json.dumps({'success':False}), 400, {'ContentType':False}

# POST milestone
@app.route('/api/profile/<profileUserId>/progress/<milestone_id>', methods=['POST'])
@app.route('/profile/<profileUserId>/progress/<milestone_id>', methods=['POST'])
@login_required
def uploadProgressRoute(profileUserId,milestone_id):
  '''
    Upload milestone file to canvas assignment where teacher progress is tracked
  '''
  file_uploaded = updateProgress(request,profileUserId,milestone_id)
  return json.dumps({'success':True}), 204, {'ContentType':False}

# DELETE progress milestone - to-do

@app.route('/api/posts', methods=['GET'])
@login_required
def getPostsAPIRoute():
  '''
    Get all posts for currently logged in user  
  '''
  user_profile = loadPosts(current_user)
  return jsonify(user_profile.posts)

@app.route('/api/posts/<userId>', methods=['GET'])
@login_required
def getPostsByIdAPIRoute(userId):
  '''
    Get all posts for a user's profile given userId
  '''
  user = User.query.filter_by(id=userId).first()
  user_profile = loadPosts(user)
  return jsonify(user_profile.posts)


@app.route('/api/profile/<userId>/progress')
def progressAPIRoute(userId):
  '''
    Get all progress milestones for a user
  '''
  milestones, profile_user = loadProgress(userId)
  return jsonify(milestones)
