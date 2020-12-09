from flask import Flask, jsonify, render_template
import pandas as pd
from sqlalchemy import create_engine

app = Flask(__name__)
engine = create_engine("sqlite:///data/shelters.sqlite")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/national")
def national():
    return pd.read_sql_table("national", engine).to_json(orient="records")

@app.route("/api/austin")
def austin():
    return pd.read_sql_table("austin", engine).to_json(orient="records")

@app.route("/api/sonoma")
def sonoma():
    return pd.read_sql_table("sonoma", engine).to_json(orient="records")

if __name__ == "__main__":
    app.run(debug=True)
