import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
 },
  closed: {
    opacity: 0,
    y: 50,
   
  }
};

const Links = () => {
  const items = ["Home", "Services", "Portfolio", "Contact"];

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{scale:1.2}} whileTap={{scale:0.9}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
