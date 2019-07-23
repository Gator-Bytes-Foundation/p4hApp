from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template




@app.route('/')
def hello_name():    
  return render_template('profile.html')

@app.route('/resources')
def resources_page():
  return render_template('resources.html')

if __name__ == "__main__":
  app.run()