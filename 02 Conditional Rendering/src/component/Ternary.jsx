import React from 'react'

const Ternary = () => {
  const age = 2;
  return (
    <div>
      {
        age>=18 ? <h1>You are above 18 </h1>: <h3>You are below 18</h3>
      }
    </div>
  )
}

export default Ternary;
