from flask import render_template, send_file
from flask_login import login_required
from src import app  # from /app import flask app TODO: import db
''' Import Needed Modules ''' 
from src.models.user_model import User
from src.controllers.resources_controller import renderResourceFolders, filesPage, fileDownload, getResourceFolders
from flask.json import jsonify

#
# If a request from client has variable data in it, we handle it here and get the data out of the url before routing the user
#
@login_required
@app.route('/resources/<folderPage>', methods=['GET'])
def resourceFolder(folderPage): #url being routed is saved to 'fileId' which we can then use to render the name of the html file
  files, folderId = filesPage(folderPage)
  return render_template('files.html', files=files, folder_id=folderId)    

@app.route('/api/resources/download/<fileId>', methods=['GET'])
@app.route('/resources/download/<fileId>', methods=['GET'])
def downloadResource(fileId): #url being routed is saved to 'fileId' which we can then use to render the name of the html file
  file = fileDownload(fileId)
  return send_file('tmp/downloadfile', as_attachment=True,attachment_filename=file.filename)

# RESOURCES REQUESTS #
@login_required
@app.route('/resources', methods=['GET'])
def resources():
  return renderResourceFolders()

# API Routes #
@app.route('/api/resources/<folderId>', methods=['GET'])
def resourceFolderAPI(folderId):
  files, folderId = filesPage(folderId)
  return jsonify(files)

@app.route('/api/resources', methods=['GET'])
def resourcesAPI():
  resources = getResourceFolders()
  resourceResponse = []
  for resource in resources["folders"]:
    resourceFolder = {
      "id": resource.id,
      "name": resource.name,
      "updated_at": resource.updated_at
    }
    resourceResponse.append(resourceFolder)

  return jsonify(resourceResponse)

