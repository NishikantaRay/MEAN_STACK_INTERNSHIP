const express = require('express');
const router =express.Router();
const contact = require('../models/contact');

// Get all the contacts from the database

router.get('/:userid', async(req, res)=> {
    let id = req.params.userid;
    try {
        const contacts = await contact.find({contactUserId:id});
        // console.log(contacts.length)
        if(contacts.length!==0){
            console.log(contacts)
            res.status(200).json({
                message:"ContactList fetched successfully",
                contactData:contacts
            })
        }else{
            res.status(404).json({
                message:"Not found",
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
    
})

// Add new contacts to the database

router.post("/add",async(req,res)=>{
    console.log(req.body);
    const contactObj ={
        contactName : req.body.cname,
        contactEmail : req.body.cemail,
        contactPhone : req.body.cphone,
        contactType : req.body.ctype,
        contactUserId : req.body.cId
    }
    try {
        const contacts = new contact(contactObj);
        console.log(contacts);
        await contacts.save();
        res.status(200).json({
            message:"contact fetched successfully" ,
            contactData:contacts
        })
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
})

// Update a contact list

router.put("/update/:id",async(req,res)=>{
    const id = req.params.id;
    const contactObjs ={
        contactName : req.body.cname,
        contactEmail : req.body.cemail,
        contactPhone : req.body.cphone,
        contactType : req.body.ctype
    }
    try {
        const updatedcontact = await contact.findByIdAndUpdate(id,{$set:contactObjs},{useFindAndModify: false});
        if(updatedcontact!=null){
            res.status(200).json({
                message:"contact updated successfully",
                updatedcontact:updatedcontact
            })
        }else{
            res.status(400).json({
                message:"contact did'nt updated successfully/ID not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }  
})

// Delete a contact list

router.delete('/delete/:id',async(req, res)=>{
    const id = req.params.id;
    try {
        const deletedContact = await contact.findByIdAndDelete(id);
        if(deletedContact==null){
            res.status(400).json({
                message:"contact did'nt deleted  successfully/ID not found"
            })
        }else{
            res.status(200).json({
                message:"contact deleted successfully",
                deletedContact:deletedContact
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
})

// Delete by mail a contact list

router.delete('/deleteBymail/:email',async(req, res)=>{
    const email = req.params.email;
    try {
        const deletedContact = await contact.findOneAndDelete(email);
        if(deletedContact==null){
            res.status(400).json({
                message:"contact did'nt deleted  successfully/ID not found"
            })
        }else{
            res.status(200).json({
                message:"contact deleted successfully",
                deletedContact:deletedContact
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
})

// update by email

router.put("/updateBymail/:email",async(req,res)=>{
    const Email = req.params.email;
    const contactObjs ={
        contactName : req.body.cname,
        contactEmail : req.body.cemail,
        contactPhone : req.body.cphone,
        contactType : req.body.ctype
    }
    try {
        const updatedcontact = await contact.findOneAndUpdate(Email,{$set:contactObjs},{useFindAndModify: false});
        if(updatedcontact!=null){
            res.status(200).json({
                message:"contact updated successfully",
                updatedcontact:updatedcontact
            })
        }else{
            res.status(400).json({
                message:"contact did'nt updated successfully/ID not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }  
})



module.exports=router;