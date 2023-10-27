const express =require('express');

const router=express.Router();

//import controller

const {createTodo} =require("../controllers/createTodo");

//defining api routes

//create ke liye 
//path ko maine controller se map kra diya

 router.post("/createTodo", createTodo);

 module.exports=router;