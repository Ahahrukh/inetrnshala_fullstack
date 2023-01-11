import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar2 from '../home/Navbar2'
import FindJobs from './FindJobs'

const Student = () => {
  const [data,setData]=useState([])

 
  return (
    <div>
      <div>
        <Navbar2/>
        <FindJobs/>
        <div>
          data
        </div>
      </div>
    </div>
  )
}

export default Student