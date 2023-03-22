import yaml
import os
from os import path

##
# This module simply reads and parses the secrets.yml file so that the rest of the app
# can import the secret keys/tokens it contains.

def load_secrets():
    secrets_path = "secrets.yml"
    canvas_api_key = os.getenv("canvas_api_key")
    rocket_user_id = os.getenv("rocket_user_id")
    rocket_auth_token = os.getenv("rocket_auth_token")
    if(canvas_api_key and rocket_user_id and rocket_auth_token): 
        return {
            "canvas_api_key": canvas_api_key,
            "rocket_user_id": rocket_user_id,
            "rocket_auth_token": rocket_auth_token
        }
    elif path.exists(secrets_path):
        stream = open(secrets_path)
        return yaml.safe_load(stream)
    else:
        raise FileExistsError("""

        There is no secrets file present.

        If you have access to the secrets, make sure they are on your system and run `bin/dev/setup-secrets`
        """)

secrets = load_secrets()
