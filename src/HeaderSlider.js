import React from 'react';
import { motion } from 'framer-motion';
import './HeaderSlider.css';

const HeaderSlider = () => {
  return (
    <div className="header-slider">
      <motion.div
        className="slider-image"
        initial={{ x: 0, y: 0 }}
        animate={{ x: '100vw', y: '-100vh' }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      >
        <img src="https://media.tenor.com/3uZZ_aOLoNkAAAAi/flock-of-birds-birds.gif" alt="Flock of Birds" />
      </motion.div>
      <div className="menu-container">
        <ul className="menu-list">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="menu-item"
          >
            <a href="#about" className="menu-link">About</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="menu-item"
          >
            <a href="#why-us" className="menu-link">Why Us</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="menu-item"
          >
            <a href="#contact-us" className="menu-link">Contact Us</a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSlider;
