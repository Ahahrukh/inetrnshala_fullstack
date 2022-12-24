import React from 'react'
import './Part2.css'
import { useState } from 'react'
const Login = () => {
 
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
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
            alert("login succesfully")
             
        })
    }
  return (
    <div>
        <div className='togin'>
          
          <form  onSubmit={(e)=>{handleSubmitt(e)}}>
           
            <input type="text" placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)}/>
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