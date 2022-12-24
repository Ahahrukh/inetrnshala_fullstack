import React from 'react'
import './Part2.css'
const Signup = () => {
  return (
    <div>
        <div className='togin'>
          
          <form  method="post">
            <select className='shy'>
              <option value="student">__</option>
              <option value="student">As a Student</option>
              <option value="admin">As a Admin</option>
            </select>
            <input type="text" placeholder='Enter Your Name'/>
            <input type="text" placeholder='Enter Your Email'/>
            <input type="password" placeholder='Enter Your Password'/>
            <button type='submit'>Register</button>
          </form>
          <a href="https://cccc.com">If You are already registered <p>Above All fields are necesserry to fill</p> </a>
      </div>
    </div>
  )
}

export default Signup