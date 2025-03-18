import React from "react";

const Event = () => {
function buttonHandel() {
    console.log("the button was clicked")
}
  return (
    <div>
      <center>
        <button onClick={buttonHandel}>
            Click me
        </button>
      </center>
    </div>
  );
};

export default Event;
