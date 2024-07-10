import "./Hero.css";
import bg from "../../assets/meter.mp4";
import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="Hero-wrapper">
      <div className="overlay"></div>
      <video src={bg} autoPlay loop muted />
      <div className="content">
        <h1>Inventory</h1>
        <div className="container">
          <a href="#release">
            <div className="scroll-indicator">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="scroll-dot"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
