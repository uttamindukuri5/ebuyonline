from pymongo import MongoClient
from flask import Flask, jsonify, request
from bson.objectid import ObjectId
from flask_cors import CORS
from bson import json_util
import json

app = Flask(__name__)
client = MongoClient('mongodb://root:secret@db:27017')
db = client.ebuy
CORS(app)

@app.route('/', methods=['GET'])
def get_all_objects():
    objects = db.object
    results = []
    for field in objects.find():
        results.append({'object_id': str(field['_id']), 'name': field['name'], 'img': field['image'],
                        'newPrice': field['newPrice'], 'oldPrice': field['oldPrice'],
                        'description': field['description'],
                        'features': field['features']})
    return jsonify(results)


@app.route('/<object_id>', methods=['GET'])
def get_object(object_id):
    object = db.object
    for data in object.find({'_id': ObjectId(object_id)}):
        return json.dumps(data, indent=4, default=json_util.default)


@app.route('/signup', methods=['POST'])
def create_user():
    user = db.user
    username = request.form['username']
    password = request.form['password']
    first_name = request.form['firstName']
    last_name = request.form['lastName']
    age = request.form['age']
    email = request.form['email']
    street = request.form['street']
    city = request.form['city']
    state = request.form['state']
    zip_code = request.form['zipCode']
    card_number = request.form['cardNumber']
    cvv = request.form['cvv']
    card_expiration = request.form['cardExpiration']
    phone = request.form['phone']
    user_exist = user.find({'username': request.form['username']})
    if user_exist.count() == 0:
        user_data = {
            "username": username,
            "password": password,
            "firstName": first_name,
            "lastName": last_name,
            "age": age,
            "email": email,
            "street": street,
            "city": city,
            "state": state,
            "zipCode": zip_code,
            "cardNumber": card_number,
            "cvv": cvv,
            "cardExpiration": card_expiration,
            "phone": phone
        }
        user.insert(user_data)
        return '200'
    return '400'


@app.route('/login', methods=['POST'])
def authenticate_user():
    user = db.user
    username = request.form['username']
    password = request.form['password']
    user_exist = user.find({'username': username, 'password': password})
    if user_exist.count() != 0:
        return 'Successfully authenticated'
    return 'Invalid Username/Password'


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)