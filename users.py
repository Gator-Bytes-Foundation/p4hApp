from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template




class User():
  def __init__(user, name, messages_in, messages_out):
    user.name = name
    user.messages_in = messages_in
    user.messages_out = messages_out
  def getUser(username):  
    testUser = test_user_data.get(username)
    return testUser
  
test_user_data = {"lcundiff" : User("Logan",["how u doin", " whats up", "hahaha"],["what do prisoners use to talk to one another?","wut?","cell phones"]), 
                  "acastro" : User("Ariel",["1st message would be here", " 2nd message would be here", "3rd message would be here"],["what do prisoners use to talk to one another?", "wut?", "cell phones"]),
                  "acundiff" : User("Austin",["1st message would be here", " 2nd message would be here", "3rd message would be here"],["what do prisoners use to talk to one another?", "wut?", "cell phones"]),}


  