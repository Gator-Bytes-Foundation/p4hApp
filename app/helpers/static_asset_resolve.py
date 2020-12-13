from urllib.parse import urljoin
from flask import redirect
from app import app, environment

##
# In development, this will properly redirect any calls to `/static/*` (i.e. for a static asset) to the webpack dev server
#
# In production, the asset is served as it normally would.
@app.endpoint("static")
def static(filename):
    #if(filename.contains('.css')) 

    print("STATIC " + filename)
    #if environment == "development":
    #    assert_path = urljoin("http://localhost:9000", filename)
    #    return redirect(assert_path)
    #else:
    return app.send_static_file(filename)
