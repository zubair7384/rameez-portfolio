"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CircleText from "@/components/circleText";
import Marquee from "react-fast-marquee";
import work1 from "../assets/png/work1.png";
import work2 from "../assets/png/workEmpty.png";
import "./home.scss";

const images = [
  { link: work1, title: "ALIENS AMONGS US" },
  { link: work2, title: "COMING SOON.." },
  { link: work2, title: "COMING SOON.." },
  { link: work2, title: "COMING SOON.." },
  { link: work2, title: "COMING SOON.." },
  { link: work2, title: "COMING SOON.." },
  { link: work2, title: "COMING SOON.." },
  { link: work2, title: "COMING SOON.." },
  { link: work2, title: "COMING SOON.." },
];

const Work = () => {
  const [imageArray, setImageArray] = React.useState([]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    for (let i = 1; i <= 18; i++) {
      let imagePath = `${i}`;
      imageArray.push(imagePath);
    }
    setImageArray(imageArray, "imageArray");
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="home-container"
    >
      {/* <CircleText /> */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="home-wrapper mx-auto"
      >
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="greenEllipse"
        ></motion.div>

        <div className="description-wrapper">
          <h3>
            Creative Art Director with record of delivering on-target conceptual
            marketing ideas and artwork that generate strong response.
          </h3>
        </div>
      </motion.div>
      <Marquee
        className="home-marquee"
        speed={150}
        // gradient={true}
      >
        Art direction . Graphic design . UI UX . Photography . Motion design .
        Video production
      </Marquee>
      <div className="home-cards-wrapper mx-auto">
        {images.map((i, index) => (
          <motion.div key={index} className="image-box" variants={item}>
            <Image src={i.link} alt="worl-card" width={400} height={272} />
            <div class="image-box-text">
              <div class="card-text">{i.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
