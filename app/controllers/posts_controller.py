from app.canvas import CANVAS,course, CanvasException # inject canvas, course objects into file
from app.models.profile_model import Profile
from flask import abort, Response
from app.models.user_model import User
#
# Post class controls all methods regarding a profile post or announcemnt post
# 




#  
# loads all canvas discussion posts that the profile user has posted and their associated comments
#
def loadPosts(canvas_id):
  # initialize variables
  profile = Profile()
  recentPosts = []
  commentsMap = {}
  user = User.query.filter_by(canvasId=canvas_id).first()
   # user_look_up could be a new profile being searched OR loading the user's own profile
  proper_date = ''
  
  try:
    posts = list(course.get_discussion_topics()) # load profile posts    
    #print("topic in load profile: ", vars(topics[0]))
  except CanvasException as e:
    abort(Response('course not found')) 

  # temporarily checking only up to 9 profile posts. Will eventually remove cap when "see earlier posts" button added
  if(len(posts) < 9):
    end_index = len(posts)
  else: 
    end_index = 9
    
  # loop through all profile posts
  for i in range(end_index):
    if(posts[i].author['id'] == canvas_id and posts[i].message is not None): #only shows posts that the user has posted
      posts[i].message = posts[i].message.replace('</p>', '').replace('<p>', '')
      # format date info 
      year = posts[i].posted_at[2:4]
      day = posts[i].posted_at[5:7]
      month = posts[i].posted_at[8:10]
      proper_date = ''.join([month,'/', day, '/', year])
      posts[i].posted_at = proper_date # replace old ugly format
      # push profile post into recent posts array
      posts[i].comments = loadPostComents(posts[i])
      #posts[i].avatar = posts[i].canvas_user.get_avatars()[1].url
      recentPosts.append(posts[i])
    # end of if statement

  # now adding posts to profile
  profile.posts = recentPosts
  profile.user = user
  profile.canvas_user = CANVAS.get_user(canvas_id)
      
  return profile
#
# Function will extract 'Admin' posts from discussion page on canvas and load them to Announcement page
#
def loadNewsFeed():  
  # initialize variables
  recentPosts = []
  array_of_comments = {}
  proper_date = ''
  try:
    #announcements = canvas.get_announcements(context_codes='course_1') # canvas announcements lack documentation, so gonna just use regular discussion posts
    announcements = course.get_discussion_topics()
    topics = announcements._get_next_page() # this is the list of all topics (with embedded posts) in the course
    #print("topic: ", topics[1].author["display_name"])
  except CanvasException as e:
    print("error", e)
  #loop through each post  
  for i in range(len(topics)):
    if(topics[i].title == 'Announcement'): #only shows posts that the user has posted
      if(topics[i].message is not None):
        topics[i].message = topics[i].message.replace('</p>', '')
        topics[i].message = topics[i].message.replace('<p>', '') # get rid of the html
        year = topics[i].posted_at[2:4]
        month = topics[i].posted_at[5:7]
        day = topics[i].posted_at[8:10]
        proper_date = proper_date.join([month,'/', day, '/', year])
        recentPosts.append(topics[i])
        #try:
        comments = topics[i].list_topic_entries()._get_next_page()
        temp_comments = []
        # only loop through comments of posts we are showing
        for j in range(len(comments)):
          if(comments[j].message is not None):
            comments[j].message = comments[j].message.replace('</p>', '')
            comments[j].message = comments[j].message.replace('<p>', '') # get rid of the html
          temp_comments.append(comments[j])
        array_of_comments[str(topics[i].id)] = temp_comments
        
      #except:
      print("no comments for announcement")    
        
  # after looping through each post, return the array
  return recentPosts, array_of_comments, proper_date      


def handlePost(user_id, request,current_user): 
  if(current_user.is_anonymous == True):
    abort(Response('Must be logged in to post')) 

  new_post = str(request.form['text'])
  userid = str(request.form['userid'])
  #attachments_ = []
  try:
    attachments_ = (request.files['file']) # check to see if there was files attached
  except:
    attachments_ = None
  #print(new_post)
  # make post in canvas
  if('announcement' in user_id):
    title = 'Announcement'
  else:
    title = current_user.username
  post = course.create_discussion_topic(
      title = title,
      user_name = current_user.email,
      author = user_id,
      message = new_post,
      user_can_see_posts = True,
      published = True,
      attachments = attachments_,
      file = {'attachment':attachments_}
      
  )
  #print("current post ", vars(post))
  #post.attachments = attachments_
  #post = post.update(discussion_topic = {'attachment' : attachments_})
  year = post.posted_at[2:4]
  day = post.posted_at[5:7]
  month = post.posted_at[8:10]
  proper_date = ''.join([month,'/', day, '/', year])    
  print("topic being posted: ", post, " entry: ", "nothin fo now")
  # send back html for post
  post_id = str(post.id)
  post_html = '<article id="' + post_id + '"class="post_box"> <div class="profile_name"> <div class="profile_pic"> <figure class="thumbnail "><img alt="placeholder" class="img-fluid rounded-circle" src="' + post.author['avatar_image_url'] + '"/></figure></div> <div class="col-10"><header class="text-left"><figcaption class="comment-user"><b>' + current_user.username + '</b></figcaption><time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i> ' + proper_date + '</time></header></div></div> <div class="post"> <div class="">' + new_post + '</div><hr>   <div class="text-center"></div> <div id="comments-' + post_id + '" ><label class = "comment_label" for="from">Comments</label> <div id="reply_div-' + post_id + '"class="reply_div"> <div class="col-8"> <textarea class= "text_box" name="message" id="textbox-' + post_id + '"onkeyup="" size="5" placeholder="Comment"></textarea><span class="upload_icon oi oi-cloud-camera" aria-hidden="true"></span></div> <a href=""name="' + post_id + '" id="reply-' + post_id + '" class="reply_button col-4 btn-sm"><i class="fa fa-reply"></i> Reply</a></div></div></article>'  
  return post_html  

def loadPostComents(post):
  comments = post.list_topic_entries()._get_next_page()
  allCommentsMap = {}
  postComments = []

  for j in range(len(comments)):
    if(comments[j].message is not None):
      comments[j].message = comments[j].message.replace('</p>', '')
      comments[j].message = comments[j].message.replace('<p>', '') # get rid of the html
    # store the comment in an array
    postComments.append(comments[j])

  # store all comments of this post in object/map to map to one another on client side
  allCommentsMap[str(post.id)] = postComments
  return allCommentsMap

def handleComment(comment_id, request,current_user):
  #new_comment = request.get_json()["text"]
  comment_text = request.form['text']
  print("reply:", comment_text)
  # make post in canvas
  topic = course.get_discussion_topic(comment_id)
  comment = topic.post_entry(
      message = comment_text
  )
  # send back html for post
  comment_html = '<div class="post_comment"><figure class="thumbnail col-2"><img alt="placeholder" class="img-fluid rounded-circle" src="'+ comment.user['avatar_image_url']+'"/></figure><div class="word_bubble col-10"><p><b>' + current_user.username + ':</b><br>' + comment_text + '</p></div></div>'
  return comment_html  



class Post():
  def __init__(self,post,user_object, post_message, post_media):
    post.user = user_object
    post.message = post_message
    post.media = post_media 
    

  


  

    
  