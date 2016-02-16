'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

/**
 * User Schema
 */

const UserSchema = new Schema({
    email: {type: String, default: ''},
    hashed_password: {type: String, default: ''},
    salt: {type: String, default: ''},
    authToken: {type: String, default: ''}
});

//TODO: Validation rules using path in mongoose when registering user

//TODO: Write some pre save hooks (function to execute before saving)

function encryptPassword(password, salt) {
    return bcrypt.hashSync(password,salt, null);
}

function makeSalt() {
    return bcrypt.genSaltSync(8);
}

function authenticate(plainPassword) {
    return this.encryptPassword(plainPassword, this.salt) === this.hashed_password;
}
/**
 * Methods
 */

UserSchema.methods = {
    encryptPassword: encryptPassword,
    authenticate: authenticate
};

/**
 * Statics
 */

UserSchema.statics = {

    load: function (options, cb) {
        options.select = options.select || 'name username';
        return this.findOne(options.criteria)
            .select(options.select)
            .exec(cb);
    },

    register: function (data, cb) {
        var self = this;
        self.findOne({email: data.email}, function (err, user) {
            if (err) {
                cb(err);
                return;
            }
            if (user) {
                cb(new Error('User already exists for this email'));
                return;
            }
            var salt = makeSalt();
            var hashed_password = encryptPassword(data.password,salt);
            var newUser = {email: data.email, hashed_password: hashed_password, salt:salt};
            self.create(newUser, function (err, result) {
                if (err) {
                    cb(new Error("New user creation failed"));
                }
                cb(null, result);
            });
        });
    },

    makeSalt: makeSalt
};

mongoose.model('User', UserSchema);
