from app.canvas import * # inject canvas, course objects into file
from app.models.profile_model import Profile
from flask import url_for, flash, redirect, request, render_template, send_file


current_user = CANVAS.get_user(1)

def loadProfile(profile,all_users):
  
  if(profile.user == None):
    print("loading default profile")
    profile.user = current_user.id # if no user_id is passed, we assign current user
  # temp use of global variable
  global edit_mode_on
  edit_mode_on = False

  profile_pic = profile.user.get_avatars()[1].url
  print('profile pic: ')
  print(current_user.get_avatars()[1])

  profile.profile_pic = profile_pic
  print(profile)
  return render_template('profile.html', profile = profile,  current_user= current_user,users = all_users)

def loadProgress(user):
  user_assignments = user.get_assignments(1)._get_next_page()
  for i in range(len(user_assignments)):
    user_assignments[i].description = user_assignments[i].description.replace('<p>','').replace('</p>','') #get rid of stupid html tags. like why is this even being returned

  return render_template('progress.html', assignments = user_assignments,user = user, current_user= current_user)

def assignment_download(page_to_load):
  assignment_id = page_to_load.replace('download_assignment_','')
  page_to_load = page_to_load.replace('download_','') # so the url will stay the same on reload
  int_assignment_id = int(assignment_id)
  assignment = course.get_assignment(int_assignment_id)
  submission = assignment.get_submission(35)
  if(submission.attachments != None):
    for i in range(len(submission.attachments)):
      print("submission attachment ", submission.attachments[i])
      file_to_download = course.get_file(int(submission.attachments[i]['id']))
      file_to_download.download(file_to_download.filename) # download each file associated with assignment submission   
  return #todo

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


def handle_submission(page_to_load, request, course, canvas_user):    
  #try:
  admin = CANVAS.get_user(1)
  id_number = page_to_load.replace('submit_','');
  submission_dict = {}
  submission_dict['submission_type'] = 'online_upload'
  submission_dict['assignment_id'] = str(id_number)
  submission_dict['user_id'] = admin.id
  USER_ID = canvas_user.id
  print(request.files['file'])
  assignments = admin.get_assignments(1)._get_next_page()
  for i in range(len(assignments)):
    if(str(assignments[i].id) == str(id_number)):
      #assignments[i].submit(submission_dict,request.files['file'])
      #assignments[i].submit(submission_dict)
      assignments[i].submit(
          submission={"submission_type": "online_upload"},
          file=request.files['file'],
          as_user_id=USER_ID
      )
      return "success"
    
  return "failed"
  #except():
    #return "failed"

  return render_template('progress.html', assignments = user_assignments,user = canvas_user)
