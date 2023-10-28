const express= require("express");
const jwt = require('jsonwebtoken');
require("dotenv").config();

express.auth=(req, res , next)=>{
    try{

        //extract jwt token 
        //pending other ways to fetch token (header se abhi nahi padha ahi)
        const token =req.body.token|| req.cookie.token;
        if(!token){
            return res.status(401).json({
                success:true,
                message:"token missing",
            })
        }
        //verifyb the tokoen 
        try{
            //decode == payload 
            const decode =jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            //why this 
            req.user= decode;
        }
        catch(error){
            return  res.status(401).json({
                success:true,
                message:"token is invalid"
            })
        }
        next();

    }
    catch(error){
        return  res.status(401).json({
            success:true,
            message:"something went wrong while the token"
        })

    }

}

//checking for isstudent 

exports.isStudent=(req,res)=>{
    try{
        if(res.user.role!='student'){
            return res.status(401).json({
                success:true,
                message:"this is a protected route for student",
            });
        }
        next();
    
    }
    catch(error){
        return res.status(500).json({
            success:true,
            message:"user role is not matching "
        })
        

    }
}

//middleware for the isAdmin
exports.isAdmin=(req,res)=>{
    try{
        if(res.user.role!="admin"){
            return res.status(401).json({
                success:false,
                message:"this is  a protected route for the admin"
            })
        }

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"admin role is not matching "
        })

    }
}