const mongoose=require('mongoose')

const resumeSchema=new mongoose.Schema({
    resume:String
})

const resumeModel=mongoose.model("resum",resumeSchema)

module.exports=resumeModel