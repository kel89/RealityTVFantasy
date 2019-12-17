# User.py
# User class for flask login
from flask_login import UserMixin

class User(UserMixin):

	def is_authenticated(self):
		"""
		Should return True if the user has provided
		valid credientials
		"""
		return True

	def is_active(self):
		"""
		Should return True if the user is active
		"""
		return True

	def is_anonymous(self):
		"""
		Should return True if this is an anonymous user, actual
		users should return False instead
		"""
		return False

	def get_id(self):
		"""
		returns a unique id for the user
		--I think we want this to be the ID from the db
		"""