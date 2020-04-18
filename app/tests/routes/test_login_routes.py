from urllib.parse import urlparse
from app.tests import client

def test_root_for_user_that_is_not_logged_in(client):
    """Should return the login form for a user that is not logged in"""

    ## KICKOFF

    response = client.get("/", follow_redirects=False)

    ## ASSERTIONS

    assert response.status_code == 302

    path_redirected_to = urlparse(response.location).path
    assert path_redirected_to == "/login"
