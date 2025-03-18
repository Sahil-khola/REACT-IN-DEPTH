import React from "react";

const Laptop = ({ name, price, model }) => {
    const obj = {
        // Internal Css 
        backgroundColor: "blue",
            color: "white",
            padding: "10px",
            margin: "30px",
            borderRadius: "10px",
            boxShadow: "10px 10px 10px black",
    }
  return (
    <div
    // inline css
    //   style={{
    //     backgroundColor: "grey",
    //     color: "white",
    //     padding: "10px",
    //     margin: "30px",
    //     borderRadius: "10px",
    //     boxShadow: "10px 10px 10px black",
    //   }}
    style={obj}
    >
      <h1>Name = {name}</h1>
      <h2>Price = {price}</h2>
      <h2>Model = {model}</h2>
    </div>
  );
};

export default Laptop;
