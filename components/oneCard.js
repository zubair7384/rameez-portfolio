import React from "react";
import Image from "next/image";
import "./styles/card.scss";

const OneCard = (props) => {
  return (
    <div className="one-card-wrapper">
      <Image src={props.oneImage} alt="alien-1" width={1240} height={826} />
    </div>
  );
};

export default OneCard;
