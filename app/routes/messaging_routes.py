from flask import url_for, flash, redirect, request, render_template, send_file
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.urls import url_parse
from app import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from app.models.user_model import User
from app.canvas import CANVAS, course # inject canvas, course objects into file
from app.controllers.messaging_controller import load_messages
''' Import Needed Libraries ''' 
import json
from googleapiclient.discovery import build
import requests
from flask import make_response
from oauth2client.service_account import ServiceAccountCredentials, client
from oauth2client import file, client, tools
import random
from pyper import *
import pickle as p
import logging

# MESSAGING REQUESTS #
@app.route('/messaging')
def messaging():    
  return render_template('messaging.html',  current_user =  current_user)
