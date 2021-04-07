from src.canvas import * # inject canvas, course objects into file
from src.models.profile_model import Profile
from flask import url_for, flash, redirect, request, render_template, send_file
from src.models.user_model import User, UserFiles
import requests 
import base64
from src import file_upload

def loadProfile(profile,all_users,current_user,rocket_user):
  #print('loading profile')
  #profile.canvas_user = CANVAS.get_user(1) # if no user_id is passed, we assign current user

  # Canvas does not allow external files to change profile pictures
  #avatar = profile.canvas_user.get_avatars()[1] returns dotted pic for some reason
  #if(len(profile.posts) > 0):
    #avatar = profile.posts[0].author['avatar_image_url']
  #else: 

  avatar = UserFiles.query.filter_by(userId=current_user.id,postId=current_user.canvasId).first()
  if(avatar): 
    #print('using avatar from db')
    #print(avatar)
    avatarImg = base64.b64encode(avatar.data).decode("utf-8")
    profile.profile_pic = avatarImg
  else: # no avatar set 
    avatarFile = open('src/static/images/profile.png', 'rb').read()
    avatarImg = base64.b64encode(avatarFile).decode('utf-8')
    profile.profile_pic = avatarImg  

  profile.user = current_user
  #print(rocket_user['userId'])
  return render_template('profile.html', profile = profile,  current_user = current_user, users = all_users,rocket_user = rocket_user)

def loadProgress(profile_id):
  # permission = checkUserPermission() to do 
  # if(permission or profile_id == current_user.id):
  #int_assignment_id = int(assignment_id)
  # else: 
  # abort(Response('You do not have permission to view this teacher's progress'))
  user = CANVAS.get_user(1) #temp until canvas users are synced with user db
  user_assignments = list(user.get_assignments(user.id))
  #print(user_assignments)
  for i in range(len(user_assignments)):
    user_assignments[i].description = user_assignments[i].description.replace('<p>','').replace('</p>','') #get rid of stupid html tags. like why is this even being returned

  return user_assignments 


def getProgress(request,user_id,assignment_id):
  #int_assignment_id = int(assignment_id)
  assignment = course.get_assignment(assignment_id)
  try:
    submission = assignment.get_submission(user_id)
  except:
    return False

  #print(submission.attachments)
  if(submission.attachments):
    #for i in range(len(submission.attachments)):
      #print("submission attachment ", submission.attachments[i])
      file_url = submission.attachments[0]['url']
      r = requests.get(file_url,verify=False)
      open('tmp/downloadMilestone', 'wb').write(r.content)

      #file_to_download.download(file_to_download.filename) # download each file associated with assignment submission 
      #return file_to_download
      #print(submission.attachments[0])
      return submission.attachments[0]
  else:  
    return False 

# admins should be only ones uploading progress
def updateProgress(request,user_id,assignment_id):
  print("uploading asssignment")
  #int_assignment_id = int(assignment_id)
  assignment = course.get_assignment(assignment_id)
  # user_id = getUserIdFromProfile(profile_id)
  # oorrr canvas_id getUser(user_id).canvasId
  canvas_user = CANVAS.get_user(user_id) # temp
  #submission_dict = {}
  #submission_dict['submission_type'] = 'online_upload'
  #submission_dict['assignment_id'] = assignment_id
  #submission_dict['user_id'] = canvas_user.id
  #for file in request.files:
    #upload_file
  #try:
    #assignment.submit(submission_dict,request.files['file'])
    #assignment.submit(submission_dict)
  assignment.submit(
      submission={"submission_type": "online_upload"},
      file=request.files["milestone.png"],
      as_user_id=user_id # canvas people said this will only work with admin id
  )
  return True
  #except():
    #print("submission error")
    #return False

def updateProfile(req,current_user):
  #print('form')
  #print(req.form)
  canvas_user = course.get_user(current_user.canvasId)

  name_ = req.form['name']
  school_ = req.form['school']
  email_ = req.form['email']
  phone_ = req.form['phone']
  location_ = req.form['location']
  bio_ = req.form['bio']
  avatarUpdate = req.files['avatar'] # check to see if there was profile file attached

  if(avatarUpdate):
    prevAvatar = UserFiles.query.filter_by(userId=current_user.id,postId=current_user.canvasId).first() # check if avatar already exists
    #print("model: ", prevAvatar)
    if(prevAvatar):
      #print("updating avatar")
      prevAvatar.data = avatarUpdate.read()
      avatar = file_upload.update_files(prevAvatar, files={
          "userFile": avatarUpdate
      })
    else:
      userFileModel = UserFiles(userId=current_user.id,postId=current_user.canvasId,data=avatarUpdate.read())
      avatar = file_upload.save_files(userFileModel, files={
        "userFile": avatarUpdate,
      })

    
  # TO DO change the db user as well 
  if(avatarUpdate != None):
    canvas_user.edit(user = {"avatar":avatarUpdate}) # not working
  if(name_ != ''):
    canvas_user.edit(user = {"name":name_})
  if(school_ != ''):
    canvas_user.edit(user = {"sortable_name":school_}) #Since we are using Canvas User objects, we store phone as sortable_name
  if(email_ != ''):
    canvas_user.edit(user = {"email":email_})
  if(phone_ != ''):
    canvas_user.edit(user = {"short_name":phone_}) #Since we are using Canvas User objects, we store phone as short_name
  if(location_ != ''):
    canvas_user.edit(user = {"title":location_})
  if(bio_ != ''):
    canvas_user.edit(user = {"bio":bio_})
  return #todo
   

