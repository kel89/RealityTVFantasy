# auth_routes.py

from flask import Blueprint, render_template
from flask import current_app as app

auth = Blueprint('auth', __name__,
	template_folder='templates',
	static_folder='static')


@auth.route("/login")
def login():
	return render_template("login.html")

@auth.route("/signup")
def signup():
	return render_template("signup.html")
