import React from "react";
import Image from "next/image";
import nextArrow from "../assets/svg/right-arrow.svg";
import "./styles/nextCard.scss";

const NextCard = (props) => {
  return (
    <div className="image-box">
      <Image src={props.link} alt="work-card" width={400} height={272} />
      <div class="image-box-text flex-between">
        <p>{props.title}</p>
        <Image src={nextArrow} alt="next-arrow" />
      </div>
    </div>
  );
};

export default NextCard;
