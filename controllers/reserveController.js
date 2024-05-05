
//importing the model
const reserveModel = require('../models/reserveModel')


const createReserve = async (req, res) => {

    //1. showing incoming data using postman from the body part using request
    console.log(req.body)

    //2. Destructure the incoming data
    const { Userid, Eventdate, Numberofguests } = req.body;


    //3.validate
    if (!Userid || !Eventdate || !Numberofguests) {
        return res.json({
            "success": false,
            "message": "please enter all fields"
        })



    }



    // const todaydate = new Date().toLocaleDateString();


    // const futuredate = new Date(Eventdate).toLocaleDateString();





    // const year = todaydate.getYear();
    // const month = todaydate.getMonth();
    // const day = todaydate.getDay();


    // console.log(year);
    // console.log(month);
    // console.log(day);




    // console.log(todaydate);
    // console.log(futuredate);



    const todaydate = new Date( );

    console.log(todaydate);

 
   const futuredate = new Date(Eventdate);

    console.log(futuredate);


    if (futuredate < todaydate) {

        

        return res.json({
            "success": false,
            "message": "Sorry, no events happening at this date"
        })
    }

    if (Numberofguests < 0) {
        return res.json({
            "success": false,
            "message": "number of guests should be 1 or more"
        })
    }

    //error handling

    try {
        const newReserve = new reserveModel({

            userId: Userid,
            eventDate: Eventdate,
            numberOfGuests: Numberofguests
        })

        await newReserve.save()

        res.json({
            "success": true,
            "message": "Reservation has been done"
        })


    } catch (error) {
        console.log(error)
        res.json({
            "success": false,
            "message": 'Sorry! please try after some minute'
        })
    }













}

module.exports = {

    createReserve
}
