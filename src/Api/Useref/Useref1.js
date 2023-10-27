import React ,{useState,useEffect,useRef} from "react";
const Useref1=()=>{
    const[myData,setMyData]=useState("")
    // const[count,setCount]=useState(0);
    const count=useRef(0)
    console.log(count)
    useEffect(()=>{
        count.current=count.current+1
        // setCount(count+1)
    })  
    return(
        <>
        
        <input
        type="text"
        value={myData}
        onChange={(e)=>setMyData(e.target.value)}/>
        <p> This number of times render : {count.current}</p>
        </>
    )
}
export default Useref1