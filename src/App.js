
// import './App.css';
// import React,{useState} from 'react';
// import { Button } from '@mui/material';
// function App() {
//   // let myFirstval=useState("laxmi")[0];
//   // console.log(myFirstval)
//   // // console.log(useState("laxmi"))
//   // var val="Meraki app"
//    const[myName,setmyName]=useState("meraki app")
//   const changeName=()=>{
//     setmyName("laxmi")
//         // val="laxmi"
//         // console.log(val)
//   }
//   console.log(myName)
//   return (

//     <div className='App'>
//       <h1>{myName}</h1>
//       <Button variant='contained'color='primary'  onClick={changeName}>Click me</Button>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  // Initialize the state variable myName with a default value "meraki app"
  const [myName, setMyName] = useState("meraki app");

  // Event handler function to change the value of myName
  const changeName = () => {
    setMyName("laxmi");
  }

  console.log(myName);

  return (
    <div className='App'>
      <h1>{myName}</h1>
      <Button variant='contained' color='primary' onClick={changeName}>Click me</Button>
    </div>
  );
}

export default App;

