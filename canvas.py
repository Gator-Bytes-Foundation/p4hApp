from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from canvasapi import Canvas
from canvasapi.exceptions import CanvasException
from canvasapi.user import User

# Canvas API URL
global API_URL
API_URL = "https://www.admin.p4hteach.org"
ROCKET_URL = "https://p4hteach.rocket.chat"
# Canvas API key
API_KEY = "e8MQdcca34Suq9XzwzYWTcec7oILoJ1558Y3b0fvVEgcOqx66DuwnCFvdo2CuK74"
global canvas
# Initialize a new Canvas object
canvas = Canvas(API_URL, API_KEY)

  

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
      "code" : "e8MQdcca34Suq9XzwzYWTcec7oILoJ1558Y3b0fvVEgcOqx66DuwnCFvdo2CuK74",
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
  