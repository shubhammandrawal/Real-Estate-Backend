const express = require("express");
const { createBasicInfo } = require("../Controllers/PropertyInfoHandler");
const router = express.Router();


router.route("/basicInfo").post(createBasicInfo)

module.exports = router;
    