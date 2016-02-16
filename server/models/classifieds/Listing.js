/**
 * Created by thespidy on 08/02/16.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * User Schema
 */

const ListingSchema = new Schema({
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    price: {type: String, required: false},
    category: {type: String, required: true},
    details : {type: Schema.Types.Mixed},
    createdBy: {type: ObjectId, required: true},
    updatedAt : {type: Date, required: false}
});

mongoose.model('Listing', ListingSchema);