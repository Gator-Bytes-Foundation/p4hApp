from flask import request, render_template, send_from_directory
from flask_login import login_required
from src import app  # from /app import flask app TODO: import db
''' Import Needed Modules '''
from src.models.user_model import User
from src.controllers.posts_controller import *
''' Import Needed Libraries '''
import json
from flask.json import jsonify
from src.controllers.posts_controller import getProfilePic

@app.errorhandler(404)
def page_not_found(e):
    '''
      Returns jinja template for 404 errors
    '''
    # note that we set the 404 status explicitly
    return render_template('error.html',error = e), 404

@app.errorhandler(500)
def internal_error(e):
    '''
      Returns jinja template for 500 errors
    '''
    # note that we set the 404 status explicitly
    return render_template('error.html',error = e), 500

@app.errorhandler(400)
def bad_request(e):
    '''
      Returns jinja template for 400 errors
    '''
    # note that we set the 404 status explicitly
    return render_template('error.html',error = e), 400

@app.route('/api/test', methods=['GET', 'POST'])
def apiTest():
  '''
    Temporary route to test API without postman
  '''
  # using error template for api testing for now
  return render_template('testAPi.html', title = "test API"), 200

# Create post (both API and web)
@app.route('/api/post/<user_id>', methods=['GET', 'POST'])
@app.route('/post/<user_id>', methods=['GET', 'POST'])
def posts(user_id): #url being routed is saved to 'user_id' which we can then use to render the name of the html file
  '''
    Creates a user discussion post in canvas (displayed on user's profile)
  '''
  if(request.method == 'POST'):
    post, profilePic = handlePost(user_id,request)
    return jsonify({
      'new_post_id': post.id,
      'profilePic': profilePic
    }), 200, {'ContentType':'application/json'}
  else:
    userProfile = loadPosts(current_user)
    return jsonify(userProfile.posts)

# API and web app
@app.route('/api/post/<post_id>', methods=['DELETE'])
@app.route('/post/<post_id>', methods=['DELETE'])
@login_required
def deletePostRoute(post_id):
  '''
    Deletes a user's discussion post
  '''
  res = deletePost(request,post_id)
  return json.dumps({
    'res': res
  }), 200, {'ContentType':'application/json'}

# Create comment
@app.route('/comment/<post_id>', methods=['POST'])
def comments(post_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  '''
    Comments on a user's post in canvas (displayed on user's profile)
  '''
  print("post id for commenting: ",post_id)
  return postComment(request,post_id)

# Delete comment
@app.route('/post/<post_id>/comment/<comment_id>', methods=['DELETE'])
def comment(post_id,comment_id): #url being routed is saved to 'page_to_load' which we can then use to render the name of the html file
  '''
    Deletes a user's comment on a user's discussion post in canvas (displayed on user's profile)
  '''
  print("post id for commenting: ",post_id)
  return deleteComment(request,post_id,comment_id)

# Get announcements
@app.route('/announcements', methods=['GET', 'POST'])
@login_required
def announcements():
  '''
    Loads announcement jinja template containing all canvas announcements (admin discussion posts)
  '''
  return renderAnnouncements()

# Get announcements API
@app.route('/api/announcements', methods=['GET'])
@login_required
def announcementsAPI():
  '''
    loads announcements json containing all canvas announcements (admin discussion posts)
  '''
  return jsonify(loadAnnouncements())

@app.route('/api/comment/<post_id>', methods=['POST'])
@login_required
def commentAPI(post_id):
  '''
    API to create a comment
    Returns JSON instead of jinja template
  '''
  comment = postComment(request,post_id)
  return jsonify(comment)

'''
@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)
'''
@app.route('/static/css/<path:path>')
def send_css(path):
    print(path)
    return send_from_directory('static/css', path + '.css')

