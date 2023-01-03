import React from 'react'
import { useContext } from 'react'


import { useState } from 'react'
import { TodoContext } from '../../context/Context'
import Navbar2 from '../home/Navbar2'
import AdminJobs from './AdminJobs'
import CreateJobs from './CreateJobs'


const Admin = () => {
  let {create,adminjob}=useContext(TodoContext)
  
   
  return (
    <div>
       <div>
        <Navbar2/>
         {create?<CreateJobs/>:<AdminJobs/>}
       </div>
    </div>
  )
}

export default Admin