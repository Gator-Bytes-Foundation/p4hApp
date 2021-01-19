from datetime import datetime
#from app import db


'''parameter: db.Model'''
class Profile():
  pass # temp to allow for multiple fields be attached to Profile()
  ''' when db is finished setting up 
  id = db.Column(db.Integer, primary_key=True)
  time = db.Column(db.DateTime, index=True, default=datetime.utcnow)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
  
  def __repr__(self):
    return '<Profile {}>'.format(self.body)
  '''


  