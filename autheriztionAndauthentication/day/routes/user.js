const express =require("express");
const router =express.Router();
const {login, signup}= require("../controller/Auth")
const {auth, isStudent, isAdmin}= require("../middlewares/auth")

router.post("/login", login);
router.post("/signup",signup);

router.get("/test", auth, (req, res)=>{
    res.json({
        success:true,
        message:"hey logged in as a student"
    });
})

// router.get("/student" , auth, isAdmin, isStudent, (req, res)=>{
//     res.json({
//         success:true,
//         message:"hey logged in as a student"
//     })
// });

// router.get("/admin", auth, isAdmin, isStudent, (req, res)=>{
//     res.json({
//         success:true,
//         message:"hey logged in as a admin"
//     })
// });


module.exports=router;