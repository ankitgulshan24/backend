
//server intiated or created server

const express=require('express');
const app=express();


//used to parse req.body in express -> post or put
const bodyParser=require('body-parser');
// specifcally bol rhe ki parse json data and add it to the request.body  object 
app.use(bodyParser.json());




//activate on srver port 3000
app.listen(3000, ()=>{
    console.log("server started at port no 3000");
});
//routes
app.get('/', (request, response)=>{
    response.send("hello jee this is ankit here");
});

app.post('/api/cars', (request, response)=>{
    const {name , brand} =request.body;
    //upar wali line  mtlb hI KI JB TM US route pe jaaoge to   requeest body me se name or brand niakl liya jaayega
    //nam,e ko braint kiya jaayega or brand ko bhi or response me uoi diya jjaeyega 
    console.log(name);
    console.log(brand);
    response.send("car succesfully submitted");
});

const mongoose=require('mongoose');
//down line whole is a promise
mongoose.connect('mongodb://0.0.0.0/cars',{
    useNewurlParser: true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection builds succesfully ");})
.catch((error)=>{console.log("error received");})
