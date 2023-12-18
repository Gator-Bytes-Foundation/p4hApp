from flask import render_template, Response, abort
from flask_login import current_user
from src.canvas import * # inject canvas, course objects into file
import requests
import dateutil.parser

def fileDownload(file_id):
  '''
    Downloads file from canvas and saves it to tmp/downloadfile
  '''
  int_file = int(file_id)
  file_to_download = course.get_file(int_file)
  r = requests.get(file_to_download.url,verify=False)
  open('src/tmp/downloadfile', 'wb').write(r.content)
  return file_to_download

def getResourceFolders():
  '''
    Returns every top level folder within canvas containing files
  '''
  try:
    folders = list(course.get_folders())
  except CanvasException as e:
    abort(Response('CanvasException getting folders: ' + str(e)))
    
  icons = []
  for folder in folders:
    if("video" in folder.name.lower() or "videyo" in folder.name.lower()):
      icons.append("fa-video")
    elif(("foto" in folder.name.lower()) or ("photo" in folder.name.lower()) ):
      icons.append("fa-camera")
    elif("picture" in folder.name.lower() or ("image" in folder.name.lower()) ):
      icons.append("fa-image")
    elif("lesson" in folder.name.lower() or ("book" in folder.name.lower()) ):
      icons.append("fa-book")
    else:
      icons.append("fa-file")

  resources = {
    "folders": folders,
    "icons": icons
  }
  return resources

def filesPage(folderId):
  '''
    Gets all files from a folder
  '''
  # user clicked folder => load next layer
  folderId = folderId.replace('files_','').replace('.html','') # get folder id from template file name (Todo change to folder id for /resources flask route)
  files = course.get_folder(int(folderId)).get_files()
  return files, folderId

def renderResourceFolders():    
  resources = getResourceFolders()
  return render_template('resources.html', folders = resources["folders"], icons = resources["icons"], current_user = current_user)
