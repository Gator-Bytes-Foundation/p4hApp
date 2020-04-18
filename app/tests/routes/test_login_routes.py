import os
import tempfile

from urllib.parse import urlparse
import pytest

from app import app

@pytest.fixture
def client():
    db_fd, app.config["DATABASE"] = tempfile.mkstemp()
    app.config["TESTING"] = True

    with app.test_client() as client:
        yield client

    os.close(db_fd)
    os.unlink(app.config["DATABASE"])


def test_root_for_user_that_is_not_logged_in(client):
    """Should return the login form for a user that is not logged in"""

    ## KICKOFF

    response = client.get("/", follow_redirects=False)

    ## ASSERTIONS

    # should result in a redirect
    assert response.status_code == 302
    path_redirected_to = urlparse(response.location).path
    assert path_redirected_to == "/login"
