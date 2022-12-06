const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    profile:String,
    location:String,
    package:String,
    tech:String,
    description:String

})
const myjobModel=mongoose.model("myjob",jobSchema)

module.exports=myjobModel