const express = require ("express");
const app = express();

require ("dotenv").config();
const PORT = process.env.PORT || 4000;

//parsing the data 
app.use(express.json()); 


require("./config/database").connect();

//routeimport and mount 

const user =require("./routes/user");
app.use("/api/v1", user)

app.listen(PORT, ()=>{
    console.log(`app is lidtening at ${PORT}`);
})