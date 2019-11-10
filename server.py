from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from flask import request
import json
import apiclient
import requests
from flask import make_response
from oauth2client.service_account import ServiceAccountCredentials, client
from oauth2client import file, client, tools
import random
import os
from pyper import *
import pickle as p
import logging
#from users import *
from posts_controller import *
from resources_controller import *
from messaging_controller import *
from profile_controller import *
import login_controller
  
    
@app.route('/<page_to_load>', methods=['GET', 'POST'])
def page_load(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file
  #print("page loading: ",page_to_load)
  print("current user", login_controller.current_user.name)
  if('download_file' in page_to_load): # check for file download
    file_download(page_to_load, course)
  elif('download_assignment' in page_to_load): # check for file download
    assignment_download(page_to_load, course)
  elif('profile' in page_to_load):
    return profile(page_to_load.replace('profile_',''))
  elif('files' in page_to_load):   # loading a file page in resources.html
    folder_id = page_to_load.replace('files_','').replace('.html','')
    int_id = int(folder_id)
    files = course.get_folder(int_id).get_files()._get_next_page()
    print("folder id for these files ", files[0].folder_id)
    return render_template('files.html', files = files,folder_id = folder_id, current_user = login_controller.current_user)
  elif('edit_save' in page_to_load):
    updateProfile(request)
    return profile(login_controller.current_user.id) # this isnt efficient since it reloads the entire page from scratch
    
  if(request.method == 'POST'):
    if('comment' in page_to_load and (request.get_json() != {})):   
      print("Request data -> " + str(request.get_json()))
      return Comment.handle_comment(page_to_load, request, course, login_controller.current_user)
    elif('post' in page_to_load):    
      return Post.handle_post(page_to_load, request, course, login_controller.current_user)
    elif('submit' in page_to_load):
      return handle_submission(page_to_load, request, course, login_controller.current_user)
    else:
      return '' # in case a null request is made
  # Messaging Page 
  '''
  if('_message' in page_to_load):
    username = page_to_load.replace('_message','')
    if(dict_of_users.get(username)): #if the url contains the user's name. (will change this to username or ID to not overlap)   
      return load_messages(username,dict_of_users)
  '''
  
  return render_template(page_to_load)


  return render_template('progress.html', assignments = user_assignments,user = canvas_user)


@app.route('/discussion.html', methods=['GET', 'POST'])
def discussion_page():    
  course = canvas.get_course(1)
  newsfeed_posts, newsfeed_comments, date = Post.load_newsfeed()
  #print ("comment object: ", profile_comments)
  return render_template('discussion.html', posts = newsfeed_posts, comments = newsfeed_comments, date = date, current_user=current_user)

@app.route('/resources.html', methods=['GET', 'POST'])
def resources():    
  return render_resources(login_controller.current_user)

@app.route('/messaging.html')
def messaging():    
  return render_template('messaging.html', current_user = login_controller.current_user)

@app.route('/progress.html', methods=['GET', 'POST'])
def progress():    
  return loadProgress(login_controller.current_user)

@app.route('/profile.html', methods=['GET', 'POST'])
def profile(user_look_up_id):   
  profile_posts, profile_comments,date = Post.load_profile(user_look_up,0,9) # 35 is Logan and 1 is Admin (TODO grab this id from logging in)
  return loadProfile(user_look_up, profile_posts, profile_comments, date,login_controller.current_user)

@app.route('/signup', methods=['GET', 'POST'])
def signup_user():
  return login_controller.signupUser()
  
@app.route('/login', methods=['GET', 'POST'])
def login():
  try:
    if(login_controller.loginUser(request)):
      profile_posts, profile_comments,date = Post.load_profile(login_controller.current_user,0,9) # 35 is Logan and 1 is Admin (TODO grab this id from logging in)
      return loadProfile(login_controller.current_user.id, profile_posts, profile_comments, date,login_controller.current_user,login_controller.all_users)
    else:
      return render_template('login.html', error = error, current_user = login_controller.current_user, users = login_controller.all_users)
  except:
    print("no login request sent")
    return render_template('login.html', error = "Login Error", current_user = login_controller.current_user, users = login_controller.all_users)

@app.route('/')
def home():    
  return login_controller.loadHome()  

if __name__ == "__main__":
  #logging.basicConfig(level=logging.DEBUG)
  app.run(debug=True)