import React from 'react'
import { useContext } from 'react'
//import { useState } from 'react'
import { TodoContext } from '../../context/Context'
import '../styles/navbar.css'
const Navbar = () => {
   
    let {handleChange,handleLog}=useContext(TodoContext)
   
  return (
   <div className='main'>
    <div className="first">
    <h1>Noukri  </h1>
    <h1 className='walla'>Wallah</h1>
    </div>
    <div className='second'>
        <div>Internship
            <select  >
                <option value=""></option>
            </select>
        </div>
        <div>Certification Course
            <select  >
                <option value=""></option>
            </select>
        </div>
        <div>jobs
            <select  >
                <option value=""></option>
            </select>
        </div>
        <div >
            <button className='login' onClick={()=>{handleLog()}}>Login</button>
        </div>
        <div>
            <button className='reg' onClick={()=>{handleChange()}} >Register
               
            </button>
        </div>
    </div>


    
   </div>
  )
}

export default Navbar