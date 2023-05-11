"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { usePathname } from "next/navigation";

import "./styles/footer.scss";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className="footer-wrapper"
      style={{
        backgroundColor: pathname === "/" ? "#00FF29" : "#000",
      }}
    >
      <div style={{ display: pathname === "/" ? "none" : "" }}>
        <Marquee className="marquee" speed={150}>
          Art direction . Graphic design . UI UX . Photography . Motion design .
          Video production
        </Marquee>
      </div>
      <div className="footer flex-between">
        <p
          style={{
            color: pathname === "/" ? "#000" : "#fff",
          }}
        >
          © 2023 rameez iqbal <span>--</span> Bolen
        </p>
        <p
          style={{
            color: pathname === "/" ? "#000" : "#fff",
          }}
        >
          Privacy - Cookies
        </p>
      </div>
    </div>
  );
};

export default Footer;
