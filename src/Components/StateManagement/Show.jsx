import React, { useState } from "react";
import image from "../../assets/calc.png";
const Show = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <img height="300px" src={image} alt="" />}
      <button
        onClick={() => {
          setShow((v) => !v);
        }}
        style={{
          display: "block",
        }}
      >
        {show ? "Hide" : "show"}
      </button>
    </div>
  );
};

export default Show;
