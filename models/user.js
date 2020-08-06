/* User model */
'use strict';

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isAlphanumeric,
      message: 'Not valid username'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre('save', function (next) {
  const user = this; // binds this to User document instance

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
// to a given one, for example when logging in.
UserSchema.statics.findByUsernamePassword = function (username, password) {
  const User = this; // binds this to the User model

  return User.findOne({ username: username }).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

// make a model using the User schema
const User = mongoose.model('User', UserSchema);
module.exports = { User };
