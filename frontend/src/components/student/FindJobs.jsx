import React from 'react'
import { useEffect ,useState} from 'react'

const FindJobs = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
         try {
            let res=await fetch(`http://localhost:4000/admin/alljobs`,{
                method:"GET",
                headers:{
                  'Authorization':`Bearer ${localStorage.getItem("token")}`
                }
              })
            
            let ata=await res.json()
            setData([...ata])
            console.log(ata)
         } catch (error) {
            console.log(error)
         }
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
                {/* <button onClick={()=>handleDelete(elem._id)}>Delete</button> */}
              </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default FindJobs