const express = require('express');
const router = express.Router();
const user = require("../models/auth");

router.post("/signIn/:email",async (req,res)=>{
    let userEmail = req.params.email;
    try{
        const userData = await user.findOne({email : userEmail});
        if(userData){
            res.status(200).json({
                meassage : "User data found",
                userInfo : userData
            });
        }
        else{
            res.status(404).json({
                message : "user not found",
            });
        }
    }catch(err){
        res.status(500).json({
            message : "something went wrong",
            error : err
        });
    }
});


router.post("/register",async (req,res)=>{
    const userObj = {
        name : req.body.userName,
        email : req.body.userEmail,
        password:req.body.userPassword,
    }
    try{
        const newUser = new user(userObj);
        await newUser.save();
        res.status(200).json({
            message : "User created successfully"
        });
    }
    catch(err){
        res.status(404).json({
            message : "Something went wrong",
            error : err
        });
    }
});

module.exports=router;