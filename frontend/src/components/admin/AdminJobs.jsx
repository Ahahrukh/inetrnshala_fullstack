import React from 'react'
import { useEffect } from 'react'
const AdminJobs = () => {
    useEffect(()=>{
        async function getData(){
          try {
            let res=await fetch(`http://localhost:4000/admin/jobs/${localStorage.getItem("name")}`,{
              method:"GET",
              headers:{
                'Authorization':`Bearer ${localStorage.getItem("token")}`
              }
            })
            let data=await res.json()
            console.log(data)
          } catch (error) {
            console.log(error)
          }
        }
        getData()
       },[])
  return (
    <div>
        
    </div>
  )
}

export default AdminJobs