//import mode
const Todo=require("../models/Todo");

//defining route handletr 

exports.createTodo =async (req, res)=>{
   try{
    //extract title and body from request ki body
    const {title, description}=req.body;
    //create a new todo obj and insert in db
    const response =await Todo.create({title, description});
    //send a json response qwith success flag
    res.status(200).json(
        {
            success:true,
            data:response,
            message:"entry created Successfully"
        }
    );

   } 
   catch(err){
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
        success:false,
        data:"internal server error",
        message:err.message,
    })
   }
}