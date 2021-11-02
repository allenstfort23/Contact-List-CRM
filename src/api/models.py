from flask_sqlalchemy import SQLAlchemy
import os


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(120), unique=False, nullable=True)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    username = db.Column(db.String(120), unique=True, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=False)


 

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "username": self.username,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=True)
    phone_number = db.Column(db.String(500), unique=True, nullable=True)

    def __repr__(self):
        return '<Contact %r>' % self.phone_number

    def serialize(self):
        return {
        "id": self.id,
        "name": self.name,
        "phone_number": self.phone_number,
        }
