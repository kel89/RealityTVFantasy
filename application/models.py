"""
    __  ___          __     __
   /  |/  /___  ____/ /__  / /____
  / /|_/ / __ \/ __  / _ \/ / ___/
 / /  / / /_/ / /_/ /  __/ (__  )
/_/  /_/\____/\__,_/\___/_/____/
"""

from flask_login import UserMixin
import pandas as pd
from werkzeug.security import generate_password_hash, check_password_hash


class User(UserMixin):
	"""
	User class for Flask-Login
	must have id attribute
	"""

	def __init__(self, id, email, name, password, admin):
		"""
		Initializes and empty user
		"""
		self.id = id
		self.email = email
		self.name = name
		self.password = password
		self.admin = admin
