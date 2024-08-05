import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animated: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbutton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animated: {
    x: "-650%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapperr">
        <motion.div
          className="Textcontainer"
          variants={textVariants}
          initial="initial"
          animate="animated"
        >
          {/* <motion.h2 variants={textVariants}>Abdul Hanan</motion.h2> */}
          <motion.h1 variants={textVariants}>
            Web Developer and UI Designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the latest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollbutton"
            className="scrollimg"
            src="/scroll.png"
            alt="Scroll"
          />
        </motion.div>
        </div>
        <motion.div
          className="slidingtext"
          variants={sliderVariants}
          initial="initial"
          animate="animated"
        >
          Web Developer Influencer Content Creator
        </motion.div>
        <div className="imageContainer">
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>
  );
};

export default Hero;
