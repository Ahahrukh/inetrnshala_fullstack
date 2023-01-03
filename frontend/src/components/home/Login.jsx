import React from 'react'
import './Part2.css'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Student from '../student/Student'
const Login = () => {
 
    
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    let navigate=useNavigate()
    const handleSubmitt=(e)=>{
        e.preventDefault()
       let data={
        
        
        email:email,
        password:pass
       }
       fetch('http://localhost:4000/user/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            localStorage.setItem("token",data.token)
             localStorage.setItem("role",data.role)
             localStorage.setItem("name",data.name)
            if(data){
              alert("login succesfully")
            }else{
              alert("Something wrong")
            }
            if(data.role==="student"){
              navigate("/student")
            }else if(data.role==="admin"){
              navigate("/admin")
            }
        })
    }
    
  return (
    <div>
        <div className='togin'>
          
          <form  onSubmit={(e)=>{handleSubmitt(e)}}>
           
            <input type="text" placeholder='Enter Your Name'  />
            <input type="text" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" placeholder='Enter Your Password' onChange={(e)=>setpass(e.target.value)}/>
            <button type='submit'>Login</button>
          </form>
          <a href="https://cccc.com">If You are not registered</a>
      </div>
      
    </div>
  )
}

export default Login