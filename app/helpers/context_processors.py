from app import app, environment

##
# This will make some utility functions available so that they can be called in the HTML templates

@app.context_processor
def utility_processor():

    def static_path(resource):
        # if is_dev:
        if environment == "development":
            return "http://localhost:9000/" + resource
        else:
            return "/static/js/" + resource

    def resolve_entry_script(template):
        template_name = template._TemplateReference__context.name
        basename = template_name.split(".")[0]
        return static_path(basename + ".js")

    return dict(static_path=static_path, resolve_entry_script=resolve_entry_script)
