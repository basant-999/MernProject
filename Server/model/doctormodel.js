const mongoose = require("mongoose");
const doctorSchema= new mongoose.Schema({ 
     name:String,
     address:String, 
     city:String,
     mobile:String,
     specailization:String,
     email:String,
     password: String
})

module.exports = mongoose.model("doctor", doctorSchema);