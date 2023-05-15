"use client";
// import MainBanner from "@/components/mainBanner";
import AlienAmongsUs from "@/components/alienAmongsUs";
import { motion } from "framer-motion";
import TwoCards from "@/components/twoCards";
import OneCard from "@/components/oneCard";
import ReactPlayer from "react-player";
import CircleText from "@/components/circleText";
import A1 from "../../assets/png/two1.png";
import A2 from "../../assets/png/two2.png";
import A3 from "../../assets/png/two3.png";
import A4 from "../../assets/png/two4.png";
import A5 from "../../assets/png/one1.png";
import A6 from "../../assets/png/a5.png";
import "./amu.scss";

export default function AliensAmoungUs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const mainImage =
    "https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/alien-main-banner.png?tr=w-1714,h-800,fo-auto";
  return (
    <>
      <motion.div
        className="amu-container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <CircleText right={7} bottom={-2.6} varient="green" />
        {/* <MainBanner image={mainImage} /> */}
        <div className="player-wrapper">
          <ReactPlayer
            url="/videos/alien-banner.mp4"
            playing={true}
            loop={true}
            controls={false}
            playbackRate={1}
            width="100%"
            height="600px"
            className="react-player"
          />
        </div>

        <AlienAmongsUs />
        <TwoCards A1={A1} A2={A2} />
        <OneCard oneImage={A5} />
        <TwoCards A1={A3} A2={A4} />
        <OneCard oneImage={A6} />
      </motion.div>
    </>
  );
}
