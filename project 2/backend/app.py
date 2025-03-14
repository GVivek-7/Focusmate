from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

def jaccard_similarity(set1, set2):
    intersection = len(set(set1) & set(set2))
    union = len(set(set1) | set(set2))
    return intersection / union if union != 0 else 0

@app.route('/calculate-similarity', methods=['POST'])
def calculate_similarity():
    data = request.json
    user_subjects = set(data['user_subjects'])
    other_users = data['other_users']
    
    similarities = {}
    for user in other_users:
        similarity = jaccard_similarity(user_subjects, set(user['subjects']))
        similarities[user['id']] = similarity
    
    return jsonify({'similarities': similarities})

if __name__ == '__main__':
    app.run(debug=True)