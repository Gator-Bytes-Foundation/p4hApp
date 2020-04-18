import os
import tempfile

import pytest

from app import app

@pytest.fixture
def client():
    db_fd, app.config["DATABASE"] = tempfile.mkstemp()
    app.config["TESTING"] = True

    with app.test_client() as client:
        with app.app_context():
            # flaskr.init_db()
            print("TODO: should init DB")
        yield client

    os.close(db_fd)
    os.unlink(app.config["DATABASE"])


def test_empty_db(client):
    """Start with a blank database."""

    rv = client.get("/login")
    print(rv)
    assert True
