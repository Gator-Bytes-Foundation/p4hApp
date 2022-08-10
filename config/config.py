import os
from requests import sessions
#from app.helpers.load_secrets import secrets

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or "server_password"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or "sqlite:///" + os.path.join(basedir, "app.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOAD_FOLDER = os.path.join(basedir,"../frontend/assets/uploads")
    ALLOWED_EXTENSIONS = ["jpg", "png", "mov", "mp4", "mpg"]
    MAX_CONTENT_LENGTH = 1000 * 1024 * 1024  # 1000mb
    TEMPLATES_AUTO_RELOAD = True # Reload templates when they are changed. If not set, it will be enabled in debug mode.

class Production(Config):
    DEBUG=False
    DATABASE_URI = 'mysql://user@localhost/foo'
    CANVAS_URL="https://admin.p4hteach.org"
    ROCKET_URL="https://messaging.p4hteach.org"

class Development(Config):
    DEBUG=True
    CANVAS_URL="https://admin.p4hteach.org"
    ROCKET_URL="https://messaging.p4hteach.org"
    DATABASE_URI = "sqlite:////tmp/foo.db"