from src import login_manager, db, file_upload
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
import enum

class PermissionType(enum.Enum):
    teacher = "teacher"
    admin = "admin"

'''parameter: UserMixin,db.Model'''
class User(UserMixin,db.Model):
  __tablename__ = 'User'
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(64), index=True, unique=True)
  canvasId = db.Column(db.Integer, index=True, unique=True)
  email = db.Column(db.String(120), index=True, unique=True)
  name = db.Column(db.String(128))
  password_hash = db.Column(db.String(128))
  permission = db.Column(db.Enum(PermissionType))
  school = db.Column(db.String(128))
  phone = db.Column(db.String(64))
  location = db.Column(db.Text)
  position = db.Column(db.Text)
  bio = db.Column(db.Text)

  userFiles = db.relationship("UserFiles", backref="UserFiles")

  def __init__(self, *args,**kwargs):
    self.__dict__.update(kwargs)

  def serialize(self):
    return {
      'id': self.id,
      'username': self.username,
      'canvasId': self.canvasId,
      'email': self.email,
      'name': self.name,
      'permission': self.permission.value,
      'school': self.school,
      'phone': self.phone,
      'location': self.location,
      'bio': self.bio,
    }
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
    allowed_keys = {'id', 'sis_user_id', 'login_id', 'email','avatar_url','bio','role'}
    self.__dict__.update((k, v) for k, v in kwargs.items() if k in allowed_keys)

  def set_password(self, password):
    self.password_hash = generate_password_hash(password)

  def check_password(self,userPassword, submittedPassword):
    return check_password_hash(userPassword,submittedPassword)


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

@file_upload.Model
class UserFiles(db.Model):
  __tablename__ = "UserFiles"
  id = db.Column(db.Integer, primary_key=True)
  userFile = file_upload.Column() #file_name and file_type and mime_type included
  userId = db.Column(db.Integer, db.ForeignKey("User.id"))
  postId = db.Column(db.Integer)
  data = db.Column(db.LargeBinary)

