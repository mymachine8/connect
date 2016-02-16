var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var helpers = require('../helpers');
var User = mongoose.model('User');

var _ = require('lodash');

module.exports = {
    login : login,
    logout : logout,
    register: register
};

function generateToken(user) {
    var accessToken = jwt.sign({
        id: user.id
    }, 'server secret', {
        expiresIn: 3600*24*30
    });

    return accessToken;
}

//TODO: Write Generate refresh token function

function login(req, res, next) {
    var retObj = {};
    passport.authenticate('local', {session: false}, function(err, user) {
        if (err) {
            return next(err);
        }
        if(!user) {
                retObj = helpers.Api.makeErrorResponse(401,"Authentication Failed");
                res.status(401);
                res.setHeader('WWW-Authenticate', 'Basic realm="login failed"');
                return res.send(retObj);
        }
        var data = {};
        data.token = generateToken(user);
        res.send(helpers.Api.makeSuccessResponse(data));
    })(req, res, next);
}

function logout(req, res) {
    req.logout();
    res.send();
}

function register(req, res) {
   User.register(req.body, function(err,user){
       if(err){
           res.send(helpers.Api.makeErrorResponse(err));
       }
       res.send(helpers.Api.makeSuccessResponse(user));
   });
};
