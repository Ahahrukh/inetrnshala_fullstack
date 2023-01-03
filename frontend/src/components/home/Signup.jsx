import React from 'react'
// import { useContext } from 'react'
import { useState } from 'react'
// import { TodoContext } from '../../context/Context'
import '../styles/Part2.css'
const Signup = () => {
   
    const [role,setrole]=useState("")
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const handleSubmitt=(e)=>{
        e.preventDefault()
       let data={
        role:role,
        name:name,
        email:email,
        password:pass
       }
       fetch('http://localhost:4000/user/register', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            alert("Registred succesfully")
             
        })
    }
  return (
    <div>
        <div className='togin'>
          
          <form  onSubmit={(e)=>{handleSubmitt(e)}}>
            <select className='shy' onChange={(e)=>setrole(e.target.value)}>
              <option value="student">__</option>
              <option value="student">As a Student</option>
              <option value="admin">As a Admin</option>
            </select>
            <input type="text" placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)}/>
            <input type="text" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" placeholder='Enter Your Password' onChange={(e)=>setpass(e.target.value)}/>
            <button type='submit'>Register</button>
          </form>
          <a href="https://cccc.com">If You are already registered <p>Above All fields are necesserry to fill</p> </a>
      </div>
    </div>
  )
}

export default Signup