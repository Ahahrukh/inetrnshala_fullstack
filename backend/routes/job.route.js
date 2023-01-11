const express=require('express')
const authentication = require('../middleware/authentication')
const authorisation = require('../middleware/autherisation')
const jobRouter=express.Router()
const jobModel=require('../models/jobs.model')

jobRouter.post("/create",authentication,authorisation(["admin"]),async(req,res)=>{
    let jobmodel=new jobModel({...req.body})
    await jobmodel.save();
    res.send(jobmodel)
})
jobRouter.get("/jobs/:name",authentication,authorisation(["admin"]),async(req,res)=>{
    //let jobmodel=await jobModel.find()
    let {name}=req.params
    let jobmodel= await jobModel.find({owner_name:name})
    res.send(jobmodel)
    //console.log(req.params)
})
jobRouter.get("/alljobs",authentication,authorisation(["student"]),async(req,res)=>{
    let jobsall=await jobModel.find()
    res.send(jobsall)
})
jobRouter.delete("/delete/:id",authentication,authorisation(["admin"]),async(req,res)=>{
    let {id}=req.params
    let jobmodel=await jobModel.deleteOne({"_id":id})
    
    res.send({"res":jobmodel,"message":"Deleted"})
})

module.exports=jobRouter