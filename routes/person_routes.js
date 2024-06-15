const express = require('express');
const person = require('../models/person');
const router = express.Router();   //router ko hamne express.router() function mai daala hai 

router.post('/', async (req, res) => {
    try {
      const data = req.body; // Assuming the request body contains the person data 
  
      // Create a new person document using the mongoose model
      const newPerson = new person(data);
      
      // Save the new person to the database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: 'Internal server error' });
    }
  });
  
  
  
  router.post('/', async (req, res) => {
    try {
      const data = req.body; // Assuming the request body contains the person data 
  
      // Create a new person document using the mongoose model
      const newPerson = new person(data);
      
      // Save the new person to the database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: 'Internal server error' });
    }
  });
  router.get('/:worktype', async (req, res) => {
    try {
      const worktype = req.params.worktype; // This params is used for parameter and this const worktype is used to fetch the '/person/:worktype'
      if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
        const response = await person.find({ work: worktype });
        console.log('response fetched');
        res.status(200).json(response);
      }   
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: 'Bekaar hai bhai mai toot gaya ' });
    }
  });
  
router.put('/:id',async(req,res)=>{
    try{
          const personId = req.params.id;   //extract the id from the url parameter
          const updatedpersondata = req.body;  //Updated data for the Person

          const response = await person.findByIdAndUpdate(personId,updatedpersondata,{
            mew:true,            //return the updated document
            runValidators:true,    //Run Mongoose validation 
          });  //YE JO .FINDBYIDAND UPDATE HAI WOH EK FUNCTION HAI MONGODB DETA HAI FIND KARNE K LIYE ID 
         
           
          if(!response){
            return res.status(404).json({error:'person not found'});    //agar objectid galat hai toh 
          }
           

          console.log('data updated');
          res.status(200).json(response);
    }catch(err){
          console.log(err);
          res.status(500).json({error:'Internal server error'});
    }
})


  module.exports=router;

