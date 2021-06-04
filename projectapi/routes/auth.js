const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    console.log("This route has not been defined yet.");
})


router.post("/new",async(req,res)=>{
    console.log(req.body);
    const userObj ={
        fullName : req.body.userFullName,
        email : req.body.userEmail,
        password : req.body.userPassword,
    }
    try {
        let userModel = require('../models/auth')(userObj.fullName);
        const newUser = new userModel(userObj);
        console.log(newUser);
        await newUser.save();
        res.status(201).json({
            message:"User Registration Successful" ,
        })
    } catch (err) {
        console.log(err);
        res.status(200).json({
            message:"Something went wrong",
            error:err
        })
    }
    
})

module.exports=router;