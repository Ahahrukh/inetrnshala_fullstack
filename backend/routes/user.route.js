const express=require('express')
const userModel=require('../models/user.model')
const userRouter=express.Router();
const jwt=require('jsonwebtoken')
userRouter.post("/register",async (req,res)=>{
    const {role,name,email,password}=req.body
    const newuser=new userModel({role,name,email,password})
    await newuser.save()
    console.log("registerd")
    res.send(newuser)
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const x=await userModel.find({email})
     if(x[0].password===password){
        var t = jwt.sign({ foo: 'bar' }, 'shhhhh');
        res.send({"token":t,"Role":x[0].role})
     }
     

})

module.exports=userRouter