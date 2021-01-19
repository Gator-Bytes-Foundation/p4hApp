from src import login_manager, db, file_upload
from datetime import datetime
from flask import request
from flask import render_template
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from src.canvas import CANVAS, course # inject canvas, course objects into file



'''parameter: UserMixin,db.Model'''
class User(UserMixin,db.Model): 
  ''' when db is finished setting up '''
  __tablename__ = 'User'
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(64), index=True, unique=True)
  canvasId = db.Column(db.Integer, index=True, unique=True)
  email = db.Column(db.String(120), index=True, unique=True)
  password_hash = db.Column(db.String(128))
  userFiles = db.relationship("UserFiles", backref="UserFiles")
  #profile = db.relationship('Profile', backref='author', lazy='dynamic')
  
  def __init__(self, *args,**kwargs):
    #allowed_keys = {'id', 'sis_user_id', 'login_id', 'email','avatar_url','bio','role'}
    self.__dict__.update(kwargs)
    #self.__dict__.update((k, v) for k, v in kwargs.items() if k in allowed_keys)

  def is_authenticated(self):
    return True

  def is_anonymous(self):
      return False

  def is_admin(self):
      return self.admin

  def get_id(self):
      return self.id

  def __repr__(self):
    return '<User {}>'.format(self.username)   
  def update(self, *args, **kwargs): 
    #print(args)
    allowed_keys = {'id', 'sis_user_id', 'login_id', 'email','avatar_url','bio','role'}
    self.__dict__.update((k, v) for k, v in kwargs.items() if k in allowed_keys)    
  
  def set_password(self, password):
    self.password_hash = generate_password_hash(password)

  def check_password(self, password):
    return True #check_password_hash(self.password_hash,password) # temp disabled password for dev


@login_manager.user_loader
def load_user(userId):
  try:
    return User.query.get(userId)
  except:
    return None
'''
@login_manager.unauthorized_handler
def unauthorized_handler():
    if request.is_xhr:
        return jsonify(success=False,
                       data={'login_required': True},
                       message='Authorize please to access this page.'), 401
    else:
        return render_template('login.html'), 401
    #
  '''
  #return CANVAS.get_user(1) # for now lets just automatically load admin (id of 1)
  
@file_upload.Model
class UserFiles(db.Model):
  __tablename__ = "UserFiles"
  id = db.Column(db.Integer, primary_key=True)
  userFile = file_upload.Column() #file_name and file_type and mime_type included
  userId = db.Column(db.Integer, db.ForeignKey("User.id"))
  postId = db.Column(db.Integer)
  data = db.Column(db.LargeBinary)

