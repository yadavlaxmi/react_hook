import React,{useState} from "react"
import { Button } from "@mui/material"
const Forms=()=>{
    const[name , setName]=useState("");
    const[email , setEmail]=useState("");
    const[password,setPassword]=useState("")
    return(
    <>
        <form action="">
            <div>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="Name" autoComplete="off" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div><br></br>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div><br></br>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div><br></br>
            <Button type ="submit" variant="contained"> logIn </Button>


        </form>
    </>
    )
}
export default Forms