import React from "react"
import { Button } from "@mui/material"
const UseState_Array=()=>{
    const bioData=[
        {
        id:0,myName:"laxmi",age:17
    },
    {
        id:1,myName:"mansa",age:22
    },{
        id:2,myName:"guddi",age:21

    }
        
    ]
    console.log(bioData)
    return(
        <div>
            {
                bioData.map((currentElement)=>{
                    return(
                            <Button variant="outlined">Name:{currentElement.myName} and Age:{currentElement.age}</Button> 

                    )

                })
            }
        </div>
    )
}
export default UseState_Array