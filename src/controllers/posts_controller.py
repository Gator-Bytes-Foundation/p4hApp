import base64
import json
from flask import abort, Response, render_template
from flask_login import current_user
from src.canvas import CANVAS,course, CanvasException # inject canvas, course objects into file
from src.models.profile_model import Profile
from src.models.user_model import User, UserFiles
from src import file_upload

def convertDate(inproperDate):
  year = inproperDate[2:4]
  month = inproperDate[5:7]
  day = inproperDate[8:10]
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
def loadPosts(profileUser):
  profile = Profile()
  recentPosts = []

  try:
    posts = list(course.get_discussion_topics()) # load profile posts
  except CanvasException as e:
    abort(Response('course not found'))

  # temporarily checking only up to 9 profile posts. Will eventually remove cap when "see earlier posts" button added
  end_index = len(posts)

  # loop through all profile posts
  for i in range(end_index):
    usernameId = profileUser.username + ' ' + str(profileUser.canvasId) #used to identify user in canvas
    postProfileUsername = posts[i].title.split()[0]
    if(len(posts[i].title.split()) > 1): postAuthUsername = posts[i].title.split()[1]
    else: continue # this should only occur if canvas post was added manually
    
    postAuthor = User.query.filter_by(username=postAuthUsername).first() # announcements are all posts from the admins (until announcements canvas api is being used)
    if(postProfileUsername == profileUser.username and posts[i].message is not None and postAuthor is not None): #only shows posts belonging to user's profile
      # for now we are only storing one file per post
      file = UserFiles.query.filter_by(userId=profileUser.id,postId=posts[i].id).first()
      newPost = {
        'id': posts[i].id,
        'message': posts[i].message.replace('</p>', '').replace('<p>', ''),
        'posted_at': convertDate(posts[i].posted_at),
        'name': postAuthor.name,
        'user': profileUser.serialize(),
        'title': posts[i].title,
        'comments': loadPostComents(posts[i],profileUser),
        'files': [file.serialize()] if(file != None) else []
      }
      if(len(newPost['files']) > 0):
        image_data = newPost["files"][0]["data"]
        newPost['img'] = image_data

      # Push profile post into recent posts array
      recentPosts.append(newPost)

  # now adding posts to profile
  profile.posts = recentPosts
  profile.user = profileUser
  try:
    profile.canvas_user = CANVAS.get_user(profileUser.canvasId)
  except CanvasException as e:
    print(e)
    abort(Response('User does not exist on canvas'))
  return profile

def loadAnnouncements():
  ''' 
    abstract: Function will extract 'Admin' posts from discussion page on canvas and load them to Announcement page
  '''
  adminId = 1
  adminUser = User.query.filter_by(canvasId=adminId).first() # announcements are all posts from the admins (until announcements canvas api is being used)
  if(adminUser is None):
    return render_template('error.html',  error="No admin user in database"), 428
  roles = CANVAS.get_account(adminId).get_roles()
  # for now load posts as if it were admin profile TODO: figure out what is wrong with get_announcements canvas API
  profile = loadPosts(adminUser)
  current_user.role = roles[0]
  # todo switch to canvas announcements api
  # canvas announcements lack documentation, so using regular discussion posts
  # announcements = canvas.get_announcements(context_codes='course_1')
  return profile.posts

def renderAnnouncements():
  announcements = loadAnnouncements()
  currentUserProfilePic = getProfilePic(current_user)
  return render_template('announcements.html',  posts=announcements, current_user=current_user,currentUserProfilePic=currentUserProfilePic)



def createPost(user_id, req):
  '''
    abstrtact: Takes in user info on who is posting and where they are posting and adds the post on Canvas
  '''
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
  title = user.username + ' ' + current_user.username # title is profile user's username and poster username
  post = course.create_discussion_topic(
      title = title,
      user_name = current_user.username, # person posting it
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
  # NOTE: post.author['avatar_image_url'] does work in getting canvas avatar, but canvas avatars have been impossible to update
  profilePic = getProfilePic(current_user)
  return post, profilePic

def getCommentData(comment):
  '''
    Gets and organizes data from canvas topic entry
    NOTE: Due to canvas API being so limited and that we are not using canvas user specific calls
    username has been temporarily stored in message field. 
    It will eventually be deprecated for either our own DB posts/comments or decide to handle canvas logins
    as opposed to a functionality wrapper and DB that we currently use it for. 
  '''
  commentSections = comment.message.split(":")
  username = commentSections[0]
  commentMessage = ""
  for i in range(1,len(commentSections)):
    commentMessage += commentSections[i]
  return username, commentMessage

def loadPostComents(post,user):
  if(not hasattr(post,'get_topic_entries')): return
  comments = list(post.get_topic_entries())

  allCommentsMap = {}
  createComments = []

  for comment in comments:
    postAuthUsername = comment.message.split(":")[0]
    postAuthor = User.query.filter_by(username=postAuthUsername).first() # announcements are all posts from the admins (until announcements canvas api is being used)
    if(comment.message is not None and postAuthor is not None):
      print("username")
      print(comment)
      commentUsername, commentMessage = getCommentData(comment)
      commentAuthor = User.query.filter_by(username=commentUsername).first() # announcements are all posts from the admins (until announcements canvas api is being used)

      newComment = {
        'id': comment.id,
        'message': commentMessage,
        'posted_at': convertDate(comment.created_at),
        'name': commentAuthor.name,
        'author': commentAuthor.serialize()
      }
      createComments.append(newComment)

  # store all comments of this post in object/map to map to one another on client side
  allCommentsMap[str(post.id)] = createComments
  return allCommentsMap

def createComment(req,post_id):
  comment_text = req.form['text']
  if(course == None):
    return {
      "success": False,
      "data": {"message": "Canvas server down"}
    }
  topic = course.get_discussion_topic(post_id) # get post in canvas
  comment = topic.post_entry(
      message = current_user.username + ": " + comment_text,
  )
  profilePic = getProfilePic(current_user)
  res = ({
    'success':True,
    'data': {'profilePic':profilePic, "post_id": post_id}
  })
  return res

def deletePost(req,post_id):
  post = course.get_discussion_topic(post_id)
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









