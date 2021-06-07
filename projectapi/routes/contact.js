const express = require('express');
const router =express.Router();

const contactController=require('../controllers/contact.controller')
// Get the contacts from the database

router.get('/:userid',contactController.getContact);

// Add new contacts to the database

router.post("/add",contactController.addContact);

// Update a contact list by id

router.put("/update/:id",contactController.updateById);

// Delete a contact list by id

router.delete('/delete/:id',contactController.deleteById)

// Delete by mail a contact list

router.delete('/deleteBymail/:email',contactController.deleteByMail)

// update by email a contact list

router.put("/updateBymail/:email",contactController.updateByMail)



module.exports=router;