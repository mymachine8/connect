const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * User Schema
 */

const ClassifiedTypeSchema = new Schema({
    id : {type: Number, required: true},
    name: {type: String, required: true}
});

mongoose.model('Classified_Type', ClassifiedTypeSchema);