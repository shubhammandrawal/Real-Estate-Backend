const catchAsync = require("../Middlewares/catchAsync");
const basicInfoSchema = require("../Models/property-details/basic-info-schema");
const generalInfoSchema = require("../Models/property-details/general-info-schema");
const locationInfoSchema = require("../Models/property-details/location-info-schema");
const propertyDetailsSchema = require("../Models/property-details/property-details-schema");


//POST api for basicInfo 
exports.createBasicInfo = catchAsync(async (req, res, next) => {
    const basicInfo = await basicInfoSchema.create(req.body)

    res.status(201).json({
        success: true,
        basicInfo
    })
});

//POST api for propertyDetails 
exports.createPropertyDetails = catchAsync(async (req, res, next) => {
    const propertyDetails = await propertyDetailsSchema.create(req.body)

    res.status(201).json({
        success: true,
        propertyDetails
    })
});

//POST api for generalInfo 
exports.createGeneralInfo = catchAsync(async (req, res, next) => {
    const generalInfo = await generalInfoSchema.create(req.body)

    res.status(201).json({
        success: true,
        generalInfo
    })
});

//POST api for location 
exports.createLocationInfo = catchAsync(async (req, res, next) => {
    const locationInfo = await locationInfoSchema.create(req.body)

    res.status(201).json({
        success: true,
        locationInfo
    })
});