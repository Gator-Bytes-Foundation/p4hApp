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
    post.id = id_number
    
  def load_profile(user):
    recentPosts = []
    recentComments = []
    canvasUser = user
    try:
      course = canvas.get_course(1)
      discussion_topics = course.get_discussion_topics()
      topics = discussion_topics._get_next_page() # this is the list of all topics (with embedded posts) in the course
      print("topic in load profile: ", topics[1].author["display_name"])
    except CanvasException as e:
      print("error", e)
      
    for i in range(len(topics)):
      if(topics[i].title == canvasUser.name): #only shows posts that the user has posted
        if(topics[i].message is not None):
          topics[i].message = topics[i].message.replace('</p>', '')
          topics[i].message = topics[i].message.replace('<p>', '') # get rid of the html
          year = topics[i].posted_at[2:4]
          day = topics[i].posted_at[5:7]
          month = topics[i].posted_at[8:10]
          proper_date = ''.join([month,'/', day, '/', year])
        recentPosts.append(topics[i])
        comments = topics[i].list_topic_entries()._get_next_page()
        
        for j in range(len(comments)):
          if(comments[j].message is not None):
            comments[j].message = comments[j].message.replace('</p>', '')
            comments[j].message = comments[j].message.replace('<p>', '') # get rid of the html
          recentComments.append(comments[j])
    return recentPosts, recentComments, proper_date
  
  def handle_post(page_to_load, request, course, canvasUser): 
    new_post = request.get_json()["text"]
    #print(new_post)
    # make post in canvas
    post = course.create_discussion_topic(
        title = canvasUser.name,
        author = canvasUser,
        message = new_post,
        user_can_see_posts = True,
        published = True
    )
    year = post.posted_at[2:4]
    day = post.posted_at[5:7]
    month = post.posted_at[8:10]
    proper_date = ''.join([month,'/', day, '/', year])    
    print("topic being posted: ", post, " entry: ", "nothin fo now")
    # send back html for post
    post_id = str(post.id)
    post_html = '<article id="' + post_id + '"class="post_box"> <div class="profile_name"> <div class="profile_pic"> <figure class="thumbnail "><img alt="placeholder" class="img-fluid rounded-circle" src="' + post.author['avatar_image_url'] + '"/></figure></div> <div class="col-10"><header class="text-left"><figcaption class="comment-user"><b>'+canvasUser.name+'</b></figcaption><time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i>' + proper_date + '</time></header></div></div> <div class="post"> <div class="">' + new_post + '</div><hr>   <div class="text-center"><p class=""><a href="" name="view_more_button" id="view_more-{{posts[i].id}}" value="view" class="profile_button view_more">View Comments</a></p></div> <div id="comments" style="display:none;"><label class = "comment_label" for="from">Comments</label> <div id="reply_div-' + post_id + '"class="reply_div"> <div class="col-8"> <textarea class= "text_box" name="message" id="textbox_reply-' + post_id + '{{posts[i].id}}" style="" onkeyup="Expand(this);" size="5" placeholder="Comment"></textarea><span class="upload_icon oi oi-cloud-camera" aria-hidden="true"></span></div> <a href=""name="' + post_id + '" id="reply-' + post_id + '" class="reply_button col-4 btn-sm"><i class="fa fa-reply"></i> Reply</a></div></div></article>'  
    return post_html  

  
  def load_newsfeed():  
    recentPosts = []
    recentComments = []
    try:
      course = canvas.get_course(1)
      discussion_topics = course.get_discussion_topics()
      topics = discussion_topics._get_next_page() # this is the list of all topics (with embedded posts) in the course
      #print("topic: ", topics[1].author["display_name"])
    except CanvasException as e:
      print("error", e)
      
    for i in range(len(topics)):
      if(topics[i].title == 'Admin'): #only shows posts from P4H TOD): pull from announcements    
        if(topics[i].message is not None):
          topics[i].message = topics[i].message.replace('</p>', '')
          topics[i].message = topics[i].message.replace('<p>', '') # get rid of the html
          year = topics[i].posted_at[2:4]
          day = topics[i].posted_at[5:7]
          month = topics[i].posted_at[8:10]
          proper_date = ''.join([month,'/', day, '/', year])
          
        recentPosts.append(topics[i])
        comments = topics[i].list_topic_entries()._get_next_page()
        # only loop through comments of posts we are showing
        for j in range(len(comments)):
          if(comments[j].message is not None):
            comments[j].message = comments[j].message.replace('</p>', '')
            comments[j].message = comments[j].message.replace('<p>', '') # get rid of the html
          recentComments.append(comments[j])
    #print(recentPosts)    
    return recentPosts, recentComments, proper_date      
  
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
  
  def handle_comment(page_to_load, request, course,canvasUser):
    new_comment = request.get_json()["text"]
    print("reply:", new_comment)
    topic_id = page_to_load.replace('comment_','')
    # make post in canvas
    topic = course.get_discussion_topic(topic_id)
    comment = topic.post_entry(
        message = new_comment
    )
    # send back html for post
    comment_html = '<div class="post_comment"><figure class="thumbnail col-2"><img alt="placeholder" class="img-fluid rounded-circle" src="'+ comment.user['avatar_image_url']+'"/></figure><div class="word_bubble col-10"><p><b>' + canvasUser.name + ':</b><br>' + new_comment + '</p></div></div>'
    return comment_html 
  
  def load_all_replies():
    recentReplies = []
    for i in range(len(test_replies)):
      recentReplies.append(test_replies[i])
    return recentReplies   


test_replies = [ Comment(canvas.get_user(34),"looks good!",""), Comment(canvas.get_user(34),"looks great!","")  ]
test_replies2 = [ Comment(canvas.get_user(34),"looks awesome!",""), Comment(canvas.get_user(34),"Thanks!","")  ]
# need GET request to Canvas discussion posts
test_user_data = [Post( canvas.get_user(34),"I need some feedback on this lesson plan","",test_replies,0 ),Post(canvas.get_user(34),"Here is some helpful tools","placeholder.jpg",test_replies2,1)]



  

    
  