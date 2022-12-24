import React from 'react'
import './Part2.css'
const Login = () => {
  return (
    <div>
        <div className='togin'>
          
          <form  method="post">
           
            <input type="text" placeholder='Enter Your Name'/>
            <input type="text" placeholder='Enter Your Email'/>
            <input type="password" placeholder='Enter Your Password'/>
            <button type='submit'>Login</button>
          </form>
          <a href="https://cccc.com">If You are not registered</a>
      </div>
    </div>
  )
}

export default Login