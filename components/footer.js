import React from "react";
import Marquee from "react-fast-marquee";
import "./styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Marquee className="marquee" speed={150}>
        Art direction . Graphic design . UI UX . Photography . Motion design .
        Video production
      </Marquee>
      <div className="footer flex-between">
        <p>
          © 2023 rameez iqbal <span>--</span> Bolen
        </p>
        <p>Privacy - Cookies</p>
      </div>
    </div>
  );
};

export default Footer;
