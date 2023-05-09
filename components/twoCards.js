import React from "react";
import Image from "next/image";
import "./styles/card.scss";

const TwoCards = (props) => {
  return (
    <div className="two-cards-wrapper">
      <Image src={props.A1} alt="alien-1" width={660} height={654} />
      <Image src={props.A2} alt="alien-2" width={660} height={654} />
    </div>
  );
};

export default TwoCards;
