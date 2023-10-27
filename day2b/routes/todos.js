const express=require('express');
const router=express.Router();

//import controller
const{createTodo}=require("../controllers/createTodo");
const{getTodo}=require("../controllers/getTodo");
const{getbyid}=require("../controllers/getbyid");
const{updateTodo}=require("../controllers/updateTodo");
const{deleteTodo}=require("../controllers/deleteTodos");


//define api routes

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getbyid);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports=router;