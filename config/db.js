const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


const connectDB = async () =>
{
    try {
        await mongoose.connect(process.env.MONGO_URI)
      console.log("mongoDB is connected!")   
    } catch (error) {
      console.log("there is an error in connection!",error)
      process.exit(1)
    }
}

module.exports = connectDB


