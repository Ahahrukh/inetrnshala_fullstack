import { useState } from "react";
import { createContext } from "react";

export const TodoContext=createContext();

export const TodoContextProvider=({children})=>{
    const [tag,setTag]=useState(false)
    const [log,setLog]=useState(false)
    const handleChange=()=>{
        setTag(!tag)
        setLog(false)
    }
    const handleLog=()=>{
        setLog(!log)
        setTag(false)
    }
    return(
        <TodoContext.Provider value={{tag,handleChange,log,handleLog}}>
           {children}
        </TodoContext.Provider>
    )
}