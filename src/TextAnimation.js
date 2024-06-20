// src/TextAnimation.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './TextAnimation.css';

const TextAnimation = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      className="text-container"
      whileHover={{ scale: 1.2, backgroundColor: '#d9edff', color: '#333' }} /* Change color on hover */
      whileTap={{ scale: 0.9 }}
      drag /* Enable drag animation */
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} /* Constrain drag within parent */
      onDragStart={handleDragStart} /* Set isDragging to true when drag starts */
      onDragEnd={handleDragEnd} /* Set isDragging to false when drag ends */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      style={{ backgroundColor: isDragging ? 'red' : '#f0f0f0' }} /* Change background color on drag */
    >
      <h2>Hover over me!</h2>
      <p>This text scales up on hover and can be dragged using Framer Motion.</p>
    </motion.div>
  );
};

export default TextAnimation;
