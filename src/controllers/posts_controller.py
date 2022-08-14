from src.canvas import CANVAS,course, CanvasException # inject canvas, course objects into file
from src.models.profile_model import Profile
from flask import Flask, abort, Response, request
from flask_login import current_user
from src.models.user_model import User, UserFiles
from src import file_upload
from src import db
import base64
import json
from flask.json import jsonify


def convertDate(inproperDate):
  year = inproperDate[2:4]
  day = inproperDate[5:7]
  month = inproperDate[8:10]
  properDate = ''.join([month,'/', day, '/', year])
  return properDate

def getProfilePic(user):
  # Canvas doesnt seem to allow external files to change profile pictures
  # todo research way to update canvas profile pictures through app
  #avatar = profile.canvas_user.get_avatars()[1] # returns dotted pic for some reason

  avatar = UserFiles.query.filter_by(userId=user.id,postId=user.canvasId).first() # post id as canvas id is profile pic?
  if(avatar):
    avatarImg = base64.b64encode(avatar.data).decode("utf-8")
    return avatarImg
  else: # no avatar set
    avatarFile = open('src/static/images/profile.png', 'rb').read()
    avatarImg = base64.b64encode(avatarFile).decode('utf-8')
    return avatarImg


#
# loads all canvas discussion posts that the profile user has posted and their associated comments
# user lookup could be a new profile being searched OR loading the user's own profile
#
def loadPosts(user):
  profile = Profile()
  canvas_id = user.canvasId
  recentPosts = []
  user = User.query.filter_by(canvasId=canvas_id).first()

  try:
    posts = list(course.get_discussion_topics()) # load profile posts
  except CanvasException as e:
    abort(Response('course not found'))

  # temporarily checking only up to 9 profile posts. Will eventually remove cap when "see earlier posts" button added
  end_index = len(posts)

  # loop through all profile posts
  for i in range(end_index):
    usernameId = user.username + ' ' + str(canvas_id) #used to identify user in canvas
    if(posts[i].title == usernameId and posts[i].message is not None): #only shows posts that the user has posted
      posts[i].message = posts[i].message.replace('</p>', '').replace('<p>', '')
      posts[i].posted_at = convertDate(posts[i].posted_at)
      posts[i].name = user.name
      posts[i].user = user
      posts[i].comments = loadPostComents(posts[i])
      posts[i].files = UserFiles.query.filter_by(userId=user.id,postId=posts[i].id).all()

      if(len(posts[i].files) > 0):
        image_data = base64.b64encode(posts[i].files[0].data).decode("utf-8")
        posts[i].img = image_data

      # Push profile post into recent posts array
      recentPosts.append(posts[i])

  # now adding posts to profile
  profile.posts = recentPosts
  profile.user = user
  profile.canvas_user = CANVAS.get_user(canvas_id)
  return profile
#
# Function will extract 'Admin' posts from discussion page on canvas and load them to Announcement page
#
def loadAnnouncements():
  adminId = 1
  adminUser = User.query.filter_by(canvasId=adminId).first()
  # for now load posts as if it were admin profile TODO: figure out what is wrong with get_announcements canvas API
  profile = loadPosts(adminUser)

  # todo switch to canvas announcements api
  # canvas announcements lack documentation, so using regular discussion posts
  # announcements = canvas.get_announcements(context_codes='course_1')
  return profile.posts


'''
  abstract: Takes in user info on who is posting and where they are posting and adds the post on Canvas
'''
def handlePost(user_id, req):

  if(current_user.is_anonymous == True):
    abort(Response('Must be logged in to post'))
  user = User.query.filter_by(id=user_id).first()
  new_post = req.form['text']
  try:
    postFile = (req.files['file']) # check to see if there were files attached
  except:
    print('no file attached')
    postFile = None

  # make post in canvas
  title = user.username + ' ' + str(user.canvasId) # title is user's profile name
  post = course.create_discussion_topic(
      title = title,
      user_name = current_user.name, # person posting it
      message = new_post,
      user_can_see_posts = True,
      published = True,
      #attachments = postFile, # todo: if canvas api fixes attachments, then use this instead of DB
  )

  if(postFile is not None):
    userFileModel = UserFiles(userId=current_user.id,postId=post.id,data=postFile.read(),userFile__file_name=postFile.filename)
    userFile = file_upload.save_files(userFileModel, files={
      "userFile": postFile,
    })

  year = post.posted_at[2:4]
  day = post.posted_at[5:7]
  month = post.posted_at[8:10]
  proper_date = ''.join([month,'/', day, '/', year])
  # NOTE: post.author['avatar_image_url'] does work in getting canvas avatar, but canvas avatars have been impossible to update
  profilePic = getProfilePic(current_user)
  return post, profilePic


def loadPostComents(post):
  if(not hasattr(post,'get_topic_entries')): return
  comments = list(post.get_topic_entries())
  allCommentsMap = {}
  postComments = []

  for comment in comments:
    if(comment.message is not None):
      comment.message = comment.message.replace('</p>', '')
      comment.message = comment.message.replace('<p>', '') # get rid of the html
    postComments.append(comment)

  # store all comments of this post in object/map to map to one another on client side
  allCommentsMap[str(post.id)] = postComments
  return allCommentsMap

def handleComment(req,post_id):
  comment_text = req.form['text']
  topic = course.get_discussion_topic(post_id) # get post in canvas
  comment = topic.post_entry(
      message = comment_text,
      user_name = current_user.name
  )
  profilePic = getProfilePic(current_user)
  res = ({
    'success':True,
    'data': {'profilePic':profilePic}
  })
  return res

def deletePost(req,post_id):
  post = course.get_discussion_topic(post_id)
  print(post)
  try:
    res = post.delete()
    print("post deleted: ", res)
  except:
    print('post not deleted')
    return json.dumps({'success':False}), 400, {'ContentType':False}

  return res

def deleteComment(req,post_id,comment_id):
  post = course.get_discussion_topic(post_id)
  comment = post.get_entries([comment_id])[0]
  try:
    res = comment.delete()
    print("comment deleted: ", res)
    return res
  except:
    print('comment not deleted')
    return json.dumps({'success':True}), 200, {'ContentType':False} # error gets triggered even though comment was deleted

class Post():
  def __init__(self,post,user_object, post_message, post_media):
    post.user = user_object
    post.message = post_message
    post.media = post_media









