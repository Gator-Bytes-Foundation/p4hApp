from flask import url_for, flash, redirect, request, render_template, send_file, send_from_directory
from flask_login import current_user, login_required
from src import app  # from /app import flask app TODO: import db
''' Import Needed Modules '''
from src.models.user_model import User
from src.canvas import CANVAS, course # inject canvas, course objects into file
from src.models.profile_model import Profile
from src.models.user_model import User
from src.controllers.posts_controller import *
''' Import Needed Libraries '''
import json
import requests
from flask import make_response
import random
import logging
from flask.json import jsonify
from src.controllers.posts_controller import getProfilePic

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html',error = e), 404


@app.errorhandler(500)
def internal_error(e):
    # note that we set the 404 status explicitly
    return render_template('500.html',error = e), 500

@app.errorhandler(400)
def bad_request(e):
    # note that we set the 404 status explicitly
    return render_template('400.html',error = e), 400

@app.route('/post/<user_id>', methods=['GET', 'POST'])
def posts(user_id): #url being routed is saved to 'user_id' which we can then use to render the name of the html file
  if(request.method == 'POST'):
    html, post_id, profilePic = handlePost(user_id,request)
    return json.dumps({
      'html':html,
      'post_id': post_id,
      'profilePic': profilePic
    }), 200, {'ContentType':'application/json'}

  return jsonify(request)

@app.route('/post/<post_id>', methods=['DELETE'])
def post(post_id): #url being routed is saved to 'user_id' which we can then use to render the name of the html file
  print("post id: ",post_id)
  res = deletePost(request,post_id)
  return json.dumps({
    'res': res
  }), 200, {'ContentType':'application/json'}

@app.route('/comment/<post_id>', methods=['POST'])
def comments(post_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  print("post id for commenting: ",post_id)
  return handleComment(request,post_id)

@app.route('/post/<post_id>/comment/<comment_id>', methods=['DELETE'])
def comment(post_id,comment_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  print("post id for commenting: ",post_id)
  return deleteComment(request,post_id,comment_id)

# DISCUSSION REQUESTS #
@app.route('/announcements', methods=['GET', 'POST'])
@login_required
def announcements():
  newsfeed_posts = loadAnnouncements()
  currentUserProfilePic = getProfilePic(current_user)
  return render_template('announcements.html',  posts=newsfeed_posts, current_user=current_user,currentUserProfilePic=currentUserProfilePic)
'''
@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)
'''
@app.route('/static/css/<path:path>')
def send_css(path):
    print(path)
    return send_from_directory('static/css', path + '.css')

