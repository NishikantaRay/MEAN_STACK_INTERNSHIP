const mongoose= require('mongoose');

const contactSchema = mongoose.Schema({
    contactName:{
        type:String,
        required:true
    },
    contactEmail:{
        type:String,
        required:true
    },
    contactPhone:{
        type:String,
        required:true
    },
    contactPhone:{
        type:String,
        required:true
    },
    contactType:{
        type:String,
        required:true
    },
    contactUserId : {
        type : Number,
        required : true
    }
});

module.exports=mongoose.model('contact',contactSchema);
