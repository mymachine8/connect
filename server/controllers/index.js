'use strict';
var _ = require('lodash');
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var authController = require('./authentication');
var User = mongoose.model('User');
/*
 * Please define any new controllers here.
 */

router.post('/login', authController.login);
router.post('/logout',authController.logout);
router.post('/register',authController.register);


router.use(function (req, res, next) {
    /*
     * logging (This function will be called before going to any specific controller route)
     */
    console.log("URL : ", req.url);
    console.log("METHOD : ", req.method);
    console.log("PARAMS : ", req.params);
    console.log("COOKIES : ", req.cookies);
    console.log("ORIGIN : ", req.headers.origin);
    console.log("USERAGENT : ", req.headers['user-agent']);
    console.log("BODY : ", req.body);
    next();
});



var controllers = [
    //{
    //    path: '/role',
    //    controller: userController
    //}
];

_(controllers).forEach(function (route) {
    //Attach controllers
    router.use(route.path, route.controller);
});

module.exports = router;
