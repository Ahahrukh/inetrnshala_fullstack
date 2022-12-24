import React from 'react'
import { useEffect } from 'react'

const Jobs = () => {
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        try {
            let res=await fetch()
            let data=await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>Jobs</div>
  )
}

export default Jobs