//importing the model
const contactModel = require('../models/contactModel')


//creating a function

const createContact = async (req, res) => {

    //1. check incoming data
    console.log(req.body);

    //2. Destructure the incomming data .. for holding data temporary
    const { Name, Phonenumber, Email } = req.body;

    //3. validate the data

    if (!Name || !Phonenumber || !Email) {


        return res.json({
            "success": false,
            "message": "please enter all fields"
        })


    }
    
    
    // console.log(Phonenumber)

    if (Phonenumber.length !== 10 ) {
        return res.json({
            "success": false,
            "message": "please, provide valid phonenumber"
        })
    }

    

    try {

        

        // check whether contact exist or not --> verification .. phonenumber
        const existingContact = await contactModel.findOne({ phonenumber: Phonenumber })

        // if contact found
        if (existingContact) {
            return res.json(
                {
                    "status": false,
                    "message": "Contact already exist"
                }
            )
        }

        // if contact already found then program stops at here !!!!
        // if not then continue to forward and 

        //if contact is new
        const newContact = new contactModel({
            //    database fields : client's fields (destructure)
            name: Name,
            phonenumber: Phonenumber,
            email: Email

        })

        //save to the database
        await newContact.save()

        // send successful response
        res.json({
            "success": true,
            "message": "new contact added successfully"
        })

    } catch (error) {
        console.log(error)
        res.json({
            "success": false,
            "message": "Sorry! please try again later"
        })
    }







}


//exporting
module.exports = {
    createContact
}