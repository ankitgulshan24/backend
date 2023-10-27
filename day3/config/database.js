const mongoose=require('mongoose');

require("dotenv").config()
const dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    })
    .then(console.log("db is successfull connected"))
    .catch((error)=>{
        console.log("db is not connected successfull");
        console.error(error);
        process.exit(1);

    })

};
module.exports=dbConnect;