import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from app.canvas import Config

from OpenSSL import SSL
context = SSL.Context(SSL.PROTOCOL_TLSv1_2)
context.use_privatekey_file('server.key')
context.use_certificate_file('server.crt')


app = Flask(__name__)

app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
app.debug = True

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

environment = os.getenv('ENVIRONMENT', default='development')

#import app.routes #, user_model, profile_model
#from app.routes import *
from app.routes import routes
from app.routes import resources_routes
from app.routes import messaging_routes
from app.routes import login_routes
from app.routes import profile_routes

from app.helpers import context_processors, static_asset_resolve

''' for when db is finished setting up
from app import User, Profile

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Profile': Profile}
  
if __name__ == "__main__":
  #logging.basicConfig(level=logging.DEBUG)
  app.run(host='127.0.0.1', debug=True, ssl_context=context)
  '''
