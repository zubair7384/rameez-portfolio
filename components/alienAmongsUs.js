import React from "react";
import ferhrenHeit from "../assets/png/fh.png";
import designBoom from "../assets/png/db.png";

import Image from "next/image";
import "./styles/alienAmongsUs.scss";

const AlienAmongsUs = () => {
  return (
    <div className="alien-wrapper flex-between">
      <div className="greenEllipse"></div>
      <h2>ALIEN AMONGS US</h2>
      <div className="descriptoin-container">
        <div className="desc-wrapper">
          <p>
            Louis Vuitton's Intergalactic Handbag Collection is an AI-generated
            concept campaign for Louis Vuitton's latest handbag collection
            including Louis Vuitton Alma, Louis Vuitton Speedy, and Louis
            Vuitton Never Fall.
          </p>
          <p>
            In this campaign aliens from other worlds are featured as models for
            these exclusive handbags. All the concept images are generated using
            the popular text to image AI Midjourney.
          </p>
          <p>
            The core campaign idea is to show that you too can be stylishly
            distinctive. Taking this concept further to a fashion show, models
            can don ultra-realistic Alien masks/hoods and carry the latest Louis
            Vuitton handbags with pride.
          </p>
          <p>
            This campaign is all about luxury and exclusivity – two things that
            Louis Vuitton is known for.
          </p>
        </div>
        <div className="featured-wrapper">
          <h3>Featured in</h3>
          <div className="featured-icons flex">
            <Image src={designBoom} alt="design-boom" width={195} height={39} />
            <Image
              src={ferhrenHeit}
              alt="ferhrenheit"
              width={195}
              height={39}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlienAmongsUs;
