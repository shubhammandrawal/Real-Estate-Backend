const express = require("express");
const { createBasicInfo, createPropertyDetails, createGeneralInfo, createLocationInfo } = require("../Controllers/PropertyInfoHandler");
const router = express.Router();


router.route("/basicinfo").post(createBasicInfo)
router.route("/propertyinfo").post(createPropertyDetails)
router.route("/generalInfo").post(createGeneralInfo)
router.route("/locationInfo").post(createLocationInfo)

module.exports = router;
    