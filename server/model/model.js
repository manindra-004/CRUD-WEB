const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:String,
        required:true,
    },
    course:String,
    status:String
})

const Userdb = mongoose.model('userdb',schema);

module.exports=Userdb;