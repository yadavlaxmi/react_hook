import React ,{useState,useEffect,useRef} from "react";
const Useref1=()=>{
    const[myData,setMyData]=useState("")
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setCount(count+1)
    })
    return(
        <>
        <input
        type="text"
        value={myData}
        onChange={(e)=>setMyData(e.target.value)}/>
        <p> This number of times render : {count}</p>
        </>
    )
}
export default Useref1