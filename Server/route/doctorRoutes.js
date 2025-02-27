const express = require("express")
 const route = express.Router()
 const DoctorController = require("../controller/doctorController")

 route.post("/resgistration",DoctorController.Doctorregistration)
 route.get("/homedoctordisplay",DoctorController.Doctorhomedisplay)
 route.post("/doctorlogin",DoctorController.Doctorlogin)
 route.post("/searchdoctor",DoctorController.Doctorsearch)
 route.get("/patientlist", DoctorController.patientlist);


 module.exports=route