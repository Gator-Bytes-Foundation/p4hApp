#from wsgi.py import application as app
# This is to meet GLoud standard of having "main.py" file
from app import app

app.run(debug=True)
