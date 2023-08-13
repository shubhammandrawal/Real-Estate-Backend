const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDatabase = require("./database/db");

const app = express()

connectDatabase();
app.use(express.json())

const basicInfo = require("./Routes/Addproperty")

app.use("/api/v1", basicInfo)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})
