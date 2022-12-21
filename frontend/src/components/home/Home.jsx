import React from 'react'
import Navbar from './Navbar'
import Part2 from './Part2'
import Part3 from './Part3'
import './navbar.css'
import Part4 from './Part4'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Part2/>
        <div className='section1'>
          <h2>Jobs</h2>
          <p>Apply here 10000+ Jobs</p>
          
        </div>
            <Part3/>
            <Part4/>
        
    </div>
  )
}

export default Home