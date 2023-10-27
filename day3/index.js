const express= require('express');
const app =express();

require('dotenv').config();
const PORT= process.env.PORT || 3000;

// adding middle ware 
app.use(express.json());

const blog=require ("./routes/blog")

//mpounting api 

app.use("api/v1", blog);

//connecting with the db
const connectWithDb=require("./config/database");
connectWithDb();

//start the server 
app.listen(PORT , ()=>{
    console.log(`app is started at port ${PORT}`);
})

app.get('/', (req, res)=>{
    res.send(`<h1>this is my homepage boyss</h1>`)
})


