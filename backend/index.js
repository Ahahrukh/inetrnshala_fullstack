const express=require('express')
const app=express()
const cors=require('cors')
const connection=require('./config/connection')
const userRouter=require('./routes/user.route')
const jobRouter=require("./routes/job.route")
const myjobRouter = require('./routes/student.route')
const resumeRouter = require('./routes/resume.route')
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use("/user",userRouter)
app.use("/admin",jobRouter)
app.use("/myjob",myjobRouter)
app.use("/user_up",resumeRouter)
app.use('/user_up', express.static('./resume'));

app.listen(4000,async()=>{
    try{
      await connection
      console.log("connected to data base")
    }catch(err){
        console.log(err)
    }
    console.log("connect to port 4000")
})


