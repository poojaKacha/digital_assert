const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const digitalSchema = new Schema({
    Doucmentname :{
        type : String,
        required : true,
    },
    profileIMAGE: {
        
        type: String,
        required:true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }
});
let DIGITAL = mongoose.model('digital',digitalSchema)
module.exports = DIGITAL