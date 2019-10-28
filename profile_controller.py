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
#from users import *
from posts import *
from resources_controller import *
from messaging import *
import random
import os
from pyper import *
import pickle as p
import logging


def assignment_download(page_to_load, course):
  assignment_id = page_to_load.replace('download_assignment_','')
  page_to_load = page_to_load.replace('download_','') # so the url will stay the same on reload
  int_assignment_id = int(assignment_id)
  assignment = course.get_assignment(int_assignment_id)
  submission = assignment.get_submission(35)
  if(submission.attachments != None):
    for i in range(len(submission.attachments)):
      print("submission attachment ", submission.attachments[i])
      file_to_download = course.get_file(int(submission.attachments[i]['id']))
      file_to_download.download(file_to_download.filename) # download each file associated with assignment submission                                   
def updateProfile(req):
  #print(req.form)
  name_ = req.form['name']
  school_ = req.form['school']
  email_ = req.form['email']
  phone_ = req.form['phone']
  location_ = req.form['location']
  bio_ = req.form['bio']
  files = req.files
  print("file: ",files)
  if(files != None):
    current_user.edit(user = {"avatar":files})
  if(name_ != ''):
    current_user.edit(user = {"name":name_})
  if(school_ != ''):
    current_user.edit(user = {"sortable_name":school_}) #Since we are using Canvas User objects, we store phone as sortable_name
  if(email_ != ''):
    current_user.edit(user = {"email":email_})
  if(phone_ != ''):
    current_user.edit(user = {"short_name":phone_}) #Since we are using Canvas User objects, we store phone as short_name
  if(location_ != ''):
    current_user.edit(user = {"title":location_})
  if(bio_ != ''):
    current_user.edit(user = {"bio":bio_})
  
    
  return #todo
@app.route('/<page_to_load>', methods=['GET', 'POST'])
def page_load(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file
  #print("page loading: ",page_to_load)
  print("current user", current_user.name)
  if('download_file' in page_to_load): # check for file download
    file_download(page_to_load, course)
  elif('download_assignment' in page_to_load): # check for file download
    assignment_download(page_to_load, course)
  elif('profile' in page_to_load):
    search_id = page_to_load.replace('profile_','')
    return profile(search_id)
  #dict_of_users = load_users()  
  elif('files' in page_to_load):   # loading a file page in resources.html
    folder_id = page_to_load.replace('files_','').replace('.html','')
    int_id = int(folder_id)
    files = course.get_folder(int_id).get_files()._get_next_page()
    print("folder id for these files ", files[0].folder_id)
    return render_template('files.html', files = files,folder_id = folder_id, current_user = current_user)
  elif('edit_save' in page_to_load):
    updateProfile(request)
    return profile(current_user.id) # this isnt efficient since it reloads the entire page from scratch
    
    

  if(request.method == 'POST'):
    if('comment' in page_to_load and (request.get_json() != {})):   
      print("Request data -> " + str(request.get_json()))
      return Comment.handle_comment(page_to_load, request, course,current_user)
    elif('post' in page_to_load):    
      return Post.handle_post(page_to_load, request, course, current_user)
    elif('submit' in page_to_load):
      return handle_submission(page_to_load, request, course, current_user)
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

def handle_submission(page_to_load, request, course, canvas_user):    
  #try:
  admin = canvas.get_user(1)
  id_number = page_to_load.replace('submit_','');
  submission_dict = {}
  submission_dict['submission_type'] = 'online_upload'
  submission_dict['assignment_id'] = str(id_number)
  submission_dict['user_id'] = admin.id
  USER_ID = canvas_user.id
  print(request.files['file'])
  assignments = admin.get_assignments(1)._get_next_page()
  for i in range(len(assignments)):
    if(str(assignments[i].id) == str(id_number)):
      #assignments[i].submit(submission_dict,request.files['file'])
      #assignments[i].submit(submission_dict)
      assignments[i].submit(
          submission={"submission_type": "online_upload"},
          file=request.files['file'],
          as_user_id=USER_ID
      )
      return "success"
    
  return "failed"
  #except():
    #return "failed"

  return render_template('progress.html', assignments = user_assignments,user = canvas_user)
@app.route('/progress.html', methods=['GET', 'POST'])
def progress():    
  canvas_user = canvas.get_user(user_id)
  user_assignments = canvas_user.get_assignments(1)._get_next_page()
  for i in range(len(user_assignments)):
    user_assignments[i].description = user_assignments[i].description.replace('<p>','').replace('</p>','') #get rid of stupid html tags. like why is this even being returned

  return render_template('progress.html', assignments = user_assignments,user = canvas_user, current_user = current_user)


@app.route('/discussion.html', methods=['GET', 'POST'])
def discussion_page():    
  course = canvas.get_course(1)
  newsfeed_posts, newsfeed_comments, date = Post.load_newsfeed()
  #print ("comment object: ", profile_comments)
  return render_template('discussion.html', posts = newsfeed_posts, comments = newsfeed_comments, date = date, current_user=current_user)

@app.route('/resources.html', methods=['GET', 'POST'])
def resources():    
  return render_resources(current_user)

@app.route('/messaging.html')
def messaging():    
  return render_template('messaging.html', current_user = current_user)

@app.route('/profile.html', methods=['GET', 'POST'])
def profile(user_look_up_id):   
  if(user_look_up_id == None):
    print("loading default profile")
    user_look_up_id = user_id # in case no user_id is passed into function, we assign the current user
  user_look_up = canvas.get_user(user_look_up_id) # user_look_up could be a new profile being searched OR loading the user's own profile
  global edit_mode_on
  edit_mode_on = False
  profile_posts, profile_comments,date = Post.load_profile(user_look_up,0,9) # 35 is Logan and 1 is Admin (TODO grab this id from logging in)
  #print ("comment object: ", profile_comments)
  #print("user: ", user_look_up.id, "current_user: ", current_user.id)
  print("current user specs ",vars(current_user))
  return render_template('profile.html', posts = profile_posts, comments = profile_comments, date=date, user = user_look_up, current_user= current_user,users = all_users)


@app.route('/login', methods=['GET', 'POST'])
def login_user():
  if request.method == 'POST':
    result = request.form
    print("form login data: ",result)
    global course
    course = canvas.get_course(1)
    global all_users
    all_users = course.get_users()._get_next_page() # 
    
    for i in range(len(all_users)):
      print(all_users[i].login_id, " and ", result["username"])
      if(all_users[i].login_id == result["username"]):
        # found user with login id
        if(all_users[i].sis_user_id == result["password"]):
          # user password matches
          global user_id # set the current user to be global to limit API calls
          global current_user
          current_user = all_users[i]
          user_id = all_users[i].id
          return profile(user_id) #this is the home page currently
        else:
          #incorrect password 
          error = "Incorrect Password"
          return render_template('login.html', error = error, current_user = current_user, users = all_users) #return login page
      else:
        # no username exists
        error = "There is no user with that username"
    # if loop ends, render with error message
    return render_template('login.html', error = error, current_user = current_user, users = all_users) #return login page
    
    

@app.route('/')
def home():    
  try:
    return render_template('login.html', current_user = current_user, users = all_users) #this is the home page currently
  except:
    return render_template('login.html', current_user = None,users = None) #    

if __name__ == "__main__":
  #logging.basicConfig(level=logging.DEBUG)
  app.run(debug=True)