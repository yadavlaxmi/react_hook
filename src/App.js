

import './App.css';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Rules_hook from './Component/Rules_hook';

function App() {
  const [myName, setMyName] = useState("meraki app");

  const changeName = () => {
  
    let val=myName;
    if(val === "meraki app") {
      setMyName("laxmi");
    }else{
      setMyName('meraki app')
    }

  }

  console.log(myName);

  return (
    <div className='App'>
      <h1>{myName}</h1>
      <Button variant='contained' color='primary' onClick={changeName}>Click me</Button>
      <Rules_hook/>
    </div>
  );
}

export default App;

