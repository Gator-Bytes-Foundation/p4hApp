from datetime import datetime
#from app import db


class Profile():
  def serialize(self):
    return {
      'user': self.user.serialize(),
    }
  pass # temp to allow for multiple fields be attached to Profile()



  