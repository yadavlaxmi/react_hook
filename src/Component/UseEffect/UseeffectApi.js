import React,{useEffect} from "react";
const UseeffectApi=()=>{
    const getUsers=async()=>{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(response)
    }
    useEffect(()=>{
        getUsers();
    })
    return(
        <>
            <h1 className='h1'>Useeffect Api</h1>
        </>
    )
}
export default UseeffectApi