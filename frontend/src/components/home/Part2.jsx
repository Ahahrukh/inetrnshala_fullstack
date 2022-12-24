import React, { useContext } from 'react'


import { useState } from 'react'
import { TodoContext } from '../../context/Context'
import Login from './Login'
import './Part2.css'
import Signup from './Signup'
const Part2 = () => {
  var {tag,log}=useContext(TodoContext)
  let [i,seti]=useState(0)
   

  const imag=[
    
      "https://internshala.com/static/images/home/specializations/fsd.png"
    ,
      "https://internshala.com/static/images/home/specializations/ds.png"
    , 
      "https://internshala.com/static/images/home/specializations/hrm.png"
    , 
      "https://internshala.com/static/images/home/specializations/dm.png"
    , 
      "https://internshala.com/static/images/home/specializations/ui.png"
    
  ]


  
   var inrt= setInterval(()=>{
       incriment()
    },2000)
  
  
  function incriment(){
    if(i<4){
      seti(i+1)
    }else if(i===4){
      seti(i=0)
    }
    clearInterval(inrt)
  }
  function decriment(){
    if(i>0){
      seti(i-1)
    }else{
      seti(i=4)
    }
    clearInterval(inrt)
  }
 let x="<",y=">"
  return (
    <div className='my'>
        <div className='find'>
            <input type="text" className='search' placeholder='What are you looking for?'/>
            <button >Find</button>
        </div>
        <div className='slide'>
            {/* <img src="https://internshala.com/static/images/home/specializations/fsd.png" alt="" /> */}
           
                <img src={imag[i]} alt="" />
                
              
           
            
        </div>
        {tag?<Signup/>
            :<div className='jogin'>niklo</div>}
            
        {log?<Login/>:<div className='jogin'>niklo</div>}
        <div className="buttin">
                <div><button onClick={()=>
                   decriment()
                }>{x}</button></div>
                <div><button onClick={()=>
                   incriment()
                  }> {y} </button></div>
        </div>
    </div>
  )
}

export default Part2