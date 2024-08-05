import React, { useEffect, useState } from 'react'
import "./cursor.scss"
import { motion } from 'framer-motion'

const Cursor = () => {
    const [position,setposition]=useState({x:0,y:0})

    useEffect(()=>{
        const mousemove=(e)=>{
            setposition({x:e.clientX,y:e.clientY});
        };
        window.addEventListener("mousemove",mousemove);
        return()=>{
            window.removeEventListener("mousemove",mousemove);
        };
    },[]);
  return <motion.div className='cursor' animate={{x:position.x+10,y:position.y+10}}></motion.div>
  
}

export default Cursor
