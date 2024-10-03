"use client"
import { useState } from "react"

export default function Strona1(){
    const [licznik, setLicznik] = useState(0)

    const plus = () =>{
        setLicznik(licznik + 1)
    }
    const minus = () =>{
        setLicznik(licznik - 1)
    }

    return(
        <>
        <h1>{licznik}</h1>
        <button onClick={plus}>Dodaj 1</button>
        <br/>
        <button onClick={minus}>Odejmij 1</button>
        </>
    )

}