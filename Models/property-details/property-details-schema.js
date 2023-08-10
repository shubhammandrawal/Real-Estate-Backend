const mongoose = require("mongoose");

const PropertyDetailsSchema = new mongoose.Schema({
    length: {
        type: Number,
        required: true
    },

    breath: {
        type: Number,
        required: true
    },

    totalArea: {
        type: Number,
        required: true
    },

    areaUnit: {
        type: String,
        required: true
    },

    BHK: {
        type: Number
    },

    floor: {
        type: Number
    },

    attached: {
        type: String,
        enum: ["yes", "no"]
    },

    westernToilet: {
        type: String,
        enum: ["yes", "no"]
    },

    furnished: {
        type: String,
        enum: ["yes", "no"]
    },

    carParking: {
        type: String,
        enum: ["yes", "no"]
    },

    lift: {
        type: String,
        enum: ["yes", "no"]
    },

    electricity: {
        type: String,
    },

    facing: {
        type: String,
        enum: ["east", "west", "north", "south"]
    }
})

module.exports = mongoose.model("proteryDeatils", PropertyDetailsSchema)