
// importing the packages (package name=express)
const express = require('express');
const mongoose = require('mongoose');





// creating an express app (using it)
const app = express();


//Express json config

app.use(express.json());




// connecting to database

mongoose.connect('mongodb://localhost:27017/user_db').then(() => {
console.log("Database connected!") 

})





// defining the port
const PORT= 5000;


// starting the server
app.listen(PORT, ()=>{

    //message
  console.log( `Server is running on port ${PORT}!` )

})



app.get('/test', (req, res)=>{

    res.send("Test API is working!....")
}) 
