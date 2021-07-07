from src import app, environment

##
# This will make some utility functions available so that they can be called in the HTML templates


@app.context_processor
def utility_processor():
    ##
    # This will take a template name and will return the path to its entry JS file.
    #
    # Example: "profile.html" -> "js/profile.js"
    def resolve_entry_script(template):
        template_name = template._TemplateReference__context.name
        basename = template_name.split(".")[0]
        return "js/" + basename + ".js"

    def resolve_css(template):
        template_name = template._TemplateReference__context.name
        basename = template_name.split(".")[0]
        return "css/" + basename + ".css"

    return dict(resolve_entry_script=resolve_entry_script,resolve_css = resolve_css)
