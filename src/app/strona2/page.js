"use client"

import { useState } from "react"

export default function Strona2(){
    const [napis,setNapis] = useState("start")

    const zmien = () =>{
        if(napis=="start"){
            setNapis("stop")
        } else setNapis("start")
    }
    

    return(
        <>
        <h1>{napis}</h1>
        <button onClick={zmien}>zmien</button>
        </>
    )
}