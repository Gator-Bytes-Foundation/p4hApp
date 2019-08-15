from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from flask import request
import json
from users import *
from posts import *
from messaging import *

def load_users():
  dict_of_users = {}
  # GET request for messages incoming
  users_messaging_you = ["lcundiff","acastro","acundiff"]
  for i in range(0,len(users_messaging_you)):
    testUser = User.getUser(users_messaging_you[i])
    dict_of_users.update({testUser.username : testUser}) #key is username and the value is a User object

  return dict_of_users



@app.route('/<page_to_load>', methods=['GET', 'POST'])
def page_load(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file
  # get data
  dict_of_users = load_users()
  newsfeed_list = Post.load_newsfeed()
  profile_posts = Post.load_profile()
  list_of_messages = []
  
  if request.method == 'POST':   
    new_reply = request.get_json()
    print(new_reply["text"])
    profile_posts[0].replies.append(Comment(User.getUser("acundiff"),new_reply["text"],"") )   
    return

  
  # Messaging Page
  if('_message' in page_to_load):
    username = page_to_load.replace('_message','')
    if(dict_of_users.get(username)): #if the url contains the user's name. (will change this to username or ID to not overlap)   
      return load_messages(username,dict_of_users)
  
  return render_template(page_to_load, users = dict_of_users,newsfeed = newsfeed_list, posts = profile_posts)


@app.route('/')
def home():    
  return render_template('login.html') #this is the home page currently

if __name__ == "__main__":
  app.run()