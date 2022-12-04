import os
from canvasapi import Canvas
from canvasapi.exceptions import CanvasException
from rocketchat_API.rocketchat import RocketChat
from requests import sessions
from config.local import Config
from src.helpers.load_secrets import secrets

# canvas config
API_URL = Config.CANVAS_URL
ROCKET_URL = Config.ROCKET_URL
API_KEY = secrets.get("canvas_api_key")

CANVAS = None
# Both course and canvas objects are used for majority of API calls
try:
    # Initialize a new Canvas object
    CANVAS = Canvas(API_URL, API_KEY)
    account = CANVAS.get_account(1)
    course = CANVAS.get_course(1)  # only 1 course being used on canvas so initialize it globally to avoid repeated API calls
except:
    print("canvas is down")
    course = None
    account = None

basedir = os.path.abspath(os.path.dirname(__file__))

ROCKET = None
try: 
    with sessions.Session() as session:
        ROCKET = RocketChat(
            secrets.get("rocket_email"),
            secrets.get("rocket_password"),
            server_url=ROCKET_URL,
            session=session,
        )
except: 
    print('rocket chat server down')

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
    #print(canvas_url_with_required)
    token_url = API_URL + "login/oauth2/token"
    try:
        resp = requests.post(token_url, serviceKey).json()
    except CanvasException as e:
        print(e)
    print("resp ", resp)
    return credentials
