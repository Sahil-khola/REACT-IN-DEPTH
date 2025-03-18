import React, { useEffect, useState } from "react";

const Effect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Use effect is Running  ${counter}`);
    document.title = counter;
  },[counter]);
 

  

  return (
    <>
      <h1> Use effect in React js</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
};

export default Effect;
