import React,{useState,useEffect} from "react";
const UseeffectApi=()=>{
    const[users,setUsers]=useState([]);
    const getUsers=async()=>{
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/posts");
            setUsers(await response.json())
    
        }catch(error){
            console.log("error"+error)
        }
        // const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        // setUsers(await response.json())
        // console.log(data)
    }
    useEffect(()=>{
        getUsers();
    },[])
    return(
        <>
            <h1 className='h1'>Useeffect Api</h1>


            {                users.map((CurElem)=>{
                    return(
                        <div>
                            <p className="p1">{CurElem.userId}</p>
                            <p className="p2"> {CurElem.id}</p>
                            <p className="p3">{CurElem.title}</p>
                            <p className="p4">{CurElem.body}</p>
                        </div>
                    
                    )
                })
            }
        </>
    )
}
export default UseeffectApi