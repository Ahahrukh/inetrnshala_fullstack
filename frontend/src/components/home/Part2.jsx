import React from 'react'
import './Part2.css'
const Part2 = () => {
  return (
    <div>
        <div className='find'>
            <input type="text" className='search' placeholder='What are you looking for?'/>
            <button >Find</button>
        </div>
        <div className='slide'>
          <img src="slider/dm.jpg" alt="img" />
        </div>
    </div>
  )
}

export default Part2