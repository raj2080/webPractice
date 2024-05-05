//importing express

const router = require('express').Router();


//importing the file manually
const reserveController = require('../controllers/reserveController');

//api
router.post('/reserve',reserveController.createReserve)

//exporting
module.exports = router;