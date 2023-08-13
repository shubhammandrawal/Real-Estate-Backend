const catchAsync = require("../Middlewares/catchAsync");
const basicInfoSchema = require("../Models/property-details/basic-info-schema");


exports.createBasicInfo = catchAsync(async (req, res, next) => {
    const basicInfo = await basicInfoSchema.create(req.body)

    res.status(201).json({
        success: true,
        basicInfo
    })
});