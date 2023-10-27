const Todo = require("../models/Todo")

//imopot todo from model
// const Todo=require('../models/Todo');

exports.updateTodo= async(req,res)=>{
    try{
        const {id}=req.params;
        const{title, description}=req.body;

        const todos= await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt:Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todos,
            message:`Updated successfully`,
        })


    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error"
        });

    }
}

