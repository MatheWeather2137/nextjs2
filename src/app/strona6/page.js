"use client"
import Country from "@/components/country"
import { useState,useEffect } from "react"
export default function Strona6(){

    const [data,setData] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        const getData = async () =>
{        try{
            const response = await fetch("https://restcountries.com/v3.1/all")
            const dataJson = await response.json()
            setData(dataJson)
            console.log(dataJson)
        } catch(error){
            console.error("nie udało sie pobrać danych")
            setError(true)
        } finally{
            setLoading(false)
        }}
        getData()
    },[])

    return(
        <div className="flex flex-wrap gap-2 w-full h-screen justify-center">
            {/* <h1>{data && data[230].name.common}</h1> */}
            <p>{error && "Nie udało sie pobrać danych"}</p>
            <p>{loading && "Loading..."}</p>
            {
                data && data.map((kraj,idx)=>
                <Country key={idx} kraj={kraj}/>
                )
            }
        </div>
    )
}