import React from "react";
import Child3 from "./Child3";

function Child2({ titleChild2 }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <Child3 titleChild3={titleChild2} />
    </div>
  );
}

export default Child2;
