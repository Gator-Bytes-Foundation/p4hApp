import os
from requests import sessions

basedir = os.path.abspath(os.path.dirname(__file__))

class Default(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or "server_password"
    SQLALCHEMY_DATABASE_URI = "postgresql://root:root@localhost:5432/test_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOAD_FOLDER = os.path.join(basedir,"../frontend/assets/uploads")
    ALLOWED_EXTENSIONS = ["jpg", "png", "mov", "mp4", "mpg"]
    MAX_CONTENT_LENGTH = 1000 * 1024 * 1024  # 1000mb
    TEMPLATES_AUTO_RELOAD = True # Reload templates when they are changed. If not set, it will be enabled in debug mode.

class ProductionConfig(Default):
    CANVAS_URL="https://admin.p4hteach.org"
    ROCKET_URL="https://messaging.p4hteach.org"
    SQLALCHEMY_DATABASE_URI= os.environ.get("DATABASE_URL")

class StagingConfig(Default):
    DEBUG = True
    CANVAS_URL="https://admin.p4hteach.org"
    ROCKET_URL="https://messaging.p4hteach.org"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")

class DevelopmentConfig(Default):
    DEBUG = True
    DEVELOPMENT = True
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or "sqlite:///" + os.path.join(basedir, "app.db")
    CANVAS_URL="http://localhost:3000"
    ROCKET_URL="http://localhost:4000"

env_config = os.getenv("APP_SETTINGS", "DevelopmentConfig")

configMap = {
    "DevelopmentConfig": DevelopmentConfig,
    "StagingConfig": StagingConfig,
    "ProductionConfig": ProductionConfig
}
config = configMap[env_config]
