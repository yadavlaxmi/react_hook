import React,{useState} from "react"
const Short_circuit=()=>{
    const[demo,setDemo]=useState("")

    return(
        <>
            <h1> hii short cuircuit page</h1>
            <h2> {demo || <>
            <h1> Hii</h1>
            <h2>Everyone</h2>
            </>} </h2>
            <h2>{demo && "govind"}</h2>

        </>
    )
}
export default Short_circuit