import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/admin.css'
const AdminJobs = () => {
  let [data,setData]=useState([])
    useEffect(()=>{
        async function getData(){
          try {
            let res=await fetch(`http://localhost:4000/admin/jobs/${localStorage.getItem("name")}`,{
              method:"GET",
              headers:{
                'Authorization':`Bearer ${localStorage.getItem("token")}`
              }
            })
            let deta=await res.json()
            console.log(deta)
            setData([...deta])
          } catch (error) {
            console.log(error)
          }
        }
        getData()
       },[])

       async function handleDelete(id){
        try {
          let res=await fetch(`http://localhost:4000/admin/delete/${id}`, {
            method: "DELETE",
            headers:{
              'Authorization':`Bearer ${localStorage.getItem("token")}`
            }
          });
          let data=await res.json()
          console.log(data)
          
        } catch (error) {
          console.log(error)
        }
        console.log(id)
       }

  return (
    <div>
        <div className='allJob'>
           {data.map((elem)=>(
            <div className='job'>
              <div>
              <h2>Company : {elem.name}</h2>
               <h3>Profile : {elem.profile}</h3>
               <p>Location : {elem.location}</p>
               <h3>Tech : {elem.tech}</h3>
               <p>Package : {elem.package}</p>
               <p>Description : {elem.description}</p>
              </div>
              <div>
                <button>Edit</button>
                <button onClick={()=>handleDelete(elem._id)}>Delete</button>
              </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default AdminJobs