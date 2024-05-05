const mongoose = require('mongoose')


const reserveSchema = new mongoose.Schema({



    userId:{
        type: Number, 
        required: true
    },
    eventDate:{
        type : Date,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    }



})

const Reserve = mongoose.model('reserve', reserveSchema)
module.exports = Reserve;