import React ,{useState,useEffect,useRef} from "react";
const Useref2=()=>{
    const[myData,setMyData]=useState("")
    // const[count,setCount]=useState(0);
    const inputElement=useRef(0)
    
  
  const changeStyle=()=>{
    console.log(inputElement.current)
  }
    return(
        <>
        
        <input
        ref={inputElement}
        type="text"
        value={myData}
        onChange={(e)=>setMyData(e.target.value)}/><br></br>
        <button onClick={changeStyle}>sumbit</button>
        </>
    )
}
export default Useref2