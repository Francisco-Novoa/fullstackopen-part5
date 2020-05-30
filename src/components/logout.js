import React from "react"

export default function Logout ({setUser}){
    const handleButton = (  )=>{
        localStorage.removeItem("credencials")
        setUser("")
    }
    return(
        <>
        <button 
            className="button"
            onClick={()=>{handleButton()}} >
            Logout
        </button>
        </>
    )
}