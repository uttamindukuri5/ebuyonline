import ast

from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson import json_util
from flask_cors import CORS
import json

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'ebuy'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/ebuy'

mongo = PyMongo(app)

CORS(app)

print('found it', mongo.db.object.find_one({'_id': ObjectId('5da8b3d528d08f0b34dccf51')}))


@app.route('/', methods=['GET'])
def get_all_objects():
    objects = mongo.db.object
    results = []
    for field in objects.find():
        results.append({'object_id': str(field['_id']), 'name': field['name'], 'img': field['image'],
                        'newPrice': field['newPrice'], 'oldPrice': field['oldPrice'],
                        'description': field['description'],
                        'features': field['features']})
    return jsonify(results)


@app.route('/<object_id>', methods=['GET'])
def get_object(object_id):
    print(type(object_id))
    mongo_id = mongo.db.object
    for data in mongo_id.find({'_id': ObjectId(object_id)}):
        return json.dumps(data, indent=4, default=json_util.default)


if __name__ == '__main__':
    app.run(debug=True)
