"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import down from "../../assets/svg/down.svg";
import meBanner from "../../assets/png/meImage.png";
import ferhrenHeit from "../../assets/svg/fa.svg";
import designBoom from "../../assets/svg/de.svg";
import behance from "../../assets/svg/be.svg";
import surface from "../../assets/svg/su.svg";
import pulse from "../../assets/svg/pu.svg";

import "./me.scss";

const Me = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="about-container"
      >
        <Image
          className="me-banner"
          src={meBanner}
          alt=""
          width={1240}
          height={600}
        />
        <div className="about-wrapper">
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            className="greenEllipse"
          ></motion.div>
          <div className="info-wrapper">
            <h1>
              ABOUT
              <br />
              ME
            </h1>
            <p>info@rameeziqbal.com</p>
            <p>+971 55 335 2875</p>
            <p className="linkdIn">LinkedIn</p>
            <p className="insta">Instagram</p>
            <a className="download-btn">
              <Image src={down} alt="" />
              DOWNLOAD RESUME
            </a>
          </div>
          <div className="description-wrapper">
            <p>
              As a seasoned Art Director and Senior Interactive Designer with
              over 8 years of experience, I specialize in communication, design,
              and digital media to achieve marketing goals. With expertise in
              delivering effective UI/UX/IxD, responsive design, creative
              strategy, execution of visuals, corporate graphics, project
              management, and print materials, I bring a unique perspective to
              every project I work on, particularly in the entertainment and
              interactive media industries.
            </p>
            <h3>
              Trained In Adobe Indesign, Adobe Illustrator, Adobe Photoshop,
              Adobe Premier Pro, Adobe After Effects, Adobe XD, Adobe Dimension,
              Adobe Dreamweaver, Adobe Lightroom, Capture One Pro, Final Cut
              Pro, Divinchi Resolve, Invision, Sketch, and Figma.
            </h3>
          </div>
        </div>
      </motion.div>
        <div className="featured-wrapper">
          <Marquee className="marquee" speed={100} direction="right">
              <Image src={designBoom} alt="design-boom"  />
              <Image src={ferhrenHeit} alt="ferhrenheit"  />
              <Image src={surface} alt="ferhrenheit" />
              <Image src={pulse} alt="ferhrenheit"  />
              <Image src={behance} alt="ferhrenheit"  />
              <Image src={designBoom} alt="design-boom"  />
              <Image src={ferhrenHeit} alt="ferhrenheit"  />
              <Image src={surface} alt="ferhrenheit" />
              <Image src={pulse} alt="ferhrenheit"  />
              <Image src={behance} alt="ferhrenheit"  />
          </Marquee>
          </div>
    </>
  );
};

export default Me;
