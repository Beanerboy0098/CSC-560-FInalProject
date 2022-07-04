const express = require('express');
const router = express.Router();

const Systems = require('../models/Systems');

//Get all Systems in the database
router.get('/getSystems', async (req, res) => {
    const systems = await Systems.find({});
    try {
       res.send(systems);
     } catch (error) {
       res.status(500).send(error);
     }
 })




//Add a System to the database
router.post('/addSystems', async (req, res) => {
    var newsystem = new Systems({
        Name: req.body.Name,
        Architecture: req.body.Architecture,
	  Release_Date: req.body.Release_Date,
	  Launch_Titles: req.body.Launch_Titles,
	  Media: req.body.Media,
	  Type: req.body.Type

    })
    newsystem.save((err, Systems) => {
        if(err){
            res.json({msg: 'Failed to add player'});
        }
        else{
            res.json({msg: 'Player added successfully'});
        }
    })
 })

//Delete a System from the database
 router.delete('/deletesystem/:id', async (req, res) => {

    await Systems.deleteOne({"_id": req.params.id})
       .then(result => {
          if(result.deletedCount === 0){
            res.json({msg: 'No record was deleted'});
          }
          else{
            res.json({msg: 'System successfully deleted'});
          }
       })
       .catch(error => res.json(error))
 })

 router.put('/updatesystem/:id', async (req, res) => {

    
  
   await Systems.updateMany({"_id": req.params.id},
   {
       
       $set: req.body
   })
   .then(results => {
       res.json({msg: 'Player Updated Successfully'});
   }) 
   .catch(error => res.json(error));
})

	

//Get System with the least number of Launch Titles
router.get('/lowestlaunchtitles', async (req, res) => {
    await Systems.find().sort({"Launch_Titles":1}).limit(1)
       .then(results => {
          res.json(results);
       })
       .catch(error => console.error(error))
 })
//Get System with the order of Launch Titles from greatest to smallest
router.get('/mostlaunchtitles', async (req, res) => {
     await Systems.find().sort({"Launch_Titles":-1})
       .then(results => {
          res.json(results);
       })
       .catch(error => console.error(error))
 })



module.exports = router;
