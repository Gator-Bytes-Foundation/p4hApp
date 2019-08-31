from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from users import *

class Post():
  def __init__(post,user_object, post_message, post_media,replies,id_number):
    post.user = user_object
    post.message = post_message
    post.media = post_media 
    post.replies = replies
    post.id_number = id_number
    
  def load_profile():
    recentPosts = []
    for i in range(len(test_user_data)):
      recentPosts.append(test_user_data[i])
    return recentPosts
  
  def load_newsfeed():  
    recentPosts = []
    for i in range(len(test_user_data)):
      recentPosts.append(test_user_data[i])
    return recentPosts
  
  def load_recent_news():
    profilePosts = load_profile_posts()
    staffPosts = load_staff_posts()
    newsfeed_list = staffPosts[10] + profilePosts[10] # load the top few recent posts from P4h and profile posts

class Comment():
  def __init__(post,user_object, post_message, post_media):
    post.user = user_object
    post.message = post_message
    post.media = post_media 
    
  def first_reply():
    return test_replies[0]
  
  def load_all_replies():
    recentReplies = []
    for i in range(len(test_replies)):
      recentReplies.append(test_replies[i])
    return recentReplies   
  
test_replies = [ Comment(User.getUser("acastro"),"looks good!",""), Comment(User.getUser("lcundiff"),"looks great!","")  ]
test_replies2 = [ Comment(User.getUser("lcundiff"),"looks awesome!",""), Comment(User.getUser("acundiff"),"Thanks!","")  ]
# need GET request to Canvas discussion posts
test_user_data = [Post( User.getUser("acundiff"),"I need some feedback on this lesson plan","",test_replies,0 ),Post(User.getUser("lcundiff"),"Here is some helpful tools","placeholder.jpg",test_replies2,1)]



  

    
  