from src.canvas import CANVAS,course, CanvasException # inject canvas, course objects into file
from src.models.profile_model import Profile
from flask import Flask, abort, Response, request
from flask_login import current_user
from src.models.user_model import User, UserFiles
from src import file_upload
from src import db
import base64
import json


def convertDate(inproperDate):
  year = inproperDate[2:4]
  day = inproperDate[5:7]
  month = inproperDate[8:10]
  properDate = ''.join([month,'/', day, '/', year])
  return properDate

def getProfilePic(user):
  # Canvas does not allow external files to change profile pictures
  #avatar = profile.canvas_user.get_avatars()[1] returns dotted pic for some reason
  #if(len(profile.posts) > 0):
    #avatar = profile.posts[0].author['avatar_image_url']

  avatar = UserFiles.query.filter_by(userId=user.id,postId=user.canvasId).first() # post id as canvas id is profile pic?
  if(avatar):
    #print('using avatar from db')
    #print(avatar)
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
  #announcements = canvas.get_announcements(context_codes='course_1') # canvas announcements lack documentation, so gonna just use regular discussion posts
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
    post_file = (req.files['file']) # check to see if there was files attached
  except:
    print('no file attached')
    post_file = None

  # make post in canvas
  title = user.username + ' ' + str(user.canvasId) # title = user's profile name
  post = course.create_discussion_topic(
      title = title,
      user_name = current_user.name, # person posting it
      message = new_post,
      user_can_see_posts = True,
      published = True,
      #attachments = post_file,
  )

  if(post_file is not None):
    userFileModel = UserFiles(userId=current_user.id,postId=post.id,data=post_file.read(),userFile__file_name=post_file.filename)
    #post_file.save(os.path.join(app.config['UPLOAD_PATH'], post_file.filename))
    userFile = file_upload.save_files(userFileModel, files={
      "userFile": post_file,
    })
  #post.attachments = post_file
  #post = post.update(discussion_topic = {'attachment' : post_file})

  year = post.posted_at[2:4]
  day = post.posted_at[5:7]
  month = post.posted_at[8:10]
  proper_date = ''.join([month,'/', day, '/', year])
  #print("topic being posted: ", post.title, " author: ", post.author)
  # send back html for post
  post_id = str(post.id)
  # NOTE: post.author['avatar_image_url'] does work in getting canvas avatar, but canvas avatars have been impossible to update
  post_html = '<article id="' + post_id + '''"class="post_box">
  <div class="profile-name">
  <div class="profile-pic">
  <figure class="thumbnail ">
  <img id="profile-post-''' + post_id + '" alt="placeholder" class="img-fluid avatar-sm" src="' + post.author['avatar_image_url'] + '"/>' + '''
  </figure>
  </div>
  <div class="col-10"><header class="text-left">
  <figcaption class="comment-user"><b>''' + current_user.name + '''</b></figcaption>
  ''' + '<time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i>' + proper_date + '''</time></header></div></div>
  <div class="post">
  <div class="">
  ''' + new_post + '''
  </div><hr>'''
  if(post_file is not None):
    post_html += '<img id="display-upload-' + post_id + '" alt="attachment" class="img-fluid post-pic" />'

  post_html += '''<div class="text-center"></div> <div id="comments-
  ''' + post_id + '''" ><label class = "comment_label" for="from">Comments</label> <div id="reply_div-'
  ''' + post_id + '''"class="reply_div"> <div class="col-8"> <textarea class= "text_box" name="message" id="textbox-'
  ''' + post_id + '''"onkeyup="" size="5" placeholder="Comment"></textarea><span class="upload_icon oi oi-cloud-camera" aria-hidden="true"></span></div> <a href=""name="'
  ''' + post_id + '" id="reply-' + post_id + '" class="reply_button col-4 btn-sm"><i class="fa fa-reply"></i> Reply</a></div></div></article>'

  profilePic = getProfilePic(current_user)
  return post_html, post_id, profilePic

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
  #new_comment = req.get_json()["text"]
  comment_text = req.form['text']
  #print("reply:", comment_text)
  # make post in canvas
  topic = course.get_discussion_topic(post_id)
  comment = topic.post_entry(
      message = comment_text,
      user_name = current_user.name
  )
  profilePic = getProfilePic(current_user)
  # send back html for post
  comment_html = '<div class="post_comment profile-pic-post"><img alt="placeholder" class="img-fluid rounded-circle avatar-sm" src="data:;base64,' + profilePic + '"/><div class="word_bubble"><p><b>' + current_user.username + '</b><br>' + comment_text + '</p></div></div>'
  return comment_html

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









