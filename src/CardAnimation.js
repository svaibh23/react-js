// src/CardAnimation.js
import React from 'react';
import { motion } from 'framer-motion';
import './CardAnimation.css';

const CardAnimation = () => {
  return (
    <motion.div
      className="card-container"
      whileHover={{ rotateY: 180 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="card">
        <div className="front">
          <h2>Front Side</h2>
          <p>This is the front side of the card.</p>
        </div>
        <div className="back">
          <h2>Back Side</h2>
          <p>This is the back side of the card.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CardAnimation;
