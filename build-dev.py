import os
import subprocess
import time

CURRENT_DIRECTORY = os.getcwd()
directories = os.listdir(CURRENT_DIRECTORY)
NON_ANGULAR_DIRS = [ '__pycache__','bin', 'lib','migrations','node_modules','p4hApp.egg-info','tmp','e2e']

#for directory in directories:
    #if "." not in directory and directory not in NON_ANGULAR_DIRS:
ANGULAR_PROJECT_PATH = os.path.join(CURRENT_DIRECTORY, 'src')
DIST_PATH = os.path.join(CURRENT_DIRECTORY, 'dist','p4hApp')

FLASK_STATIC_PATH = os.path.join(CURRENT_DIRECTORY, 'src/static')
FLASK_TEMPLATES_PATH = os.path.join(CURRENT_DIRECTORY, 'src/templates')

subprocess.call(('cd ' + ANGULAR_PROJECT_PATH + ' && ng build --watch --base-href /static/ &'), shell=True)

dir_exists = True
'''
while dir_exists:
    try:
        files = os.listdir(DIST_PATH)
        static_files = ""
        html_files = ""
        for file in files:
            if '.js' in file or '.js.map' in file or '.ico' in file or '.css' in file or '.scss' in file:
                static_files += (file + ' ')
            if '.html' in file:
                html_files += (file + ' ')
        if len(static_files) > 0:
            subprocess.call(('cd ' + DIST_PATH + ' &&' + ' mv ' + static_files + FLASK_STATIC_PATH), shell=True)
        if len(html_files) > 0:
            subprocess.call(('cd ' + DIST_PATH + ' &&' + ' mv ' + html_files + FLASK_TEMPLATES_PATH), shell=True)
    except Exception as e:
        dir_exists = False
        print(e)
    time.sleep(10.0)
'''