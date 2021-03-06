const express = require('express');
const router =express.Router();
const xauth = require("../middleware/auth");
const contactController=require('../controllers/contact.controller');
const multer  = require('multer');
var upload = multer({ dest: 'uploads/' })
// Get the contacts from the database

router.get('/',contactController.getContact);

// Add new contacts to the database

router.post("/add",xauth,contactController.addContact);

// Update a contact list by id

router.put("/update/:id",xauth,contactController.updateById);

// Delete a contact list by id

router.delete('/delete/:id',xauth,contactController.deleteById)

// Delete by mail a contact list

router.delete('/deleteBymail/:email',contactController.deleteByMail)

// update by email a contact list

router.put("/updateBymail/:email",contactController.updateByMail)

// get specific contact details

router.get('/:contactId',xauth,contactController.getUserContact);

router.get("/contactById/:contactId",xauth,contactController.getContactById);

// image upload using multer

router.post('/upload',upload.single('imagefile'),(req,res)=>{
    res.status(200).json({
        details:req.file
    })
})
module.exports=router;