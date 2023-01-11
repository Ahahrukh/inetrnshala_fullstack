import React from 'react'
import Navbar from './Navbar'
import Part2 from './Part2'
import Part3 from './Part3'
import '../styles/navbar.css'
import Part4 from './Part4'
import Navbar2 from './Navbar2'

const Home = () => {
  var flag=localStorage.getItem("role")
  return (
    <div>
        {/* {flag?<Navbar2/>:<Navbar/>} */}
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