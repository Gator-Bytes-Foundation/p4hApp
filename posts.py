from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from canvas import *
class Post():
  def __init__(post,user_object, post_message, post_media,replies,id_number):
    post.user = user_object
    post.message = post_message
    post.media = post_media 
    post.replies = replies
    post.id_number = id_number
    
  def load_profile():
    recentPosts = []
    recentComments = []
    try:
      course = canvas.get_course(1)
      discussion_topics = course.get_discussion_topics()
      topics = discussion_topics._get_next_page() # this is the list of all topics (with embedded posts) in the course
      print("topic: ", topics[1].author["display_name"])
    except CanvasException as e:
      print("error", e)
      
    for i in range(len(topics)):
      if(topics[i].user_name == "Admin"):
        topics[i].message = topics[i].message.replace('</p>', '')
        topics[i].message = topics[i].message.replace('<p>', '') # get rid of the html
        recentPosts.append(topics[i])
        comments = topics[i].list_topic_entries()._get_next_page()
        
        for j in range(len(comments)):
          comments[j].message = comments[j].message.replace('</p>', '')
          comments[j].message = comments[j].message.replace('<p>', '') # get rid of the html
          recentComments.append(comments[j])
    return recentPosts, recentComments      

  
  def load_newsfeed():  
    recentPosts = []
    try:
      course = canvas.get_course(1) # P4h is course 1
      #print(course.name)
      discussion_topics = course.get_discussion_topics()
      topics = discussion_topics._get_next_page() # this is the list of all topics (with embedded posts) in the course
      #print("topic: ", topics[1])
    except CanvasException as e:
      print("error", e) 
      
    for i in range(len(topics)):
      recentPosts.append(topics[i])
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


test_replies = [ Comment(canvas.get_user(34),"looks good!",""), Comment(canvas.get_user(34),"looks great!","")  ]
test_replies2 = [ Comment(canvas.get_user(34),"looks awesome!",""), Comment(canvas.get_user(34),"Thanks!","")  ]
# need GET request to Canvas discussion posts
test_user_data = [Post( canvas.get_user(34),"I need some feedback on this lesson plan","",test_replies,0 ),Post(canvas.get_user(34),"Here is some helpful tools","placeholder.jpg",test_replies2,1)]



  

    
  