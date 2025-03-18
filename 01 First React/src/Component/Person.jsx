import React from 'react'

const Person = () => {
    const information = {
      name : "Sahil",
      age : 20,
      gmail: "Sahil@example.com",
      ocupation : "web developer"
    }
  return (
    <div>
      <h1>Name : {information.name}</h1>
      <h2>Age : {information.age}</h2>
      <h2>Gmail :{information.gmail}</h2>
      <h2>Ocupation : {information.ocupation}</h2>
    </div>
  )
}

export default Person

