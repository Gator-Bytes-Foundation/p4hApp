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


  