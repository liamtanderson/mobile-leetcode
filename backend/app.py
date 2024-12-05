from flask import Flask, request, jsonify
from evaluator import evaluate_code

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_code():
    data = request.get_json()
    code = data.get('code', '')
    result = evaluate_code(code)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
