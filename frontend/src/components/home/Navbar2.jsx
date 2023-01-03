import React from 'react'
import { useContext } from 'react'
//import { useState } from 'react'
import { TodoContext } from '../../context/Context'
import './navbar2.css'
const Navbar2 = () => {
    let {handleChange,handleLog}=useContext(TodoContext)
  return (
    <div className='main'>
    <div className="first">
        
    </div>
    <div className='second'>
        <div><button className='reg'>All jobs</button>
            
        </div>
        
        <div><button className='reg'>Create jobs</button>
            
        </div>
        <div >
            <button className='login' >Logout</button>
        </div>
        <div>
            <button className='peg'  >{localStorage.getItem("name")[0]}
               
            </button>
        </div>
    </div>


    
   </div>
  )
}

export default Navbar2