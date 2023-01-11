import React from 'react'
import { useContext } from 'react'
//import { useState } from 'react'
import {Link} from 'react-router-dom'
import { TodoContext } from '../../context/Context'
import '../styles/navbar.css'
const Navbar2 = () => {
    
    let {handleCreate,handleAdminJob}=useContext(TodoContext)

    function handleLogout(){
        localStorage.clear()
        navigator("/")
    }
    var flag=localStorage.getItem("role")
  return (
    <div className='ain'>
    <div className="irst">
       <h1>Noukri  </h1>
       <h1 className='walla'>Wallah</h1>
    </div>
    <div className='econd'>
        <div>{flag=="admin"?<button className='ieg'c onClick={()=>handleAdminJob()} >All jobs</button>:
        
        <button className='ieg'c onClick={()=>handleAdminJob()} >Aplied jobs</button>}
            
        </div>
        
        <div>
            {flag=="admin"?<button className='ieg' onClick={()=>handleCreate()}>CreateJobs</button>:
            <button className='ieg' onClick={()=>handleCreate()}>Find jobs</button>}
        </div>
        <div >
            <button className='sogin' onClick={()=>handleLogout()} ><Link to="/">Logout</Link></button>
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