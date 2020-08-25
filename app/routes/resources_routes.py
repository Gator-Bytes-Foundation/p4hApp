from flask import url_for, flash, redirect, request, render_template, send_file
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.urls import url_parse
from app import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from app.canvas import CANVAS, course # inject canvas, course objects into file
from app.models.user_model import User
from app.controllers.resources_controller import file_download, render_resources
''' Import Needed Libraries ''' 
import json
import requests
import random
import logging
import os

#
# If a request from client has variable data in it, we handle it here and get the data out of the url before routing the user
#
@app.route('/resources/<page_to_load>', methods=['GET', 'POST'])
def customResourceCalls(page_to_load): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  #print("page loading: ",page_to_load)

  if('file' in page_to_load):
    return files_page(page_to_load)
  
  return render_template(page_to_load)

# RESOURCES REQUESTS #
@app.route('/resources', methods=['GET', 'POST'])
def resources():    
  return render_resources(current_user)

def files_page(page_to_load):
  if('download' in page_to_load): # check if file, then download
    folder_id, file_to_download = file_download(page_to_load)
    filename = file_to_download.filename
    print(filename)
    #APP_ROOT = os.path.dirname(os.path.abspath(__file__))
    #UPLOAD_FOLDER = os.path.join(APP_ROOT, 'tmp')
    return send_file('../tmp/downloadfile', as_attachment=True,attachment_filename=filename)
  # else, user clicked folder => load next layer
  folder_id = page_to_load.replace('files_','').replace('.html','')
  int_id = int(folder_id)
  files = course.get_folder(int_id).get_files()._get_next_page()
  return render_template('files.html', files = files,folder_id = folder_id,  current_user =  current_user)        
