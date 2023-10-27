//import mongoose instance
const mongoose= require('mongoose');

const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        requied:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like",
    }],
    Comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }]


});




//export
module.exports= mongoose.model("Post", postSchema);