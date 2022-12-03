const express=require('express')
const app=express()
const connection=require('./config/connection')
const userRouter=require('./routes/user.route')
const jobRouter=require("./routes/job.route")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use("/user",userRouter)
app.use("/admin",jobRouter)
app.listen(4000,async()=>{
    try{
      await connection
      console.log("connected to data base")
    }catch(err){
        console.log(err)
    }
    console.log("connect to port 4000")
})


