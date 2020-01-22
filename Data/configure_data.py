# Configure Data 

import pandas as pd

# Read the data 
df = pd.read_csv("input_data.csv")

# Save to JSON
s = df.to_json(orient='records')
f = open("data.js", 'w+')
f.write("var data = " + s + ';')
f.close()