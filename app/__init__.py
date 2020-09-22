import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
#from flask_file_upload import FileUpload
from app.canvas import Config
import logging
import sys
app = Flask(__name__)

app.config.from_object(Config)
# Other FLASK config varaibles ...
#app.config["ALLOWED_EXTENSIONS"] = ["jpg", "png", "mov", "mp4", "mpg"]
#app.config["MAX_CONTENT_LENGTH"] = 1000 * 1024 * 1024  # 1000mb

db = SQLAlchemy(app)
migrate = Migrate(app, db)
app.debug = True


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

#file_upload = FileUpload(app, db)


environment = os.getenv('ENVIRONMENT', default='development')

#import app.routes #, user_model, profile_model
#from app.routes import *
print(app)
from app.routes import routes
from app.routes import resources_routes
from app.routes import messaging_routes
from app.routes import login_routes
from app.routes import profile_routes

from app.helpers import context_processors, static_asset_resolve

#logger = logging.getLogger("canvasapi")
#handler = logging.StreamHandler(sys.stdout)
#formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

#handler.setLevel(logging.DEBUG)
#handler.setFormatter(formatter)
#logger.addHandler(handler)
#logger.setLevel(logging.DEBUG)

''' for when db is finished setting up
from app import User, Profile

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Profile': Profile}
  
if __name__ == "__main__":
  #logging.basicConfig(level=logging.DEBUG)
  app.run(debug=True)
  '''
