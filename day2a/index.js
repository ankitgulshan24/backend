const express = require("express");
const app =express();

//listening on a port 
//load fron env file 

require("dotenv").config();
const PORT =process.env.PORT || 4000;

//middle ware requirement to parse json request body 

app.use(express.json());

//import routes for todo api

const todoRoutes =require("./routes/todo");
//mount the todo api routes
app.use("/api/v1", todoRoutes);

//start server

app.listen(PORT, ()=>{
    console.log(`server started successfullt at ${PORT}`);
})

//CONNECTION OF THE DB

const dbConnect=require("./config/database");
dbConnect();


//default Route 
app.get("/",(req, res)=>{
    res.send(`<h1>this is my homepage</h1>`);
})
