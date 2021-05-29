const express = require('express');
const fs=require('fs');
const router =express.Router();
const post = require('../models/posts');

router.get('/', async(req, res)=> {
    try {
        const posts = await post.find();
        res.status(200).json({
            message:"posts fetched successfully",
            postData:posts
        })
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
    
})


router.post("/save",async(req,res)=>{
    console.log(req.body);
    const postObj ={
        postTitle : req.body.ptitle,
        postDes : req.body.pdesc,
        postAuthor : req.body.pauthor,
    }
    try {
        const posts = new post(postObj);
        console.log(posts);
        await posts.save();
        res.status(200).json({
            message:"Data fetched successfully" ,
            postData:post
        })
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
})

router.put("/update/:id",async(req,res)=>{
    const id = req.params.id;
    const postObj ={
        postTitle : req.body.ptitle,
        postDes : req.body.pdesc,
        postAuthor : req.body.pauthor,
    }
    try {
        const updatedPost = await post.findByIdAndUpdate(id,{$set:postObj});
        if(updatedPost!=null){
            res.status(200).json({
                message:"post updated successfully",
                updatedPost:updatedPost
            })
        }else{
            res.status(400).json({
                message:"post did'nt updated successfully/ID not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }  
})

router.delete('/delete/:id',async(req, res)=>{
    const id = req.params.id;
    try {
        const deletedPost = await post.findByIdAndDelete(id);
        if(deletedPost==null){
            res.status(400).json({
                message:"post did'nt deleted  successfully/ID not found"
            })
        }else{
            res.status(200).json({
                message:"post deleted successfully",
                deletedPost:deletedPost
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
})

router.get("/getbyid/:id",async (req, res) => {
    const id =req.params.id;
    try {
        const postbyid = await post.findById(id);
        console.log(postbyid);
        if (postbyid) {
            res.status(200).json({
                message:"post fetched successfully",
                postbyid:postbyid
            })
        }else{
            res.status(400).json({
                message:"post not found"
            })
        } 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
})

module.exports=router;