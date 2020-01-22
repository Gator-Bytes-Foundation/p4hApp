from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from canvasapi import Canvas
from canvasapi.exceptions import CanvasException
from canvasapi.user import User
from pprint import pprint
from rocketchat_API.rocketchat import RocketChat
from requests import sessions



# Canvas API URL
global API_URL
API_URL = "http://2020.01.15.08:443/"
ROCKET_URL = "http://192.168.172.202:4000/"
# Canvas API key
API_KEY = "canvas-docker"
global canvas
proxy_dict = {
    "http"  : "http://192.168.172.202:4000/"
}
# Initialize a new Canvas object
canvas = Canvas(API_URL, API_KEY)
with sessions.Session() as session:  
  rocket = RocketChat('austincundiff71@gmail.com', '4Efgdt66.!', server_url=ROCKET_URL, session=session)
  #pprint(rocket.me().json())
  #pprint(rocket.channels_list().json())
  #pprint(rocket.chat_post_message('good news everyone!', channel='GENERAL', alias='Farnsworth').json())
  #pprint(rocket.channels_history('GENERAL', count=5).json())

def oldmakeUser(req):

  ''' WITHOUT CANVAS API
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
    print ('get resp ', resp)
    #resp = requests.post(canvas_url,user_data).json() # creates a user
  except CanvasException as e:
    print(e)
  
  
  '''

def authenticate(scopes,call): 
    canvas_url = API_URL + "login/oauth2/auth?"
    serviceKey = {
      "client_id": "1",
      "response_type":"code",
      "redirect_uri": "http://localhost:8000/oauth_complete",
      "grant_type" : "authorization_code",
      "code" : "d321327bad33b0144113cf0a5a0129cbba2213d848e2d359dc2df202a33307f1bb96c7f8859a670ee83376604796bc18ca0ca3aff50785120774b82fc284400a",
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
  