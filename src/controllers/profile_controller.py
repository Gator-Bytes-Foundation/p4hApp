from src.canvas import * # inject canvas, course objects into file
from flask_login import current_user
from flask import render_template, Response, abort
from src.models.user_model import User, UserFiles
from src import db
from src.controllers.posts_controller import getProfilePic
import requests
from src import file_upload

def loadProfile(profile,rocket_user = {}):

  allUsers = User.query.all()
  profile.profile_pic = getProfilePic(profile.user)
  if(current_user.id != profile.user.id): # if user is looking at different profile
    currentUserProfilePic = getProfilePic(current_user)
  else: currentUserProfilePic = profile.profile_pic

  return render_template('profile.html', profile = profile,  current_user = current_user, users=allUsers, rocket_user = rocket_user, currentUserProfilePic = currentUserProfilePic)

def loadProgress(user_id):
  canvas_user = CANVAS.get_user(user_id) #temp until canvas users are synced with user db
  if(canvas_user.id != current_user.canvasId and current_user.canvasId != 1):
    abort(Response("You do not have permission to view this teacher's progress"))
  p4hCourseId = 1
  # NOTE: assignent has has_submitted_submissions as a field to check if user has submitted
  user_assignments = list(canvas_user.get_assignments(p4hCourseId))

  milestones = []
  for assign in user_assignments:
    milestone = {}
    milestone['id'] = assign.id
    milestone['name'] = assign.name
    milestone['description'] = assign.description.replace('<p>','').replace('</p>','') #get rid of stupid html tags. like why is this even being returned
    submissions = assign.get_submissions()
    milestone['has_submission'] = False

    for sub in submissions:
      if(canvas_user.id == sub.user_id):
        if(hasattr(sub, 'attachments')):
          milestone['has_submission'] = True

    milestones.append(milestone)

  return milestones, canvas_user


def getProgress(user_id,assignment_id):
  assignment = course.get_assignment(assignment_id)
  try:
    submission = assignment.get_submission(user_id)
  except:
    return False

  if(submission.attachments):
    #for i in range(len(submission.attachments)): # todo support multiple attachments
      #print("submission attachment ", submission.attachments[0])
      file_url = submission.attachments[0]['url']
      r = requests.get(file_url,verify=False)
      filePath = f'tmp/{user_id}/{assignment_id}/'
      srcFilePath = "src/"+filePath
      if not os.path.exists(srcFilePath):
        os.makedirs(srcFilePath)
      
      open(srcFilePath+"downloadMilestone.pdf", 'wb').write(r.content)

      #file_to_download.download(file_to_download.filename) # download each file associated with assignment submission
      return submission.attachments[0], filePath
  else:
    return False

# admins should be only ones uploading progress
def updateProgress(request,user_id,assignment_id):
  int_assignment_id = int(assignment_id)
  try:
    assignment = course.get_assignment(int_assignment_id)
  except(err):
    print('canvas GET assignment failed')
    return False
  print(request.files["progressFile.pdf"])
  # oorrr canvas_id getUser(user_id).canvasId
  #canvas_user = CANVAS.get_user(int(user_id)) # temp
  #submission_dict = {}
  #submission_dict['submission_type'] = 'online_upload'
  #submission_dict['assignment_id'] = assignment_id
  #submission_dict['user_id'] = canvas_user.id
  #for file in request.files:
    #upload_file
  #assignment.submit(submission_dict,request.files['file'])
  #assignment.submit(submission_dict)

  assignment.submit(
      submission={"submission_type": "online_upload"},
      file=request.files["progressFile.pdf"],
      as_user_id=str(user_id) # sending user id works
  )
  return True

def updateProfile(req):
  canvas_user = CANVAS.get_user(current_user.canvasId)

  name_ = req.form['name']
  school_ = req.form['school']
  email_ = req.form['email']
  phone_ = req.form['phone']
  location_ = req.form['location']
  bio_ = req.form['bio']
  avatarUpdate = req.files['avatar'] # check to see if there was profile file attached

  if(avatarUpdate):
    prevAvatar = UserFiles.query.filter_by(userId=current_user.id,postId=current_user.canvasId).first() # check if avatar already exists
    if(prevAvatar):
      prevAvatar.data = avatarUpdate.read()
      avatar = file_upload.update_files(prevAvatar, files={
          "userFile": avatarUpdate
      })
    else:
      userFileModel = UserFiles(userId=current_user.id,postId=current_user.canvasId,data=avatarUpdate.read())
      avatar = file_upload.save_files(userFileModel, files={
        "userFile": avatarUpdate,
      })
    #edit canvas avatar as well
    canvas_user.edit(user = {"avatar":avatarUpdate}) # todo look into why this does not update canvas avatar

  if(name_ != ''):
    current_user.name = name_
    canvas_user.edit(user = {"name":name_})
  if(school_ != ''):
    current_user.school = school_
  if(email_ != ''):
    current_user.email = email_
    canvas_user.edit(user = {"email":email_})
  if(phone_ != ''):
    current_user.phone = phone_
  if(location_ != ''):
    current_user.location = location_
  if(bio_ != ''):
    current_user.bio = bio_
    canvas_user.edit(user = {"bio":bio_})

  db.session.commit() #
  return current_user


