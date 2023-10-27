const mongoose =require("mongoose");

const todoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            reuired:true,
            maxLength:50,
      
  },
        description:{
            type:String,
            reuired:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            reuired:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            reuired:true,
            default:Date.now(),
        },
    }
);

module.exports=mongoose.model("Todo", todoSchema);