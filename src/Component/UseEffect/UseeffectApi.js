import React,{useState,useEffect} from "react";
const UseeffectApi=()=>{
    const[users,setUsers]=useState([]);
    const getUsers=async()=>{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        setUsers(await response.json())
        // console.log(data)
    }
    useEffect(()=>{
        getUsers();
    },[])
    return(
        <>
            <h1 className='h1'>Useeffect Api</h1>
        </>
    )
}
export default UseeffectApi