const user = require("../models/auth");
const bcrypt = require('bcryptjs');
const Joi = require('joi');
// Signin to the application

exports.signIN=async (req,res)=>{
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
}

// register to the application

exports.signUp=async (req,res)=>{
    const userObj=Joi.object({
        name:Joi.string().required().min(3).alphanum(),
        email:Joi.string().email().required(),
        password:Joi.string().required().min(6).max(10)
    })
    try{
        let userobject = await userObj.validateAsync(req.body);

        let userauth= await user.findOne({email:userobject.email});
        if (!userauth) {
            let newuser = new user(userobject);
            const salt = await bcrypt.genSaltSync(10);
            newuser.password =await bcrypt.hash(newuser.password,salt);
            await newuser.save();
            res.status(200).json({
                message : "User created successfully",
                newuser
            });
        } else {
            res.status(400).json({
                message : "Already exists",
            });
        }
        
    }
    catch(err){
        res.status(500).json({
            message : "Something went wrong",
            error : err
        });
    }
}