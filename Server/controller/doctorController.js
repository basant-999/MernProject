
const DoctorModel = require("../model/doctormodel");
const Patientmodel = require("../model/Patientmodel");
const Doctorregistration=async(req,res)=>{
    
    const {name,address, city, mobile,speciality,email, password} = req.body; 
    try {
        const Doctor = await DoctorModel.create({
            name:name,
            address:address, 
            city:city,
            mobile:mobile,
            specailization:speciality,
            email:email,
            password:password 
        })

        res.status(201).send({msg:"Doctor Succesfully Registered!"});
    } catch (error) {
           res.status(400).send({msg:"Data base not Work"})
    }

}




const Doctorhomedisplay =async(req,res)=>{
   
    try {
        
    const Doctor = await DoctorModel.find()
    res.status(200).send(Doctor)
    } catch (error) {
        console.log(error)
        
    }

}

const Doctorlogin=async(req,res)=>{
  
    const {email,password} = req.body
    
    try {
        const doctor = await DoctorModel.findOne({email:email})
    console.log(doctor)
        if(!doctor)
            {
               res.status(400).send({msg:"invali Email"})
            }
            if(doctor.password!=password){
                res.status(400).send({msg:"invali password"})
            }

            res.status(200).send(doctor)
        
    } catch (error) {
        console.log(error)
    }

}

const Doctorsearch=async(req,res)=>{
    const { name, speciality}=req.body;
   
    const Doctor = await DoctorModel.find({$or:[{"name":name}, {"specailization":speciality}]})
    console.log(Doctor);
    res.status(200).send(Doctor);
}

const patientlist =async(req,res)=>{
    const {docid} = req.query;
    const Pateint = await  Patientmodel.find({doctorId:docid})
     res.status(200).send(Pateint);
}


module.exports={
    Doctorregistration,
    Doctorhomedisplay,
    Doctorlogin,
    Doctorsearch,
    patientlist
}