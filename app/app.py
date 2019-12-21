from flask import Flask, render_template, url_for, request
from flask_login import LoginManager, UserMixin, current_user, login_user
import mysql.connector

# Create the app
app = Flask(__name__)
login = LoginManager(app)
login.init_app(app)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Setup Database connection
db = mysql.connector.connect(
	host = "localhost",
	user = "admin",
	passwd = "admin"
)
db_cursor = db.cursor()
db_cursor.execute("USE realityTvFantasy;")


# Routes
@app.route("/")
@app.route("/index")
def index():
	# db_cursor.execute("SHOW TABLES;")
	# s = ''
	# for x in db_cursor:
	# 	s += x[0] + "||"

	# print(s)
	return render_template("index.html")

@app.route("/profile")
def profile():
	return render_template("profile.html")

@app.route("/login")
def login():
	return render_template("login.html")

@app.route("/signup")
def signup():
	return render_template("signup.html")

@app.route("/logout")
def logout():
	return render_template("logout.html")

@app.route("/shutdown")
def shutdown():
	func = request.environ.get('werkzeug.server.shutdown')
	func()

"""
  _              _      
 | |   ___  __ _(_)_ _  
 | |__/ _ \/ _` | | ' \ 
 |____\___/\__, |_|_||_|
           |___/       
"""


if __name__ == "__main__":
	app.secret_key = 'its a secret'
	app.run(debug=True, port=4000)