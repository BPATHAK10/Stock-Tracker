from flask import Flask, render_template, request, redirect
from flask_mail import Mail
from flask_cors import CORS
import requests
import json
import time
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ.get('username')
app.config['MAIL_PASSWORD'] = os.environ.get('password')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = 'Biraj Bikram Pathak'


mail = Mail(app)


from routes import *

if __name__ == '__main__':
    app.run(debug=True)
