from flask import Flask, jsonify, send_file
from flask_cors import CORS
import os, requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

AIRTABLE_API_KEY = os.getenv('AIRTABLE_API_KEY')
AIRTABLE_BASE_ID = 'appfWEuwPO7ljMM7k'
AIRTABLE_TABLE_NAME = 'ESL job board'

@app.route('/')
def serve_frontend():
    return send_file('table.html')

@app.route('/api/jobboard')
def get_jobs():
    url = f"https://api.airtable.com/v0/{AIRTABLE_BASE_ID}/{AIRTABLE_TABLE_NAME}"
    headers = {"Authorization": f"Bearer {AIRTABLE_API_KEY}"}
    res = requests.get(url, headers=headers)
    if res.status_code == 200:
        return jsonify(res.json())
    else:
        return jsonify({"error": "Failed to fetch Airtable data"}), 500

if __name__ == '__main__':
    app.run(debug=True)
