import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/circle.scss";

const CircleText = (props) => {
  const textRef = useRef();

  return (
    <Link
      href="me"
      style={{ right: `${props.right}%`, bottom: `${props.bottom}%` }}
      id="circle-container"
    >
      <div className="circle">
        <div
          className="center-text"
          style={{
            color: props.varient === "black" ? "#1fff28" : "#000",
          }}
        >
          GET IN <br />
          TOUCH
        </div>
        <div
          className={
            props.varient === "black"
              ? "text-container bg-black"
              : "text-container bg-green"
          }
        >
          <div ref={textRef} className="text">
            {"RAMEEZ IQBAL BOLEN .RAMEEZ IQBAL BOLEN ."
              .split("")
              .map((letter, index) => (
                <span
                  style={{
                    transform: `rotate(${index * 9}deg)`,
                    color: props.varient === "black" ? "#1fff28" : "#000",
                  }}
                  key={index}
                >
                  {letter}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CircleText;
