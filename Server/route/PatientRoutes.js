const express = require("express");
const route = express.Router();
const PatientController = require("../controller/PatientController")

route.get("/pateintappnt",PatientController.doctorDisplay)
route.post("/appntsave", PatientController.patientSave );


module.exports = route;