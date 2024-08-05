import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "3D iPhone",
    img: "/iphone.png",
    desc: "Developed a 3D iPhone app using React, Three.js, and GSAP, providing an interactive and visually engaging experience.",
  },
  {
    id: 2,
    title: "Movie App",
    img: "movie.png",
    desc: "Created a movie app using React and Firebase, allowing users to browse movies, read and leave reviews, with real-time database updates for a seamless experience.",
  },
  {
    id: 3,
    title: "Ecommerce App",
    img: "/ecom.png",
    desc: "Designed a responsive e-commerce website using HTML and CSS, featuring user-friendly navigation and an attractive layout.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start" ,"end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textcontainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
