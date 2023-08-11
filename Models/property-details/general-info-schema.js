const mongoose = require("mongoose");

const GeneralInfoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    postedby:{
        type: String,
        enum: ["dealer", "owner"]
    },

    featuredPackage:{
        type: String
    },

    mobile: {
        type: Number,
        required: true
    },

    sale:{
        type: String,
        required: true
    },

    ppd: {
        type: String,
    },

    image: {
        url: {
            type: String,
            required: true
        }
    }
}, {timestamps: true})

module.exports = mongoose.model("genaralInfo", GeneralInfoSchema)