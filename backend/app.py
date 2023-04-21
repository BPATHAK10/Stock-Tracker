from flask import Flask, render_template, request, redirect
from flask_cors import CORS
import requests
import json
import time

app = Flask(__name__)
CORS(app)

from routes import *

if __name__ == '__main__':
    app.run(debug=True)
