from flask import Flask, url_for
app = Flask(__name__)
from flask import render_template
from canvasapi import Canvas
from canvasapi.exceptions import CanvasException
from canvasapi.user import User

# Canvas API URL
API_URL = "http://192.168.1.24:3000/"
# Canvas API key
API_KEY = "canvas-docker"
global canvas
# Initialize a new Canvas object
canvas = Canvas(API_URL, API_KEY)

  

    
  