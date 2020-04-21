from app import app

##
# This will make some utility functions available so that they can be called in the HTML templates

@app.context_processor
def utility_processor():
    def static_path(resource):
        # if is_dev:
        if True:
            return "http://localhost:9000/" + resource
        else:
            return

    return dict(static_path=static_path)
