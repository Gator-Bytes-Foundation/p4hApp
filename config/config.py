import os
from requests import sessions
#from app.helpers.load_secrets import secrets

basedir = os.path.abspath(os.path.dirname(__file__))

class Default(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or "server_password"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or "sqlite:///" + os.path.join(basedir, "app.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOAD_FOLDER = os.path.join(basedir,"../frontend/assets/uploads")
    ALLOWED_EXTENSIONS = ["jpg", "png", "mov", "mp4", "mpg"]
    MAX_CONTENT_LENGTH = 1000 * 1024 * 1024  # 1000mb
    TEMPLATES_AUTO_RELOAD = True # Reload templates when they are changed. If not set, it will be enabled in debug mode.
