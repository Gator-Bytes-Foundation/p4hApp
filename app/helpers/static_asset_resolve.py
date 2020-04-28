from app import app, environment
from urllib.parse import urljoin

from flask import redirect


@app.endpoint("static")
def static(filename):
    if environment == "development":
        assert_path = urljoin("http://localhost:9000", filename)
        return redirect(assert_path)
    else:
        return app.send_static_file(filename)
