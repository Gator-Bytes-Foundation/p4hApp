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
    SQLALCHEMY_DATABASE_URI="postgres://pfcwbhgyuppdwi:65e697655f5decae0aa8bde291aa5d50446bda0c2a1e8e29fae341e739ee5bb3@ec2-3-232-218-211.compute-1.amazonaws.com:5432/d99llu40rrukif"

class StagingConfig(Default):
    DEBUG = True
    CANVAS_URL="https://admin.p4hteach.org"
    ROCKET_URL="https://messaging.p4hteach.org"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or "postgresql://ncyvtejtpjjajt:a8c930633cc4b7505c1f0dccb83c1f80e8cf1d54b8d72b54422aec7bf40ed57d@ec2-3-92-151-217.compute-1.amazonaws.com:5432/d6bf5h100s1387"

class DevelopmentConfig(Default):
    DEBUG = True
    DEVELOPMENT = True
    SQLALCHEMY_DATABASE_URI = "postgresql://root:root@localhost:5432/test_db"
    #SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or "sqlite:///" + os.path.join(basedir, "app.db")
    CANVAS_URL="http://localhost:3000"
    ROCKET_URL="http://localhost:4000"

env_config = os.getenv("APP_SETTINGS", "DevelopmentConfig")

configMap = {
    "DevelopmentConfig": DevelopmentConfig,
    "StagingConfig": StagingConfig,
    "ProductionConfig": ProductionConfig
}
config = configMap[env_config]
