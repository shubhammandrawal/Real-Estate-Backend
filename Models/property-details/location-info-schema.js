const mongoose = require("mongoose");

const LocationInfoSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },

    area:{
        type: String,
    },

    address: {
        type: String
    },

    latitude: {
        type: String
    },

    city: {
        type: String,
        enum: ["mumbai", "bangalore", "Delhi", "Gurgaon", "Noida", "Dehradun"]
    },

    pincode: {
        type: Number
    },

    landmark: {
        type: String
    },

    longitude: {
        type: String
    },

    property_info: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genaralInfo"
    }
})

module.exports = mongoose.model("locationInfo", LocationInfoSchema)