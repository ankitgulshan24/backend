//import the model
const Todo = require("../models/Todo");

exports.getTodo=async(req, res)=>{
    try{
        //fetch all todo item from database
        const todos= await Todo.find({}); 

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"data a gya hai",
        });
    }
    catch(err){
        console.error(err);
        req.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error',
        });

    }
}

