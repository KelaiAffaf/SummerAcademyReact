import React, { useState } from "react";
import "./States.css";

const States = () => {
  const [boxOne, setboxOne] = useState(false);
  const [BoxTwo, setBoxTwo] = useState(false);
  const HnadleClickFirst = () => {
    setboxOne((prev) => !prev);
  };
  const HnadleClickSecond = () => {
    setBoxTwo((prev) => !prev);
  };
  return (
    <div>
      <div className="box1">
        <div
          className="boxOne"
          style={{ backgroundColor: boxOne ? "red" : "transparent" }}
        ></div>
        <button onClick={HnadleClickFirst}>Click</button>
      </div>

      <div className="box2">
        <div
          className="boxTwo"
          style={{ backgroundColor: BoxTwo ? "blue" : "transparent" }}
        ></div>
        <button onClick={HnadleClickSecond}> Click</button>
      </div>
    </div>
  );
};

export default States;
