const mongoose = require('mongoose');

function test(Fname){
    const userSchema = mongoose.Schema({
        fullName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    });
    return mongoose.model(Fname, userSchema);
}

module.exports = test;