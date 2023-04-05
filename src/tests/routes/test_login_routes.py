from urllib.parse import urlparse
import pytest


class TestLoginRoutes:
    def test_root_for_user_that_is_not_logged_in(self, client):
        """Should return the login form page for a user that is not logged in"""

        ## KICKOFF
        response = client.get("/", follow_redirects=False)

        ## ASSERTIONS
        assert response.status_code == 302

        path_redirected_to = urlparse(response.location).path
        assert path_redirected_to == "/login"
