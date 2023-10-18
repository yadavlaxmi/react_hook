import React,{useEffect} from "react" 
const Use_effect=()=>{
    useEffect(()=>{
        console.log("hello useeffect")
    })
    console.log("hello outside")
    return(
        <div>
        <h1>
         hello Use_effect
        </h1>
        </div>
    )
}
export default Use_effect