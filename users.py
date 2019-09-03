from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from canvas import *



class User():
  def __init__(user,fname, lname, username, messages_in, messages_out, role):
    user.fname = fname
    user.lname = lname
    user.username = username 
    user.messages_in = messages_in
    user.messages_out = messages_out
    user.role = role
    
  def getUser(username):  
    testUser = test_user_data.get(username)
    return testUser
  
test_user_data = {"lcundiff" : User("Logan", "Cundiff", "lcundiff", ["how u doin", " wut?", "hahaha"], ["what do prisoners use to talk to one another?","cell phones","lolol"], "admin"), 
                  "acastro" : User("Ariel", "Castro", "acastro", ["1st message would be here", " 2nd message would be here", "3rd message would be here"], ["what do prisoners use to talk to one another?", "wut?", "cell phones"], "user"),
                  "acundiff" : User("Austin", "Cundiff", "acundiff", ["1st message would be here", " 2nd message would be here", "3rd message would be here"], ["what do prisoners use to talk to one another?", "wut?", "cell phones"], "user")}


  