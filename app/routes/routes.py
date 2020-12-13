from flask import url_for, flash, redirect, request, render_template, send_file
from flask_login import login_user, logout_user, current_user, login_required
from app import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from app.models.user_model import User
from app.canvas import CANVAS, course # inject canvas, course objects into file
from app.models.profile_model import Profile
from app.models.user_model import User
from app.controllers.posts_controller import loadPosts, loadNewsFeed, handlePost, handlePost, handleComment
''' Import Needed Libraries ''' 
import json
import requests
from flask import make_response
import random
import logging
from flask.json import jsonify


#
# If a request from client has variable data in it, we handle it here and get the data out of the url before routing the user
#
@app.route('/post/<user_id>', methods=['GET', 'POST'])
def posts(user_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  print("page loading: ",user_id)
  print(current_user)
  if(request.method == 'POST'):
    html, post_id = handlePost(user_id, request,current_user)
    return json.dumps({
      'html':html,
      'post_id': post_id
    }), 200, {'ContentType':'application/json'}
  
  return jsonify(request)

@app.route('/comment/<comment_id>', methods=['GET', 'POST'])
def comments(comment_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  #print("page loading: ",post)
  #print(current_user)
  if(request.method == 'POST'):
      #print("Request data -> " + str(request.get_json()))
      return handleComment(comment_id, request,current_user)
  
  return render_template(post)


# DISCUSSION REQUESTS #
@app.route('/announcements', methods=['GET', 'POST'])
@login_required
def announcements():    
  newsfeed_posts, newsfeed_comments, date = loadNewsFeed()
  #print ("comment object: ", profile_comments)
  return render_template('announcements.html',  posts=newsfeed_posts, comments=newsfeed_comments, date=date, current_user= current_user)

