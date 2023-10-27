// impoprt model 
const Todo= require("../models/Todo");

exports.deleteTodo= async(req, res)=>{
    
    try{
        const {id}=req.params;
        const todos= await Todo.findByIdAndDelete(id);
        res.status(500).json({
            success:true,
            message:"message deleted "
        })
    

    
      
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error"
        })


    }
    


}