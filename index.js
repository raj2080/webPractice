
// importing the packages (package name=express)
const express = require('express');
const mongoose = require('mongoose');

//importing the module
const connectDatabase = require('./database/database');

//importing dotenv package
const dotenv = require ('dotenv')






// creating an express app (using it)
const app = express();


//Express json config

app.use(express.json());




//dotenv configuration
dotenv.config()


// connecting to database
//using the module
connectDatabase()







//configuring routes of contact
app.use('/api/newcontact',require('./routes/contactRoutes'))
// developed api :::::::>>>>>  http://localhost:5000/api/newcontact/add


app.use('/api',require('./routes/reserveRoutes'))
// developed api :::::::>>>>>  http://localhost:5000/api/reserve




// defining the port
const PORT = process.env.PORT;


// starting the server
app.listen(PORT, () => {

  //message
  console.log(`Server is running on port ${PORT}!`)

})




