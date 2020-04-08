from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from profile import *


# old deprecated code
def load_messages(username,dict_of_users):
  list_of_messages_in = dict_of_users.get(username).messages_in # get messages coming in
  list_of_messages_out = dict_of_users.get(username).messages_out # get messages going out 
  return render_template('message.html', users = dict_of_users, user_messages_in = list_of_messages_in, user_messages_out = list_of_messages_out)
  
