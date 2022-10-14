from flask import Flask, jsonify, request

print('===flask 가동===')

app = Flask(__name__)


@app.route("/test", methods=['GET'])
def apiTest():
    print("Flask:정상응답 중")
    res = {'message': "Flask 정상응답 중"}
    return jsonify(res), 200


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)