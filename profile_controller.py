from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template



@app.route('/')
@app.route('/home')
def index():
    #url_for('static', filename='css/bootstrap.css')
    #url_for('static', filename='css/bootstrap.min.css')
    #url_for('static', filename='js/bootstrap.min.js')
    #url_for('static', filename='js/jquery.min.js')
    #url_for('static', filename='js/bootstrap.bundle.js')
    return render_template('home.html', home_active="class=active")

#@app.route('/profile')
def map():
    return render_template('profile.html', profile_active="class=active")

if __name__ == "__main__":
  app.run()