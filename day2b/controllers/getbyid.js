const Todo = require('../models/Todo');
const getbyid=require('../models/Todo');

exports.getbyid= async(req, res)=>{
    try{
        //extract todom items on the basis of id
        const id= req.params.id;
        const todo= await Todo.findById({_id: id});

        //given data for not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found",
            })

        }
        //data for the give id is found 
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo${id} data successfully fetched`,

        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error",
        });

    }
}