//importing mongoose package

const mongoose = require('mongoose')




// creating a arrow function
const connectDatabase = () => {
  
   mongoose.connect(process.env.MONGODB_LOCAL).then(() => {
    console.log("Database connected!") 
    
    })
    
}



// exporting the function
module.exports = connectDatabase;