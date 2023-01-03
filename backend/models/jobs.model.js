const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    name:String,
    profile:String,
    location:String,
    package:String,
    tech:String,
    description:String,
    owner_name:String

})
const jobModel=mongoose.model("admin",jobSchema)

module.exports=jobModel