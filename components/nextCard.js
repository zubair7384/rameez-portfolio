import React from "react";
import Image from "next/image";
import "./styles/nextCard.scss";

const NextCard = (props) => {
  return (
    <div className="image-box">
      <Image src={props.link} alt="work-card" width={400} height={272} />
      <div class="image-box-text">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default NextCard;
