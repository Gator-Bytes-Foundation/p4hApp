from flask import request, render_template, send_from_directory, make_response
from flask_login import login_required
from src import app  # from /app import flask app TODO: import db
''' Import Needed Modules '''
from src.models.user_model import User
from src.controllers.posts_controller import loadAnnouncements, renderAnnouncements
''' Import Needed Libraries '''
import json
from flask.json import jsonify


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
  return render_template('testApi.html', title = "test API"), 200

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
    Loads announcements json containing all canvas announcements (admin discussion posts)
  '''
  return jsonify(loadAnnouncements())


'''
@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)
'''
@app.route('/static/css/<path:path>')
def send_css(path):
    print(path)
    return send_from_directory('static/css', path + '.css')


