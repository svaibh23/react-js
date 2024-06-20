// src/ImageGallery.js
import React from 'react';
import { motion } from 'framer-motion';
import './ImageGallery.css';
import logo from './2057e0eecf792fb.jpg'; 

// Assuming your images are in the `public` folder directly
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
];

const ImageGallery = () => {
  const imageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  // Define different hover and tap effects for each image
  const imageHoverEffects = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="image-card"
          initial="initial"
          animate="animate"
          variants={imageVariants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={imageHoverEffects.whileHover} // Apply hover effect dynamically
          whileTap={imageHoverEffects.whileTap} // Apply tap effect dynamically
        >
          {/* Use a conditional to check if the image is the logo */}
          {index === images.length - 1 ? (
            <motion.img
              src={image}
              alt={`Logo`}
              className="logo"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            />
          ) : (
            <motion.img
              src={image}
              alt={`Gallery image ${index + 1}`}
              whileHover={{ scale: 1.1, rotate: 5 }}  // Example: Rotate effect for gallery images
              whileTap={{ scale: 0.9 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
