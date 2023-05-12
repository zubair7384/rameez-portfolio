"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NextCard from "@/components/nextCard";
import CircleText from "@/components/circleText";
import work1 from "../../assets/png/work1.png";
import work2 from "../../assets/png/workEmpty.png";
import "./work.scss";

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
  { link: work2, title: "COMING SOON.." },
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
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="work-container"
      >
        <CircleText right={7} bottom={-6} varient="green" />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="work-wrapper"
        >
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="greenEllipse"
          ></motion.div>
          <div className="info-wrapper">
            <h1>
              SELECTED
              <br />
              WORK
            </h1>
          </div>
          <div className="description-wrapper">
            <h3>
              Directed all phases of creative work for major accounts from
              concept through production and manages creative teams on various
              projects.
            </h3>
          </div>
        </motion.div>
        <div className="work-cards-wrapper">
          {images.map((i, index) => (
            <Link className="card-wrapper" href="/aliensAmoungUs">
              <motion.div key={index} variants={item}>
                <NextCard link={i.link} title={i.title} />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Work;
