const express=require('express')
const jobRouter=express.Router()
const jobModel=require('../models/jobs.model')

jobRouter.post("/create",async(req,res)=>{
    let jobmodel=new jobModel({...req.body})
    await jobmodel.save();
    res.send(jobmodel)
})
jobRouter.get("/jobs",async(req,res)=>{
    //let jobmodel=await jobModel.find()
    let {location,tech,profile}=req.query
    let jobmodel= await jobModel.find({tech:tech}).find({location:location}).find({profile:profile})
    res.send(jobmodel)
    //console.log(req.query)
})
jobRouter.delete("/delete/:id",async(req,res)=>{
    let {id}=req.params
    let jobmodel=await jobModel.deleteOne({"_id":id})
    
    res.send({"res":jobmodel,"message":"Deleted"})
})

module.exports=jobRouter