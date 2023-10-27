const express=require("express");
const app=express();

//load config from the env file 
require("dotenv").config();
const PORT=process.env.PORT ||4000;

//middle ware ki require to parse json request body 
app.use(express.json());

//import routes for todo api
const todoRoutes =require("./routes/todos");

//mount the todo api routes
app.use("/api/v1", todoRoutes);

//start the server
app.listen(PORT, ()=>{
    console.log(`servere started at port ${PORT}`);

})

//connection to db 

const dbConnect=require("./config/database");
dbConnect();

//default routes
app.get("/",(req,res)=>{
    let x=3;
    res.send(`<h1>this is my homepage buddy ${x}</h1>`);
})
 