from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from users import *



class Post():
  def __init__(post,user_object, post_message, post_media):
    post.user = user_object
    post.message = post_message
    post.media = post_media 
    
  def getRecentPosts():  
    recentPosts = []
    for i in range(len(test_user_data)):
      recentPosts.append(test_user_data[i])
    return recentPosts

# need GET request to Canvas discussion posts
test_user_data = [Post(User.getUser("acundiff"),"I need some feedback on this lesson plan","placeholder.jpg"),Post(User.getUser("lcundiff"),"Here is some helpful tools","placeholder.jpg")]


  