/**
 * Created by thespidy on 06/02/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Token = new Schema({any: {}});

module.exports = mongoose.model('token', Token);