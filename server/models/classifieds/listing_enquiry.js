/**
 * Created by thespidy on 08/02/16.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingCommentsSchema = new Schema({
    commentBy : {type:Schema.Types.ObjectId, ref:User, required: true},
    commentText: {type: String, required: true},
    commentTime : {type:Date, required:true}
});
/**
 * User Schema
 */

const listingSchema = new Schema({
    listingId: {type: Schema.Types.ObjectId, required: true},
    enquiredUser : {type: Schema.Types.ObjectId, required: true},
    comments: [listingCommentsSchema]
});

mongoose.model('Listing', listingSchema);