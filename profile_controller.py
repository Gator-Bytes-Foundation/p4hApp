from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from users import *
from posts import *

def load_users():
  dict_of_users = {}
  # GET request for messages incoming
  users_messaging_you = ["lcundiff","acastro","acundiff"]
  for i in range(0,len(users_messaging_you)):
    testUser = User.getUser(users_messaging_you[i])
    dict_of_users.update({testUser.username : testUser}) #key is username and the value is a User object

  return dict_of_users

def load_recent_news():
  profilePosts = load_profile_posts()
  staffPosts = load_staff_posts()
  newsfeed_list = staffPosts[10] + profilePosts[10] # load the top few recent posts from P4h and profile posts

@app.route('/<page_to_load>')
def page_load(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file
  # get data
  dict_of_users = load_users()
  newsfeed_list = Post.getRecentPosts()
  list_of_messages = []
  # Messaging Page
  if(dict_of_users.get(page_to_load)): #if the url contains the user's name. (will change this to username or ID to not overlap)
    list_of_messages_in = dict_of_users.get(page_to_load).messages_in # get messages coming in
    list_of_messages_out = dict_of_users.get(page_to_load).messages_out # get messages going out 
    return render_template('message.html', users = dict_of_users, user_messages_in = list_of_messages_in, user_messages_out = list_of_messages_out)
  # Discussion Page
  if(newsfeed_list != None):
    return render_template(page_to_load, newsfeed = newsfeed_list)


@app.route('/')
@app.route('/profile')
def home():    
  return render_template('login.html') #this is the home page currently

if __name__ == "__main__":
  app.run()