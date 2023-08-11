const mongoose = require("mongoose")
const dotenv = require("dotenv").config();

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URL, { family: 4 })
        .then(() => {
            console.log("Succesfully connected to database")
        }).catch(() => {
            console.log("Failed to connect to DB")
        })
}

module.exports = connectDatabase

