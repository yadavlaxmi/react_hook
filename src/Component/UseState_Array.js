import React ,{useState}from "react"
import { Button } from "@mui/material"
const UseState_Array=()=>{
    

    var bioData=[
        {
        id:0,myName:"laxmi",age:17
    },
    {
        id:1,myName:"mansa",age:22
    },
    {
        id:2,myName:"guddi",age:21

    }
        
    ]
    const[myArray,setmyArray]=useState(bioData);
    const clearArray=()=>{
        setmyArray([]);
    }
    return(
        <>
            {
                myArray.map((currentElement)=>{
                    return(
                            <h1>Name:{currentElement.myName} and Age:{currentElement.age}</h1>
                        )})
            }
            <Button variant="contained" color="secondary" onClick={clearArray}>clear</Button>

        </>
    )
}
export default UseState_Array