const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    profile:String,
    location:String,
    package:String,
    tech:String,
    description:String

})
const jobModel=mongoose.model("admin",jobSchema)

module.exports=jobModel