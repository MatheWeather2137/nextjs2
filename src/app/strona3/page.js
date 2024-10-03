"use client"
import { useState } from "react"

export default function Strona3(){
    const [color,setColor] = useState("bg-red-900")

    const changeColor = () =>{
        setColor(color == "bg-red-900" ? "bg-blue-900" : "bg-red-900")
    }

    
    return(
        <div className={`flex justify-center items-center h-screen w-full ${color}`}>
        <button onClick={changeColor}>Change Color</button>
        </div>
    )
}