const mongoose =require("mongoose");

const dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    })
    .then(()=>console.log("db is successfully connected"))
    .catch((error)=>{
        console.log("issue in db conection");
        console.error(error.message); 
        process.exit(1);
    });
}

module.exports=dbConnect;