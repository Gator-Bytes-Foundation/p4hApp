from datetime import datetime
from app import login_manager
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from app.canvas import * # inject canvas, course objects into file



'''parameter: UserMixin,db.Model'''
class User(UserMixin): 
  ''' when db is finished setting up 
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(64), index=True, unique=True)
  email = db.Column(db.String(120), index=True, unique=True)
  password_hash = db.Column(db.String(128))
  profile = db.relationship('Profile', backref='author', lazy='dynamic')
  
  def __init__(self, *args,**kwargs):
    #allowed_keys = {'id', 'sis_user_id', 'login_id', 'email','avatar_url','bio','role'}
    self.__dict__.update(kwargs)
    #self.__dict__.update((k, v) for k, v in kwargs.items() if k in allowed_keys)
  
  def __repr__(self):
    return '<User {}>'.format(self.username)   
  def update(self, *args, **kwargs): 
    #print(args)
    allowed_keys = {'id', 'sis_user_id', 'login_id', 'email','avatar_url','bio','role'}
    self.__dict__.update((k, v) for k, v in kwargs.items() if k in allowed_keys)    
  '''
  def set_password(self, password):
    self.password_hash = generate_password_hash(password)

  def check_password(self, password):
    return True #check_password_hash(self.password_hash,password) # temp disabled password for dev


@login_manager.user_loader
def load_user(id):
    return CANVAS.get_user(1) # for now lets just automatically load admin (id of 1)
  