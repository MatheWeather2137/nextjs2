"use client"
import { useState } from "react"
export default function Strona4(){
    const [bgcolor,setBgcolor] = useState("bg-black")
    const [input,setInput] = useState("")

    const changeColor = () =>{
        setBgcolor(input)
    }

    return(
        <div className={`flex justify-center items-center h-screen w-full ${bgcolor}`}>
        <input type="text" onChange={(e)=> setInput(e.target.value)}></input>
        <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
