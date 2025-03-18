import React from "react";

const JSX = () => {
  const name = "Sahil";
  const age = 20;

  const information = {
    name: "Sahil",
    age: 20,
    gmail: "Sahil@example.com",
    pincode: 13245,
  };

  const product = {
    title: "I phone",
    price: 100,
    quantity: 2,
  };
  return (
    <>
      <div>
        <h1>hey I am Sahil khola </h1>
        <p>I am a web developer</p>
        <h5>My name is {name}</h5>
        <h5>My age is {age}</h5>
        <h1>Name : {information.name}</h1>
        <h2>Age :{information.age}</h2>
        <h3>Email : {information.gmail}</h3>
        <h4>Pincode : {information.pincode}</h4>
      </div>
      <div>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <h3>{product.quantity}</h3>
      </div>
    </>
  );
};

export default JSX;
