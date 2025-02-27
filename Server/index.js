const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const DoctorRoute = require("./route/doctorRoutes")
const PatientRoute = require("./route/PatientRoutes")
const mongoose= require("mongoose");
require("dotenv").config();

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!!");
})



app.use("/doctor",DoctorRoute)
app.use("/patient",PatientRoute)



const Port=process.env.PORT || 8000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})