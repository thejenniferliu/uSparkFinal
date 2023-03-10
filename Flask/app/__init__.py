from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# TODO Remove in production.
# This import is meant for testing  
from app import routes

from app import models

from app.api import api
app.register_blueprint(api)
