import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const Cond_useeffect = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
  if (count>=1){
    document.title = `Chats (${count})`; 
  }else{
    document.title = `Chats`; 

  }
});

  console.log("hello outside");

  return (
    <div>
      <h1>{count}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Click
      </Button>
    </div>
  );
};

export default Cond_useeffect
