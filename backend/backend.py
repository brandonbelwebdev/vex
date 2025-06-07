from flask import Flask, jsonify
import requests
import os
from dotenv import load_dotenv
load_dotenv()
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app = Flask(__name__)

AIRTABLE_API_KEY = os.getenv('AIRTABLE_API_KEY')
AIRTABLE_BASE_ID = 'appfWEuwPO7ljMM7k'
AIRTABLE_TABLE_NAME = 'Jobs'

@app.route('/api/jobs')
def get_jobs():
    url = f"https://api.airtable.com/v0/{AIRTABLE_BASE_ID}/{AIRTABLE_TABLE_NAME}"
    headers = {
        "Authorization": f"Bearer {AIRTABLE_API_KEY}"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to fetch Airtable data"}), 500

if __name__ == '__main__':
    app.run(debug=True)
