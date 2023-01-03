import { useState } from "react";
import { createContext } from "react";

export const TodoContext=createContext();

export const TodoContextProvider=({children})=>{
    const [adminjob,setjob]=useState(false)
    const [create,setCreate]=useState(false)
    const [tag,setTag]=useState(false)
    const [log,setLog]=useState(false)
    const handleAdminJob=()=>{
        setjob(!adminjob)
        setCreate(false)
    }
    function handleCreate(){
        setCreate(!create)
        setjob(false)
    }
    const handleChange=()=>{
        setTag(!tag)
        setLog(false)
    }
    const handleLog=()=>{
        setLog(!log)
        setTag(false)
    }
    return(
        <TodoContext.Provider value={{tag,handleChange,log,handleLog,handleAdminJob,adminjob,handleCreate,create}}>
           {children}
        </TodoContext.Provider>
    )
}