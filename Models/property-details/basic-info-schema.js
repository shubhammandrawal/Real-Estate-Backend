const mongoose = require("mongoose");

const BasicInfoSchema = new mongoose.Schema({
    propertytype: {
        type: String,
        enum: ["house", "flat", "farmHouse", "penthouse"],
        // required: true
    },

    price: {
        type: Number,
        // required: true
    },

    propertyAge: {
        type: Number,
        // required: true
    },

    propertyDescription: {
        type: String,
        // required: true
    },

    Negotable: {
        type: String,
        enum: ["yes", "no"],
        default: "yes"
    },

    Ownership: {
        type: String,
        enum: ["owner", "rent"]
    },

    propertyApproved: {
        type: String,
        enum: ["yes", "no"],
        default: "yes"
    },

    bankLoan: {
        type: String,
        enum: ["yes", "no"]
    }
}, { timestamps: true })

module.exports = mongoose.model("basicInfo", BasicInfoSchema)