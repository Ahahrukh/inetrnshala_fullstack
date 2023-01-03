import React from 'react'
import { useState } from 'react'
import '../styles/admin.css'
const CreateJobs = () => {
    const [n,setn]=useState("")
  const [p,setp]=useState("")
  const [l,setl]=useState("")
  const [pack,setpack]=useState("")
  const [t,sett]=useState("")
  const [d,setd]=useState("")
   function handleSubmitt(e){
    e.preventDefault()
    let data={
      name:n,
      profile:p,
      location:l,
      package:pack,
      tech:t,
      description:d,
      owner_name: localStorage.getItem("name")
    }
   // console.log(data)
    fetch('http://localhost:4000/admin/create', {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
          console.log('Success:', data);
          alert("Created succesfully")
           
      })
     
   }
  
  return (
    <div>
        <div className='sain'>
           <h1 >Create Jobs</h1>
            <form onSubmit={(e)=>{handleSubmitt(e)}}>
              <input type="text" placeholder='Enter Company Name' value={n} onChange={(e)=>setn(e.target.value)} />
              <input type="text" placeholder='Enter Profile' value={p} onChange={(e)=>setp(e.target.value)}/>
              <input type="text" placeholder='Enter Location' value={l} onChange={(e)=>setl(e.target.value)}/>
              <input type="text" placeholder='Package providing' value={pack} onChange={(e)=>setpack(e.target.value)}/>
              <input type="text" placeholder='Required skills' value={t} onChange={(e)=>sett(e.target.value)}/>
              <input type="text" placeholder='Description' value={d} onChange={(e)=>setd(e.target.value)}/>
              <button type='submit'>Submit</button>
            </form>
         </div>
    </div>
  )
}

export default CreateJobs