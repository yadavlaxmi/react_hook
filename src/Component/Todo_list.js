import React ,{useState}from "react"
import { Button } from "@mui/material"
const Todo_list=()=>{
    

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
    const removeElement=(id)=>{
        alert(id)
    }
    return(
        <>
            {
                myArray.map((currentElement)=>{

                    return(
                            <h1 key={currentElement.id}>Name:{currentElement.myName} and Age:{currentElement.age}
                            <Button variant="contained" color="secondary" onClick={()=>removeElement(currentElement.id)}>remove</Button>
                            </h1>
                        )})
            }
            <Button variant="contained" color="primary" onClick={clearArray}>clear</Button>

        </>
    )
}
export default Todo_list