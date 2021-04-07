from flask import url_for, flash, redirect, request, render_template, send_file

from src.canvas import * # inject canvas, course objects into file
from src.controllers.login_controller import *
import os
import requests


def file_download(page_to_load):
  # brute force loop to get file/folder ids from url. Url is currently dictating what view is loaded, and url is dynamic for files
  readingFileId = False
  readingFolderId = False
  folder_id = ''
  file_id = ''
  for i in range(len(page_to_load)):
    if(page_to_load[i] == '-'):
      readingFileId = True
      readingFolderId = False
    elif(page_to_load[i] == '_'):
      readingFolderId = True
    elif(readingFileId):
      file_id = file_id + page_to_load[i]
    elif(readingFolderId):
      #print(page_to_load[i])
      folder_id = folder_id + page_to_load[i]

  #print(file_id)
  page_to_load = page_to_load.replace('downloadfile_','') + '.html' # so the url will stay the same on reload
  int_file = int(file_id)
  file_to_download = course.get_file(int_file)
  download_path = '/'.join( os.getcwd().split('/')[:3] ) + '/Downloads'
  #file_to_download.url = file_to_download.url.replace('https://admin.p4hteach.org','https://35.184.234.66') # this url needs to be added to environment variables
  #file_to_download.download(file_to_download)
  r = requests.get(file_to_download.url,verify=False)
  open('tmp/downloadfile', 'wb').write(r.content)

  return folder_id, file_to_download


def render_resources(current_user):    
  folders_ = course.get_folders()._get_next_page()
  folders = [] 
  icons = []
  for i in range(1,len(folders_)):
    folders.append(folders_[i])
    if("VIDEO" in folders_[i].name.upper() or "VIDEYO" in folders_[i].name.upper()):
      icons.append("oi-video")
    elif("PICTURE" in folders_[i].name.upper() or ("FOTO" in folders_[i].name.upper()) or ("PHOTO" in folders_[i].name.upper()) ):
      icons.append("oi-image")
    else:
      icons.append("oi-book")
    #print("folders_ ", folders_[i].name)
  
  return render_template('resources.html', folders = folders,icons = icons,  current_user =  current_user)
