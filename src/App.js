

import './App.css';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Rules_hook from './Component/Rules_hook';
import UseState_Array from './Component/UseState_Array';
import Usestate_obeject from './Component/Usestate_object';
import Todo_list from './Component/Todo_list';
import Short_circuit from './Component/Short_circuit';
import Forms from "./Component/Forms"
import Use_effect from "./Component/UseEffect/Use_effect"
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
      <UseState_Array/>
      <Usestate_obeject/>
      <Todo_list/>
      <Short_circuit/>
      <Forms/>
      <Use_effect/>
    </div>
  );
}

export default App;

