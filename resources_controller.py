from canvas import *
import os
import requests

def file_download(page_to_load, course):
  # brute force loop to get file/folder ids from url. Ids in url tell flask what list of files to load
  readingFileId = False
  readingFolderId = False
  folder_id = ''
  file_id = ''
  for i in range(len(page_to_load)):
    #
    if(page_to_load[i] == '-'):
      readingFileId = True
      readingFolderId = False
    elif(page_to_load[i] == '_'):
      readingFolderId = True
    elif(readingFileId):
      file_id = file_id + page_to_load[i]
    elif(readingFolderId):
      print(page_to_load[i])
      folder_id = folder_id + page_to_load[i]

  print(file_id)
  page_to_load = page_to_load.replace('download_','') + '.html' # so the url will stay the same on reload
  int_file = int(file_id)
  file_to_download = course.get_file(int_file)
  download_path = '/'.join( os.getcwd().split('/')[:3] ) + '/Downloads'
  print("file ", file_id)
  file_to_download.url = file_to_download.url.replace('https://admin.p4hteach.org','https://35.184.234.66') # this url needs to be added to environment variables
  print("file url", file_to_download.url)
  #file_to_download.update(file = {file_to_download.public_url : new_url})
  #file_to_download.download(file_to_download)
  r = requests.get(file_to_download.url,verify=False)
  
  with open('/Users/Logan/Downloads/p4hfile.txt', 'wb') as f:
    f.write(r.content)
  return folder_id


def render_resources(current_user):    
  course = canvas.get_course(1)
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
  
  return render_template('resources.html', folders = folders,icons = icons, current_user = current_user)
