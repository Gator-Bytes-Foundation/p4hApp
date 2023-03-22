from flask import render_template
from flask_login import login_user, logout_user, current_user, login_required
from src import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from src.controllers.messaging_controller import load_messages
''' Import Needed Libraries ''' 
from pyper import *
from flask import current_app
# MESSAGING REQUESTS #
@app.route('/messaging')
def messaging():
  return render_template('messaging.html',  current_user=current_user, rocketHost=current_app.config["ROCKET_URL"])
