//impporting the model

const Todo = require("../models/Todo");

//defining routes handler
//async function is used to donot disturb the flow of code

// todo access something with database try to use async function in order to donot block the main thread

exports.createTodo= async(req, res)=>{
    try{
        //extract title and desscription from reqyuest ki body
        const{title,description}=req.body;
        //crete a new to do object and insert in db

        const response=await Todo.create({title,description});
        //send a json response with a scuccess flag

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        req.status(500)
        .json({
                success:false,
                data:"internal server error",
                message:err.message,
        })
        
    }
}