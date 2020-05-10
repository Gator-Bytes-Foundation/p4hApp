import os
from canvasapi import Canvas
from canvasapi.exceptions import CanvasException

# from canvasapi.user import User
from pprint import pprint
from rocketchat_API.rocketchat import RocketChat
from requests import sessions
from app.helpers.load_secrets import secrets

# Canvas API URL
global API_URL

API_URL = "https://admin.p4hteach.org"
ROCKET_URL = "https://open.rocket.chat"

# Canvas API key
API_KEY = secrets.get("canvas_api_key")

proxy_dict = {"http": "https://p4hteach.rocket.chat"}
# Initialize a new Canvas object
CANVAS = Canvas(API_URL, API_KEY)
# Both course and canvas objects are used for majority of API calls
course = CANVAS.get_course(
    1
)  # only 1 course being used on canvas so initialize it globally to avoid repeated API calls

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or "server_password"
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL"
    ) or "sqlite:///" + os.path.join(basedir, "app.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False


with sessions.Session() as session:
    rocket = RocketChat(
        secrets.get("rocket_chat_email"),
        secrets.get("rocket_chat_password"),
        server_url=ROCKET_URL,
        session=session,
    )


def authenticate(scopes, call):
    canvas_url = API_URL + "login/oauth2/auth?"
    serviceKey = {
        "client_id": "1",
        "response_type": "code",
        "redirect_uri": "http://localhost:8000/oauth_complete",
        "grant_type": "authorization_code",
        "code": secrets.get("canvas_auth_code"),
        "client_secret": secrets.get("canvas_client_secret"),
    }
    canvas_url_with_required = (
        canvas_url
        + "client_id="
        + serviceKey["client_id"]
        + "&response_type="
        + serviceKey["response_type"]
        + "&redirect_uri="
        + serviceKey["redirect_uri"]
    )
    print(canvas_url_with_required)
    token_url = API_URL + "login/oauth2/token"
    try:
        resp = requests.post(token_url, serviceKey).json()
    except CanvasException as e:
        print(e)
    print("resp ", resp)
    return credentials
