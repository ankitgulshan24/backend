
//server intiated successfully
const express=require('express');
const app=express(); 

//body parser
//used to parse reuest 
const bodyParser=require('body-parser');
//specically parse json dsata and add it to the request body object
app.use(bodyParser.json());
 

// activating the server at 3000 port
app.listen(3000, ()=>{
    console.log('ankit is listening ')
});

// // craeting routes
// app.get('/', (request, response)=>{
//     response.send("hello ankit is here ");
// });

//creating post request

app.post('/api/cars', (req, res)=>{
    const {name, brand} =req.body;
    console.log(name);
    console.log(brand);
    res.send("cars submiteed succesfully")


});

const mongoose=require('mongoose');
// neeche ka pura ka pura ka pura [part promise hai ]

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection succesful")})
.catch((error)=>{console.log(error)});