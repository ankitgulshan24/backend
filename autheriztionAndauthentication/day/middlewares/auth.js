
const jwt = require('jsonwebtoken');
require("dotenv").config();

express.auth=(req, res , next)=>{
    try{

        //extract jwt token 
        //pensing other ways to fetch token (header se abhi nahi padha ahi)
        const token =req.body.token|| req.cookie.token;
        if(!token){
            return res.status(401).json({
                success:true,
                message:"token missing",
            })
        }
        //verifyb the tokoen 
        try{
            const decode =jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user= decode;
        }
        catch(error){
            return  res.status(401).json({
                success:true,
                message:"token is invalid"
            })
        }

    }
    catch(error){

    }

}