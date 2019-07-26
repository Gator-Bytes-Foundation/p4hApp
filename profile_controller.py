from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from users import *

def load_users():
  dict_of_users = {}
  users_messaging_you = ["lcundiff","acastro","acundiff"]
  for i in range(0,len(users_messaging_you)):
    testUser = User.getUser(users_messaging_you[i])
    dict_of_users.update({testUser.username : testUser}) #key is username and the value is a User object

  return dict_of_users



@app.route('/<page_to_load>')
def page_load(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file
  
  dict_of_users = load_users()
  list_of_messages = []
  
  if(dict_of_users.get(page_to_load)): #if the url contains the user's name. (will change this to username or ID to not overlap)
    list_of_messages_in = dict_of_users.get(page_to_load).messages_in # get messages coming in
    list_of_messages_out = dict_of_users.get(page_to_load).messages_out # get messages going out 
    return render_template('message.html', users = dict_of_users, user_messages_in = list_of_messages_in, user_messages_out = list_of_messages_out)
  
  return render_template(page_to_load, users = dict_of_users)


@app.route('/')
@app.route('/profile')
def home():    
  return render_template('login.html') #this is the home page currently

if __name__ == "__main__":
  app.run()