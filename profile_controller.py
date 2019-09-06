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
from messaging import *
import random
import os


  
def load_users():
  dict_of_users = {}
  # GET request for messages incoming
  test_user_data = []
  
  for i in range(0,len(test_user_data)):
    testUser = test_user_data[i]
    dict_of_users.update({testUser.name : testUser}) #key is username and the value is a User object

  return dict_of_users



@app.route('/<page_to_load>', methods=['GET', 'POST'])
def page_load(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file

  try:
    course = canvas.get_course(1)
    print(course.name)
    canvasUser = canvas.get_user(user_id)
    print(canvasUser.name)
  except CanvasException as e:
    print("error", e)
    
  if('download_file' in page_to_load): # check for file download
    file_download(page_to_load, course)
  #dict_of_users = load_users()  
  if('files' in page_to_load):   # loading a file page in resources.html
    folder_id = page_to_load.replace('files_','').replace('.html','')
    int_id = int(folder_id)
    files = course.get_folder(int_id).get_files()._get_next_page()
    print("folder id for these files ", files[0].folder_id)
    
    return render_template('files.html', files = files,folder_id = folder_id)
  if(request.method == 'POST'):
    print("Request data -> " + str(request.data))
    if('comment' in page_to_load):   
      return Comment.handle_comment(page_to_load, request, course)
    
    if('post' in page_to_load):    
      return Post.handle_post(page_to_load, request, course)
  # Messaging Page 
  '''
  if('_message' in page_to_load):
    username = page_to_load.replace('_message','')
    if(dict_of_users.get(username)): #if the url contains the user's name. (will change this to username or ID to not overlap)   
      return load_messages(username,dict_of_users)
  '''
  
  return render_template(page_to_load)

def file_download(page_to_load, course):
  file_id = page_to_load.replace('download_file_','')
  int_file = int(file_id)
  file_to_download = course.get_file(int_file)
  download_path = '/'.join( os.getcwd().split('/')[:3] ) + '/Downloads'
  file_to_download.download(download_path)

@app.route('/resources.html', methods=['GET', 'POST'])
def resources():    
  course = canvas.get_course(1)
  folders_ = course.get_folders()._get_next_page()
  folders = [] 
  icons = []
  for i in range(1,len(folders_)):
    folders.append(folders_[i])
    if("VIDEO" in folders_[i].name.upper() or "VIDEYO" in folders_[i].name.upper()):
      icons.append("oi-video")
    elif("PICTURE" in folders_[i].name.upper() or ("FOTO" in folders_[i].name.upper()) or ("PHOTO" in folders_[i].name.upper()) ):
      icons.append("oi-image")
    else:
      icons.append("oi-book")
    #print("folders_ ", folders_[i].name)
  #canvasUser = canvas.get_user(35)
  
  return render_template('resources.html', folders = folders,icons = icons)

@app.route('/profile.html', methods=['GET', 'POST'])
def profile():    
  course = canvas.get_course(1)
  canvasUser = canvas.get_user(user_id)
  profile_posts, profile_comments = Post.load_profile(canvasUser) # 35 is Logan and 1 is Admin (TODO grab this id from logging in)
  #print ("comment object: ", profile_comments)
  return render_template('profile.html', posts = profile_posts, comments = profile_comments)

@app.route('/discussion.html', methods=['GET', 'POST'])
def discussion_page():    
  course = canvas.get_course(1)
  canvasUser = canvas.get_user(35)
  newsfeed_posts, newsfeed_comments= Post.load_newsfeed()
  #print ("comment object: ", profile_comments)
  return render_template('discussion.html', posts = newsfeed_posts, comments = newsfeed_comments)


@app.route('/login', methods=['GET', 'POST'])
def login_user():
  if request.method == 'POST':
    result = request.form
    print("form login data: ",result)
    course = canvas.get_course(1)
    users = course.get_users()._get_next_page() # 
    for i in range(len(users)):
      print(users[i].login_id, " and ", result["username"])
      if(users[i].login_id == result["username"]):
        # found user with login id
        if(users[i].sis_user_id == result["password"]):
          # user password matches
          global user_id
          user_id = users[i].id
          return profile() #this is the home page currently
        else:
          #incorrect password 
          error = "Incorrect Password"
          return render_template('login.html', error = error) #return login page
      else:
        # no username exists
        error = "There is no user with that username"
    # if loop ends, render with error message
    return render_template('login.html', error = error) #return login page
    
    

@app.route('/')
def home():    
  return render_template('login.html') #this is the home page currently

if __name__ == "__main__":
  app.run(debug=True)