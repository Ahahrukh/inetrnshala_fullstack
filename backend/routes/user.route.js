const express=require('express')
const userModel=require('../models/user.model')
const userRouter=express.Router();
const jwt=require('jsonwebtoken')
userRouter.post("/register",async (req,res)=>{
    const {role,name,email,password}=req.body
    const newuser=new userModel({role,name,email,password})
    await newuser.save()
    console.log("registerd")
    res.send({"message":newuser})
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const x=await userModel.findOne({email})
     if(x.password===password){
        var t = jwt.sign({ email: x.email}, 'shhhhh');
        res.send({"token":t,"role":x.role,"name":x.name})
        // console.log(x)
        // console.log(x.password)
     }
     

})

module.exports=userRouter