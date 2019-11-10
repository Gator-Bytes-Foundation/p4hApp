from canvas import *



def loginUser(request):
    global user_id # set the current user to be global to limit API calls
    global all_users
    global current_user
    result = request.form # get form data from request object sent from html form
    print("form login data: ",result) # log the data
    global course # so we dont need to declare it in other 
    course = canvas.get_course(1)

    current_user = None
    all_users = course.get_users()._get_next_page() # 
    
    for i in range(len(all_users)):
      if(result is not None):
        print(all_users[i].login_id, " and ", result["username"])
        if(all_users[i].login_id == result["username"]):
          # found user with login id
          if(all_users[i].sis_user_id == result["password"]):
            # user password matches

            current_user = all_users[i]
            user_id = all_users[i].id
            return True # we login the user
          else:
            #incorrect password 
            error = "Incorrect Password"
            return False #return login page
        else:
          # no username exists
          error = "There is no user with that username"
      # if loop ends, render with error message
    return False #return login page
    
def signupUser(request):
  return
  
def loadHome():    
  try:
    return render_template('login.html', current_user = current_user, users = all_users) #this is the home page currently
  except:
    return render_template('login.html', current_user = None,users = None) #    
