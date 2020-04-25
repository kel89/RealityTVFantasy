# auth_routes.py

from flask import Blueprint, render_template, request, redirect, flash, url_for
from flask import current_app as app
from flask_login import UserMixin, LoginManager, login_user, current_user, \
						login_required, logout_user
from werkzeug.security import generate_password_hash, check_password_hash

from auth_helpers import *

auth = Blueprint('auth', __name__,
	template_folder='templates',
	static_folder='static')


@auth.route("/login")
def login():
	"""
	Send to login page
	"""
	return render_template("login.html")

@auth.route("/login", methods=["POST"])
def login_post():
	"""
	Handles the post request for the login
	"""
	# Pull out info
	email = request.form.get('email')
	password = request.form.get('password')
	remember = True if request.form.get('remember') else False

	# CHeck to see if email in db
	if (not check_user_exists(email)):
		flash("Cannot find this user, try signup a new account")
		return redirect(url_for("auth.login"))

	if (not password_correct(email, password)):
		flash("Password is incorrect")
		return redirect(url_for("auth.login"))

	# made it this far, so user is good, lets load him
	user = get_user(email)
	login_user(user, remember=remember)

	return redirect(url_for("index"))

@auth.route("/signup")
def signup():
	"""
	Send to signup page
	"""
	return render_template("signup.html")

@auth.route("/signup", methods=["POST"])
def signup_post():
	"""
	Handles the post request for signing up a user
	"""
	# Pull out form info
	email = request.form.get('email')
	password = request.form.get('password')
	confirm = request.form.get('confirm')
	name = request.form.get('name')

	# Check if email is already used
	if (check_user_exists(email)):
		flash("This email address is already registered")
		return redirect(url_for("auth.signup"))

	# Check if passwords match
	if (password != confirm):
		flash("Passwords do not match")
		return redirect(url_for('auth.signup'))

	# Made it this far, lets create the user
	add_user_to_db(email, password, name)

	return redirect(url_for('auth.login'))
