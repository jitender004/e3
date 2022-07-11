import React, { useState } from "react";

export const useCounter = (init) => {
  const [count, setCount] = useState(init);
//   console.log(count);
  const incrementCount = ()=>{
    setCount((prev)=>prev+1);
  }
  const decrementCount = ()=>{
    setCount((prev)=>prev-1);
  }

  return { count, incrementCount, decrementCount };
};
