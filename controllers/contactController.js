//importing the model
const contactModel = require('../models/contactModel')


//creating a function

const createContact = async(req, res) => {

    //1. check incoming data
    console.log(req.body);

    //2. Destructure the incomming data
    const {name, phonenumber,email} = req.body;

    //3. validate the data

    if (!name || !phonenumber || !email){

          
       res.send("please enter all fields")
        

    }








}


//exporting
module.exports = {
    createContact
}