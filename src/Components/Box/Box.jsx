import React from "react";
import Child2 from "../Child2";

const Box = ({ title }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <Child2 titleChild2={title} />
    </div>
  );
};

export default Box;
