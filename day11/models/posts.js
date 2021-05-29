const mongoose= require('mongoose');

const postSchema = mongoose.Schema({
    postTitle:{
        type:String,
        required:true
    },
    postDes:{
        type:String,
        required:true
    },
    postAuthor:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('posts',postSchema);