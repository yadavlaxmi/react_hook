
import './App.css';
import React,{useState} from 'react';
function App() {
  // let myFirstval=useState("laxmi")[0];
  // console.log(myFirstval)
  // // console.log(useState("laxmi"))
  // var val="Meraki app"
   const[myName,setmyName]=useState("meraki app")
  const changeName=()=>{
    setmyName("laxmi")
        // val="laxmi"
        // console.log(val)
  }
  console.log(myName)
  return (

    <div className='App'>
      <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>click me</button>
    </div>
  );
}

export default App;
