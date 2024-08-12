import React from "react";

function Greeting({ name }) {
  return (
    <div className="Greeting">
      <p>Привет, {name}!</p>
    </div>
  );
}

export default Greeting;
