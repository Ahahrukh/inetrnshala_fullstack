const express=require('express')
const jobRouter=express.Router()
const jobModel=require('../models/jobs.model')

jobRouter.post("/create",async(req,res)=>{
    let jobmodel=new jobModel({...req.body})
    await jobmodel.save();
    res.send(jobmodel)
})

module.exports=jobRouter