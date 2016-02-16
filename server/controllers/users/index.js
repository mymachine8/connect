'use strict';

var express = require('express');
var passport = require('passport');

var UserController = require("./users");
var router = express.Router();

router.use(function (req, res, next) {
    next();
});

//user routes

router.use(passport.authenticate('bearer', {session: false}));

//router.post('/', UserController.create);

//router.put('/:id', UserController.update);

//router.put('/password/:id', UserController.updatePassword);

//router.get('/logout',UserController.logout);

module.exports = router;