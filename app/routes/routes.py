from flask import url_for, flash, redirect, request, render_template, send_file
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.urls import url_parse
from app import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from app.models.user_model import User
from app.controllers.login_controller import LoginForm, loadHome
from app.canvas import CANVAS, course # inject canvas, course objects into file
from app.models.profile_model import Profile
from app.models.user_model import User
from app.controllers.profile_controller import loadProfile, updateProfile, handle_submission, loadProgress, assignment_download
from app.controllers.posts_controller import loadPosts, loadNewsFeed, handlePost, handlePost, handleComment
from app.controllers.resources_controller import file_download, render_resources
from app.controllers.messaging_controller import load_messages
''' Import Needed Libraries ''' 
import json
from googleapiclient.discovery import build
import requests
from flask import make_response
from oauth2client.service_account import ServiceAccountCredentials, client
from oauth2client import file, client, tools
import random
import pickle as p
import logging


#
# If a request from client has variable data in it, we handle it here and get the data out of the url before routing the user
#
@app.route('/post', methods=['GET', 'POST'])
def customGeneralCalls(page_to_load): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  print("page loading: ",page_to_load)

  if(request.method == 'POST'):
    if('comment' in page_to_load and (request.get_json() != {})):   
      print("Request data -> " + str(request.get_json()))
      return handleComment(page_to_load, request)
    
    elif('post' in page_to_load):    
      return handlePost(page_to_load, request)
    
    else:
      return '' # in case a null request is made
  
  return render_template(page_to_load)

# DISCUSSION REQUESTS #
@app.route('/announcements', methods=['GET', 'POST'])
def announcements():    
  newsfeed_posts, newsfeed_comments, date = loadNewsFeed()
  #print ("comment object: ", profile_comments)
  return render_template('announcements.html',  posts=newsfeed_posts, comments=newsfeed_comments, date=date, current_user= current_user)

