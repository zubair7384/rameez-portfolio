"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import CircleText from "@/components/circleText";
import NextCard from "@/components/nextCard";
import { usePathname } from "next/navigation";
import Marquee from "react-fast-marquee";
import { Events, animateScroll as scroll } from "react-scroll";

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

const Home = () => {
  const [imageArray, setImageArray] = React.useState([]);
  const pathname = usePathname();
  const scrollRef = React.createRef();

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
    setImageArray(imageArray);
  }, []);

  React.useEffect(() => {
    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});
    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    scroll.scrollTo(window.scrollY, {
      duration: 2000,
      delay: 20,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="home-container"
        ref={scrollRef}
      >
        {/* <h1 onClick={handleScroll}>new</h1> */}
        <CircleText right={15} bottom={-9} varient="black" data-scroll />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="home-wrapper mx-auto"
        >
          <motion.div
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            className="greenEllipse"
          ></motion.div>

          <div className="description-wrapper">
            <h3>
              Creative Art Director with record of delivering on-target
              conceptual marketing ideas and artwork that generate strong
              response.
            </h3>
          </div>
        </motion.div>
        <Marquee
          className="home-marquee"
          speed={150}
          data-scroll
          data-scroll-speed="-20"
          data-scroll-position="top"
          // gradient={true}
        >
          Art direction . Graphic design . UI UX . Photography . Motion design .
          Video production
        </Marquee>
        <div className="home-cards-wrapper mx-auto">
          {images.map((i, index) => (
            <Link className="card-wrapper" href="/aliensAmoungUs">
              <motion.div key={index} variants={item}>
                <NextCard link={i.link} title={i.title} />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
