const bcrypt= require ('bcrypt');
const User= require("../model/user");
// const User = require("../model/user");
const jwt = require ("jsonwebtoken");
require("dotenv").config()



exports.signup= async(req, res)=>{
    try{
        //get data 
        const {name, email, password, role}= req.body;
        //check if the user exist or not
        const existinguser= await User.findOne({email});
        if(existinguser){
            return res.status(400).json({
                success:false,
                message:"user allready exist"

            });
        }

        //securing password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch{
            res.status(500).json({
                success:false,
                message:"error nin hashing password",
            })
        }

        //create usser entry
        let user= await User.create({
            name, email,password:hashedPassword,role
        });

        return res.status(200).json({
            success:true,
            message:"user created successfully"

        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"user canot register please tryb again later"
        })

    }
}

//login handler

exports.login= async (req, res)=>{
    try{
        const{email, password}=req.body;
        if(!email|| !password){
            return res.status(400).json({
                success:false,
                message:"invalid input"
            });
        }
        let  user= await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"please signin first"
            });
        }

        const payload ={
            email:user.email,
            id:user._id,
            role:user.role,
        };
        //password matching
        //changin logic
         // if(password==user.password){
        if(await bcrypt.compare(password,user.password)){
            //password matched 
            let token= jwt.sign(payload, process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user=user.toObject();
            user.token=token;
            user.password=undefined;
            const options={
                expires: new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                user,
                token,
                message:"user loggged isuccessfully"
            });


        }
        else{
            //passsord dont match
            return res.status(403).json({
                success:false,
                message:"incorrrect passsword"
            })
        }

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"unsuccessfull logged in"
        })

    }
}

// {
//     "name":"Ankitgulshan",
//     "email":"ankitkrnwd1@gmail",
//     "password":"abcd417",
//     "role":"Admin"
// }
