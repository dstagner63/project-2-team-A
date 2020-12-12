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
    return pd.read_sql_table("national", engine).head(9000).to_json(orient="records")

@app.route("/api/austin")
def austin():
    austin = pd.read_sql_table("austin", engine).groupby("outcome_type")["animal_id"].count().reset_index()
    austin.rename(columns={"animal_id": "count"}, inplace=True)
    print(austin)
    return austin.to_json(orient="records")

@app.route("/api/austin2/<animal_type>")
def austin_search(animal_type):
    print(animal_type)
    austin2 = pd.read_sql_table("austin", engine)
    print(austin2)
    austin2 = austin2[austin2.animal_type == animal_type]
    print(austin2)
    return austin2.to_json(orient="records")

@app.route("/api/austin/dog")
def austin_dog():
    austin2 = pd.read_sql_table("austin", engine)
    print(austin2)
    austin2 = austin2[austin2.animal_type == "Dog"]
    print(austin2)
    return austin2.to_json(orient="records")

@app.route("/api/austin/cat")
def austin_cat():
    austin2 = pd.read_sql_table("austin", engine)
    print(austin2)
    austin2 = austin2[austin2.animal_type == "Cat"]
    print(austin2)
    return austin2.to_json(orient="records")

@app.route("/api/sonoma")
def sonoma():
    sonoma = pd.read_sql_table("sonoma", engine).groupby("outcome_type")["animal_ids"].count().reset_index()
    sonoma.rename(columns={"animal_ids": "count"}, inplace=True)
    print(sonoma)
    return sonoma.to_json(orient="records")

@app.route("/api/sonoma/<animal_type>")
def sonoma2(animal_type):
    print(animal_type)
    return animal_type

if __name__ == "__main__":
    app.run(debug=True)
