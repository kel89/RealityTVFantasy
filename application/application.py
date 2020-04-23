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

# Initialize application
application = Flask(__name__)

# Config
application.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Test Route
@application.route("/")
def index():
	return render_template("index.html")

# Run
if __name__ == "__main__":
	application.run(debug=True, host='0.0.0.0')
