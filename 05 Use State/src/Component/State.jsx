import React, { useState } from 'react'

const State = () => {
    const [counter,Setcounter]= useState(0)
    
  return (
    <div>
        <h1>Use state in React js</h1>
        <h2>{counter}</h2>
        <button onClick={()=>Setcounter(counter+1)}>inc</button>
        <button onClick={()=>Setcounter(counter-1)} >dec</button>
    </div>
  )
}

export default State;
