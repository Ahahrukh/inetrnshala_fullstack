const express=require('express')
const authentication = require('../middleware/authentication')
const myjobRouter=express.Router()
const jobModel=require('../models/jobs.model')
const myjobModel = require('../models/myjob.model')

myjobRouter.post("/apply/:id",authentication,async(req,res)=>{
    let {id}=req.params
    let jobmodel=await jobModel.find({"_id":id})
    
    let {profile,location,package,tech,description}=jobmodel[0]
    let hg=await myjobModel.find({"_id":id})
    if(!hg){
        let myjobmodel= new myjobModel({profile,location,package,tech,description})
   
        await myjobmodel.save();
        return res.send(myjobmodel)
    }else{
        return res.send("Already applied")
    }
})



module.exports=myjobRouter