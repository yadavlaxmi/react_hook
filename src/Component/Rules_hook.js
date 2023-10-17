import React,{useState} from "react"
const Rules_hook=()=>{
    const[myName,setMyName]=useState("Toggle")
   return(
   <div>
        <h1> {myName}</h1>
   </div>
   ) 
}
export default Rules_hook