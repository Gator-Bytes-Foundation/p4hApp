from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template

def load_users():
  dict_of_users = {}
  dict_of_users.update({"Logan":["message would be here", " 2nd message would be here", "3rd message would be here"]})
  dict_of_users.update({"Ariel": ["Yo what's up homie", "nothin much, u?", "straight chillen"]})
  dict_of_users.update({"Austin": ["what do prisoners use to talk to one another?", "wut?", "cell phones"]})
  return dict_of_users



@app.route('/<page_to_load>')
def resources_page(page_to_load):
  #so href will add something to the url, and this will be saved to 'page_to_load' which we can then use to render the name of the html file
  
  dict_of_users = load_users()
  list_of_messages = []
  
  if(dict_of_users.get(page_to_load)): #if the url contains a user name
    list_of_messages = dict_of_users.get(page_to_load) # load their messages
    return render_template('message.html', users = dict_of_users, user_messages = list_of_messages)
  
  return render_template(page_to_load, users = dict_of_users)


@app.route('/')
@app.route('/profile')
def home():    
  return render_template('profile.html') #this is the home page currently

if __name__ == "__main__":
  app.run()