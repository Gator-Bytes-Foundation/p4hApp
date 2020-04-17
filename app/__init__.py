from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from app.canvas import Config
app = Flask(__name__)

app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
app.debug = True

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'



#import app.routes #, user_model, profile_model
#from app.routes import *
from app.routes import routes
from app.routes import resources_routes
from app.routes import messaging_routes
from app.routes import login_routes
from app.routes import profile_routes

if __name__ == '__main__':
  app.run(debug=True)

''' for when db is finished setting up
from app import User, Profile

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Profile': Profile}

if __name__ == "__main__":
  #logging.basicConfig(level=logging.DEBUG)
  app.run(debug=True)
  '''
