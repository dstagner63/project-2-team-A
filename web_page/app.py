from flask import Flask, jsonify, render_template
import pandas as pd
from sqlalchemy import create_engine

app = Flask(__name__)
engine = create_engine("sqlite:///shelters.sqlite")

@app.route("/")
def index():
    return render_template("template_index.html")

@app.route("/api/national")
def national():
    #print(pd.read_sql_table("national", engine).to_json(orient="records"))
    return pd.read_sql_table("national", engine).to_json(orient="records")

@app.route("/api/austin")
def austin():
    #print(pd.read_sql_table("austin", engine).to_json(orient="records"))
    return pd.read_sql_table("austin", engine).to_json(orient="records")

@app.route("/api/sonoma")
def sonoma():
    #print(pd.read_sql_table("sonoma", engine).to_json(orient="records"))
    return pd.read_sql_table("sonoma", engine).to_json(orient="records")

if __name__ == "__main__":
    app.run(debug=True)
