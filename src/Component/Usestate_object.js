import React, { useState } from "react"
import { Button } from "@mui/material"
const Usestate_obeject=()=>{
    const[myObject,setmyObject]=useState({
        myName:"laxmi",myAge:17,degree:"BCA",RollNo:55
    })
    const update_object=()=>{
    setmyObject({...myObject,degree:"MCA"})
    }
    return(
        <div>
            <h1>welcome object </h1>
            <h2> Name:{myObject.myName} age:{myObject.myAge} Degree:{myObject.degree}</h2>
            <Button  variant="contained" onClick={update_object}>Update</Button>
        </div> 
    )
}
export default Usestate_obeject