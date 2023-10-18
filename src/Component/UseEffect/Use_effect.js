import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button"; 

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title="chats(${count})"
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

export default UseEffectExample;
