import "./services.scss";
import { motion } from "framer-motion";
const Services = () => {
    const variants={
        initial:{
            x:-500,
            opacity:0,
            y:100

        },
        animate:{
            x:0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        },
    }
  return (
    <motion.div className="services" variants={variants} initial="initial" animate="animate">
      <motion.div className="textcontainer" variants={variants} >
        <p>
          From Concept to Launch: Comprehensive<br /> Web 
          Solutions for Your Business
        </p>
        <hr />
      </motion.div>
      <motion.div className="titlecontainer" variants={variants} >
        <div className="title">
          <img src="/people.webp" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listcontainer" variants={variants} >
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
          <h2>Web Development</h2>
          <p>
            We specialize in crafting interactive and visually appealing
            websites using modern front-end technologies.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
          <h2>Web Design</h2>
          <p>
            Our UI/UX design services are dedicated to creating intuitive and
            beautiful interfaces that enhance user experience. 
          </p>
          <button>Go</button>
          </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
          <h2>E-commerce</h2>
          <p>
            We build tailored e-commerce platforms that help you effectively
            showcase and sell your products online. 
          </p>
          <button>Go</button>
          </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
          <h2>Digital Marketing</h2>
          <p>
            Boost your online presence with our comprehensive digital marketing
            services. Our SEO strategies are designed to improve your site's
            search engine rankings and increase organic traffic.
          </p>
          <button>Go</button>
          </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
