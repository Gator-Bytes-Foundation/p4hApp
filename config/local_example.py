#copy and paste this as local.py (change to production only in production)
from config.config import Default
ENV="Development"
class Config(Default):
    DEBUG=True
    CANVAS_URL="http://localhost:3000"
    ROCKET_URL="http://localhost:4000"