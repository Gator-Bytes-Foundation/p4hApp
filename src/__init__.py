import os
#sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_file_upload import FileUpload
from config.config import config
from whitenoise import WhiteNoise
import logging

app = Flask(__name__)
app.wsgi_app = WhiteNoise(app.wsgi_app,
        root=os.path.join(os.path.dirname(__file__), 'static'),
        prefix='static/')

# todo: set error handler - app.register_error_handler(404, page_not_found)
app.config.from_object(config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

file_upload = FileUpload(app, db)

from src.routes import *

from src.routes import routes
from src.routes import resources_routes
from src.routes import messaging_routes
from src.routes import login_routes
from src.routes import profile_routes

from src.helpers import context_processors, static_asset_resolve

#uncomment for custom debugging
#logging.basicConfig(level=logging.DEBUG) 
#logger = logging.getLogger("canvasapi")
#handler = logging.StreamHandler(sys.stdout)
#formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

#handler.setLevel(logging.DEBUG)
#handler.setFormatter(formatter)
#logger.addHandler(handler)
#logger.setLevel(logging.DEBUG)
