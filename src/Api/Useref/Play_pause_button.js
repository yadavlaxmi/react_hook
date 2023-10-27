import React from "react";
import { Button } from "@mui/material";
const Play_pause_button=()=>{
    const handlePlay=()=>{

    }
    const handlePause=()=>{

    }
    return(
        <>
        <div className="grid-btn"></div>
        <Button variant="contained" color="primary" onClick={handlePlay}>Play</Button>
        <Button variant="contained" color="secondary"onClick={handlePause}>Pause</Button>
        <h1>my project</h1>
        <video>
            <source src=""/>
        </video>
        </>
    )
}
export default Play_pause_button
