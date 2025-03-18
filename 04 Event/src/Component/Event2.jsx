import React from "react";

const Event2 = () => {
  function handelBtn(a) {
    alert(a + 10);
  }
  return( 
  <div>
    <button onClick={()=>handelBtn(5)}>Click me</button>
  </div>
)
};

export default Event2;
