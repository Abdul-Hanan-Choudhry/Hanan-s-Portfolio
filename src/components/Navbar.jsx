import React from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="navheading">Abdul Hanan</h2>{" "}
        </motion.span>
        <div className="social">
          <a
            href="https://www.instagram.com/hanan_choudhryy?igsh=MWgyNWUzOHY0YmF0aQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/hanii.chaudhry123?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-hanan-9bb417306/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
