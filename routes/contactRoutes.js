//importing express
const router = require('express').Router();


//importing the file manually
const contactController = require('../controllers/contactController');




// app.get('/test', (req, res) => {

//   res.send("Test API is working!....")
// }) 



//api created
router.post('/add',contactController.createContact)

//exporting
module.exports = router
