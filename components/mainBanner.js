import React from "react";
import "./styles/mainBanner.scss";

const MainBanner = (props) => {
  return (
    <div className="main-banner">
      <img src={props.image} alt="banner-banner" />
    </div>
  );
};

export default MainBanner;
