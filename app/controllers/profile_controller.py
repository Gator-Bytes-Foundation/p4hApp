from app.canvas import * # inject canvas, course objects into file
from app.models.profile_model import Profile
from flask import url_for, flash, redirect, request, render_template, send_file

def loadProfile(profile,all_users,current_user):
  global edit_mode_on
  edit_mode_on = False
  print('loading profile')
  if(profile.canvas_user == None):
    print("default profile")
    profile.canvas_user = CANVAS.get_user(1) # if no user_id is passed, we assign current user
  # temp use of global variable
  #profile_pic = profile.canvas_user.get_avatars()[1] returns dotted pic for some reason
  if(len(profile.posts) > 0):
    profile_pic = profile.posts[0].author['avatar_image_url']
  
  profile.profile_pic = profile_pic
  profile.user = profile.user
  print(profile)
  return render_template('profile.html', profile = profile,  current_user = current_user, users = all_users)

def loadProgress(profile_id):
  # permission = checkUserPermission() to do 
  # if(permission or profile_id == current_user.id):
  #int_assignment_id = int(assignment_id)
  # else: 
  # abort(Response('You do not have permission to view this teacher's progress'))
  user = CANVAS.get_user(1) #temp until canvas users are synced with user db
  user_assignments = list(user.get_assignments(user.id))
  print(user_assignments)
  for i in range(len(user_assignments)):
    user_assignments[i].description = user_assignments[i].description.replace('<p>','').replace('</p>','') #get rid of stupid html tags. like why is this even being returned

  return user_assignments 


def getProgress(request,user_id,assignment_id):
  #int_assignment_id = int(assignment_id)
  assignment = course.get_assignment(int_assignment_id)
  submission = assignment.get_submission(user_id)
  if(submission.attachments != None):
    for i in range(len(submission.attachments)):
      print("submission attachment ", submission.attachments[i])
      file_to_download = course.get_file(int(submission.attachments[i]['id']))
      file_to_download.download(file_to_download.filename) # download each file associated with assignment submission 
      return file_to_download
  else:  
    return abort(Response('Progress has not been uploaded')) 

# admins should be only ones uploading progress
def updateProgress(request,user_id,assignment_id):
  #int_assignment_id = int(assignment_id)
  assignment = course.get_assignment(assignment_id)
  # user_id = getUserIdFromProfile(profile_id)
  # oorrr canvas_id getUser(user_id).canvasId
  admin_id = 1
  canvas_user = CANVAS.get_user(user_id) # temp
  #submission_dict = {}
  #submission_dict['submission_type'] = 'online_upload'
  #submission_dict['assignment_id'] = assignment_id
  #submission_dict['user_id'] = canvas_user.id

  print(request.files['file'])
  try:
    #assignment.submit(submission_dict,request.files['file'])
    #assignment.submit(submission_dict)
    assignment.submit(
        submission={"submission_type": "online_upload"},
        file=request.files['file'],
        as_user_id=admin_id # canvas people said this will only work with admin id
    )
    return True
  except(e):
    print(e)
    return False

def updateProfile(req):
  #print(req.form)
  name_ = req.form['name']
  school_ = req.form['school']
  email_ = req.form['email']
  phone_ = req.form['phone']
  location_ = req.form['location']
  bio_ = req.form['bio']
  files = req.files
  print("file: ",files)
  if(files != None):
    current_user.edit(user = {"avatar":files})
  if(name_ != ''):
    current_user.edit(user = {"name":name_})
  if(school_ != ''):
    current_user.edit(user = {"sortable_name":school_}) #Since we are using Canvas User objects, we store phone as sortable_name
  if(email_ != ''):
    current_user.edit(user = {"email":email_})
  if(phone_ != ''):
    current_user.edit(user = {"short_name":phone_}) #Since we are using Canvas User objects, we store phone as short_name
  if(location_ != ''):
    current_user.edit(user = {"title":location_})
  if(bio_ != ''):
    current_user.edit(user = {"bio":bio_})
  return #todo
   

