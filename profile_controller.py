from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template




@app.route('/')
@app.route('/profile')
def hello_name():    
  return render_template('profile.html') #this is the home page currently

@app.route('/<page_to_load>')
def resources_page(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file
  return render_template(page_to_load)


if __name__ == "__main__":
  app.run()