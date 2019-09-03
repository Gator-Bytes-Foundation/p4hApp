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

  
def load_users():
  dict_of_users = {}
  # GET request for messages incoming
  test_user_data = [canvas.get_user(34), canvas.get_user(34),canvas.get_user(34)]
  
  for i in range(0,len(test_user_data)):
    testUser = test_user_data[i]
    dict_of_users.update({testUser.name : testUser}) #key is username and the value is a User object

  return dict_of_users



@app.route('/<page_to_load>', methods=['GET', 'POST'])
def page_load(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file
  # get data
  print("GET OR POST? -> " + str(request.method))
  try:
    course = canvas.get_course(1)
    print(course.name)
    discussion_topics = course.get_discussion_topics()
    topics = discussion_topics._get_next_page() # this is the list of all topics (with embedded posts) in the course
    print("topic: ", topics[1])
    posts = topics[1].list_topic_entries()# this is the list of all posts on a topic
    #print("replies: ", posts[1])
    #replies = posts[1].list_replies() # this is the list of all discussion replies in the course
    #print("replies of a reply: ", replies[0])
    canvasUser = canvas.get_user(34)
    print(canvasUser)
    #makeUser()
  except CanvasException as e:
    print("error", e)
  dict_of_users = load_users()
  newsfeed_list = Post.load_newsfeed()
  profile_posts, profile_comments = Post.load_profile()
  #print ("comment object: ", profile_comments)
  list_of_messages = []
  
  if(request.method == 'POST'):
    print("Request data -> " + str(request.data))
    if('comment' in page_to_load):   
      new_reply = request.get_json()
      print(new_reply["text"])
      profile_posts[0].replies.append(Comment(canvas.get_user(34), new_reply["text"],"") )   
      return new_reply["text"]
    if('post' in page_to_load):    
      new_reply = request.get_json()
      print(new_reply["text"])
      new_post_id = 3
      profile_posts[0].replies.append(Post(canvas.get_user(34),new_reply["text"],"",[],new_post_id) )   
      return new_reply["text"]

  
  # Messaging Page
  if('_message' in page_to_load):
    username = page_to_load.replace('_message','')
    if(dict_of_users.get(username)): #if the url contains the user's name. (will change this to username or ID to not overlap)   
      return load_messages(username,dict_of_users)
  
  return render_template(page_to_load, newsfeed = newsfeed_list, posts = profile_posts, comments = profile_comments)

def makeUser():

  user_data = {
    # The name of the user.
    "user[name]": "Logan Cundiff",
    "user[terms_of_use]": True,
    #"user[skip_registration]" : True,
    "pseudonym[unique_id]": "logancundiff2@gmail.com",
    #"pseudonym[send_confirmation]" : True,
    #'force_validations' : True
  }  
  try:
    auth_token = authenticate(scopes,'user')["access_token"]
    canvas_url = API_URL + "api/v1/accounts/1/users?access_token=" + auth_token
  except CanvasException as e:
    print(e)
  try:
    print(auth_token) 
    resp = requests.get(url = canvas_url, params = user_data).json() # gets all users
    #resp = requests.post(canvas_url,user_data).json() # creates a user
  except CanvasException as e:
    print(e)
  
  print ('get resp ', resp)
  print ('post response ', resp)
    

def authenticate(scopes,call): 
    canvas_url = API_URL + "login/oauth2/auth?"
    serviceKey = {
      "client_id": "1",
      "response_type":"code",
      "redirect_uri": "http://localhost:8000/oauth_complete",
      "grant_type" : "authorization_code",
      "code" : "d321327bad33b0144113cf0a5a0129cbba2213d848e2d359dc2df201a33307f1bb96c7f8859a670ee83376604796bc18ca0ca3aff50785120774b82fc284400a",
      "client_secret" : "test_developer_key"
    }
    canvas_url_with_required = canvas_url + "client_id=" + serviceKey["client_id"] + "&response_type=" + serviceKey["response_type"] + "&redirect_uri=" + serviceKey["redirect_uri"]
    print(canvas_url_with_required)
    #credentials = requests.get(url = canvas_url_with_required) # gets the  "code" needed for the serviceKey in authenticate() 
    
    token_url = API_URL + "login/oauth2/token"
    
    try:
      resp = requests.post(token_url,serviceKey).json()
    except CanvasException as e:
      print(e)
    #http2 = Http()
    #credentials.authorize(http2)
    print("resp ",resp)
    return credentials

@app.route('/')
def home():    
  return render_template('login.html') #this is the home page currently

if __name__ == "__main__":

  app.run(debug=True)