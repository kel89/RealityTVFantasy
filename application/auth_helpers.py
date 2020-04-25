# auth_helpers.py

import pandas as pd
from werkzeug.security import generate_password_hash, check_password_hash

from models import *

def check_user_exists(email):
	"""
	Takes in an email address and checks if
	that is already a registered user.
	Returns True if already exists, False otherwise
	"""
	df = pd.read_csv("db.csv")
	e = df.loc[df.email == email]

	if (e.shape[0] == 0):
		return False
	else:
		# Load the user
		return True

def add_user_to_db(email, password, name):
	"""
	Adds the user to the database
	"""
	# Has the password
	hpass = generate_password_hash(password)

	# Get the next available id
	df = pd.read_csv("db.csv")
	id = df.id.max() + 1

	# Add row
	data = {"id":id, "name":name, "email":email, "password":hpass}
	df = df.append(data, True)
	df.to_csv("db.csv")

def password_correct(email, password):
	"""
	Takes in an email and a password, pulls the record
	from the DB and checks if the given password
	matches what we have on record
	*** Assumes that the record def does exist
	"""
	# get the record from the db
	df = pd.read_csv("db.csv")
	e = df.loc[df.email == email]
	stored_pass = e.password.values[0]

	# Check match
	return check_password_hash(stored_pass, password)

def get_user(email):
	"""
	Takes in an email and returns the user Object
	*** Assumes the user def exists
	"""
	# Load the db
	df = pd.read_csv("db.csv")
	e = df.loc[df.email == email]
	id = e.id
	email = e.email
	name = e.name
	password = e.password
	admin = e.admin
	user = User(id, email, name, password, admin)
	return user
