const mongoose = require("mongoose");
const patientSchema= new mongoose.Schema({ 
     name:String,
     disease:String, 
     city:String,
     mobile:String,
     email:String,
     doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor"
     }
})

module.exports = mongoose.model("patient", patientSchema);