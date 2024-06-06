const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    FullName :{
        type : String,
        required : true,
    },
    DateOfBirth :{
        type : String,
        required : true,
    },
    Gender :{
        type : String,
        required : true,
    },
    MobileNO :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required : true,
    }
    
});
let USER = mongoose.model('user',userSchema)
module.exports = USER