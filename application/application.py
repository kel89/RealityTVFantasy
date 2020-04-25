"""
    ___                ___            __  _
   /   |  ____  ____  / (_)________ _/ /_(_)___  ____
  / /| | / __ \/ __ \/ / / ___/ __ `/ __/ / __ \/ __ \
 / ___ |/ /_/ / /_/ / / / /__/ /_/ / /_/ / /_/ / / / /
/_/  |_/ .___/ .___/_/_/\___/\__,_/\__/_/\____/_/ /_/
      /_/   /_/
"""

# package imports
from flask import Flask, render_template, url_for
from flask_login import UserMixin, LoginManager, login_user, current_user, \
						login_required, logout_user

from auth import auth_routes
from models import *

# Initialize application
application = Flask(__name__)
application.secret_key = "shh"

# Config
application.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Flask Add-on configs
login_manager = LoginManager() # initialize
login_manager.login_view = 'auth.login' # set route for login page
login_manager.init_app(application)

# Register Blueprints
application.register_blueprint(auth_routes.auth)

@login_manager.user_loader
def load_user(id):
	"""
	Takes in a user ID and returns the User object associated with it
	if no such user exists, returns None
	"""
	# Load up the DB and look for the id
	df = pd.read_csv("db.csv")
	e = df.loc[df.id == id]
	if (e.shape[0] == 0):
		return None
	else:
		# load the user object
		email = e['email']
		name = e.name
		password = e.password
		admin = e.admin
		id = e.id
		user = User(id, email, name, password)
		return user


# Test Route
@application.route("/")
def index():
	return render_template("index.html")

# @application.route("/login")
# def login():
# 	return render_template("login.html")
#
# @application.route("/signup")
# def signup():
# 	return render_template("signup.html")

# Run
if __name__ == "__main__":
	application.run(debug=True, host='0.0.0.0')
