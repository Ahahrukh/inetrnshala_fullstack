const express=require('express')
const multer=require('multer')
const authentication = require('../middleware/authentication')
const authorisation = require('../middleware/autherisation')
const resumeRouter=express.Router()
const resumeModel=require('../models/resume.model')
 
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"./resume")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+" "+Date.now() +".pdf")
        }
    })
}).single("user_resume")
 

resumeRouter.post("/upload",authentication,authorisation(["student"]),upload,async(req,res)=>{
      
    let resumemodel=new resumeModel({resume:`http://localhost:4000/user_up/${req.file.filename}`})

    await resumemodel.save()

    res.send({
        "status":"Sucusess",
        "link":`http://localhost:4000/user_up/${req.file.filename}`
    })
})

resumeRouter.get("/myresume",authentication,authorisation(["student","admin"]),async(req,res)=>{
    let resume=await resumeModel.find()

    res.send(resume)
})

resumeRouter.delete("/deresume/:id",authentication,authorisation(["student"]),async (req,res)=>{
      const {id}=req.params
      let item= await resumeModel.deleteOne({"_id":id})

      res.send({"res":item,"message":"Deleted"})

})

module.exports=resumeRouter

