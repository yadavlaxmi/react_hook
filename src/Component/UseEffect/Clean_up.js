
import React, { useEffect, useState } from "react"
const Clean_up=()=>{
    const[widthCount ,setWidthCount]=useState(window.screen.width);
    const actualWidth=()=>{
        console.log ("I am width")
    }
    useEffect(()=>{
        window.addEventListener("resize", actualWidth);
    })


    return(
        <div>
        <p>The actual size of the screen</p>
        <h1>{widthCount}</h1>
        </div>
    )

}
export default Clean_up