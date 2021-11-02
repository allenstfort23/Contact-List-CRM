"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Contact
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
# @api.route('/protected', methods=['GET'])
# @jwt_required()
# def protected():
#     current_user_id = get_jwt_identity()
#     me = User.query.filter_by(id=current_user_id).first() 

#     return jsonify(me.serialize()), 200 

# THIS GETS ALL THE USER IN THE DATABASE
@api.route('/user', methods=['GET'])
def handle_user():

    user = User.query.all()
    user = list(map(lambda user: user.serialize(), user))

   
    return jsonify(user), 200

# THIS GETS ALL THE CONTACT FROM THE DATABASE
@api.route('/contact', methods=['GET'])
def handler_contact():

    contact = Contact.query.all()
    contact = list(map(lambda contact: contact.serialize(), contact))

    return jsonify(contact), 200

@api.route('/user', methods=['POST'])
# @jwt_required()   
def create_user():

    request_data = request.get_json()
    create_user = User(first_name=request_data['first_name'], last_name=request_data['last_name'], username=request_data['username'], email=request_data['email'],password=request_data['password'])
    db.session.add(create_user)
    db.session.commit()

    return jsonify(create_user.serialize())
    

# THIS CREATES A CONTACT
@api.route('/contact', methods=['POST'])
def create_contact():

    request_data = request.get_json()
    create_contact = Contact(name=request_data['name'], phone_number=request_data['phone_number'])
    db.session.add(create_contact)
    db.session.commit()

    return jsonify(create_contact.serialize())

# Create a route to authenticate users and return JWT Token.
# create_access_token() function is used to actually generate the JWT.
@api.route('/token', methods=['POST'])
def create_token():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

     # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        # the user was not found on the databas
        return jsonify({"msg": "Bad username or password"}), 401

     # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    print(access_token)

    return jsonify({ "token": access_token, "user_id": user.id, "username":user.email})