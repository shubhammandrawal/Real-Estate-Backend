const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDatabase = require("./database/db");

const app = express()

connectDatabase();
app.use(express.json())

const basicInfo = require("./Routes/Addproperty")
const propertDetails = require("./Routes/Addproperty")
const generalInfo = require("./Routes/Addproperty")
const locationInfo = require("./Routes/Addproperty")

app.use("/api/v1", basicInfo)
app.use("/api/v1", propertDetails)
app.use("/api/v1", generalInfo)
app.use("/api/v1", locationInfo)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})
