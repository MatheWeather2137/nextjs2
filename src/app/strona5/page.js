"use client"
import { useState } from "react"
export default function Strona5(){
    const [items,setItems] = useState([""])
    const [input,setInput] = useState("")

    const dodaj = () =>{
        setItems([...items,input])
        setInput("")
    }
    return(
        <div className="flex flex-col justify-center items-center h-screen w-full">
            <input className="text-black" type="text" value={input} onChange={(e)=> setInput(e.target.value)}></input>
            <button onClick={dodaj}>Dodaj</button>
            <ul>
                {
                items.map((item,idx)=>
                <li key={idx}>{item}</li>
                )
                
                }
            </ul>
        </div>
    )
}