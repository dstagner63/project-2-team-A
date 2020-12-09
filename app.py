from flask import Flask, jsonify, render_template
import pandas as pd
from sqlalchemy import create_engine

app = Flask(__name__)
engine = create_engine("sqlite:///shelters.sqlite")

@app.route("/")
def index():
    return render_template("template_index.html")

@app.route("/api/shelters")
def shelters():
    #print(pd.read_sql_table("national", engine).to_json(orient="records"))
    return pd.read_sql_table("national", engine).to_json(orient="records")

if __name__ == "__main__":
    app.run(debug=True)
