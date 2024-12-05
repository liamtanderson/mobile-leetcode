from flask import Flask, request, jsonify
from flask_cors import CORS
from evaluator import evaluate_code

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_code():
    #return jsonify({'result': 'from api result'})
    data = request.get_json()
    code = data.get('code', '')
    result = evaluate_code(code)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
