from canvas import *


def file_download(page_to_load, course):
  file_id = page_to_load.replace('download_files_','')
  page_to_load = page_to_load.replace('download_','') # so the url will stay the same on reload
  int_file = int(file_id)
  file_to_download = course.get_file(int_file)
  download_path = '/'.join( os.getcwd().split('/')[:3] ) + '/Downloads'
  print("file ", file_to_download.public_url)
  new_url = file_to_download.public_url.replace('localhost',API_URL) # this url needs to be added to environment variables
  file_to_download.update(file = {file_to_download.public_url : new_url})
  file_to_download.download(file_to_download.filename)


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
