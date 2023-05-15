import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ReactCurvedText from "react-curved-text";
import "./styles/circle.scss";

const CircleText = (props) => {
  const textRef = useRef();

  return (
    <Link
      href="me"
      style={{ right: `${props.right}%`, bottom: `${props.bottom}%` }}
      id="circle-container"
    >
      <motion.div
        className="circle"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
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
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={87}
            ry={87}
            startOffset={0}
            reversed={true}
            text="RAMEEZ IQBAL BOLEN . RAMEEZ IQBAL BOLEN . RAMEEZ IQBAL BOLEN . "
            textProps={{ style: { fontSize: 16 } }}
            textPathProps={{
              fill: props.varient === "black" ? "#1fff28" : "#000",
            }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default CircleText;
