import { useRef } from "react";
import "./parallax.scss";
import { motion ,useScroll,useTransform} from "framer-motion";
const Parallax = ({ type }) => {

    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const Ybg=useTransform(scrollYProgress,[0,1],["0%","100%"])
    const YText=useTransform(scrollYProgress,[0,1],["0%","500%"])

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1 style={{y:YText}}>{type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
      <motion.div  className="mountains"> </motion.div>
      <motion.div style={{y:Ybg, backgroundImage: `url(${type==="services"?"/planets.png":"/sun.png"})`}}className="planets"></motion.div>
      <motion.div style={{x:Ybg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
