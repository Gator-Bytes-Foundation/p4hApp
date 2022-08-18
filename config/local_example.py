#copy and paste this as local.py (change to production only in production)
from config.config import Default
ENV="Development"
class Config(Default):
    DEBUG=True
    CANVAS_URL="https://admin.p4hteach.org"
    ROCKET_URL="https://messaging.p4hteach.org"