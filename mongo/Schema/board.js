const mongoose = require('mongoose');

const {Schema} = mongoose;

const BoardSchema = new Schema({
    title:{
        type: String,
        required: true,
        default: true,
    },
    body:{
        type:String,
    }
})

module.exports = mongoose.model('board', BoardSchema);