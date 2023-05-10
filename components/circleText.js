import React, { useRef, useEffect } from "react";
import "./styles/circle.scss";

const CircleText = () => {
  const textRef = useRef();

  return (
    <div id="circle-container">
      <div className="circle">
        <div className="center-text">
          GET IN <br />
          TOUCH
        </div>
        <div className="text-container">
          <div ref={textRef} className="text">
            {"RAMEEZ IQBAL BOLEN .RAMEEZ IQBAL BOLEN ."
              .split("")
              .map((letter, index) => (
                <span
                  style={{ transform: `rotate(${index * 9}deg)` }}
                  key={index}
                >
                  {letter}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleText;
