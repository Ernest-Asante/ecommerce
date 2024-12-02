'use client'; // Required for client-side rendering

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
//import styles from '../ImageCarousel.module.css'; // Import the CSS module for styling
import Image from 'next/image';
import  "./styles.css";

const images = [
  {
    src: "/images/p1.jpeg",
    description: "Varieties of nutritional crops"
  },
  {
    src:"/images/p2.jpeg",
    description: "grown from rich ghanaian soil" 
  },
  {
    src: "/images/p3.jpeg",
    description: "using advance technologies"
  },
  {
    src:"/images/p4.jpeg",
    description: "rigth from seedling"
  },
  {
    src:"/images/p5.jpeg",
    description: "to maturity"
  },
  {
    src: "/images/p6.jpeg",
    description: "readily available for sale on markets"
  },
  {
    src:"/images/p7.jpeg",
    description: "or right at your door steps"
  },
  {
    src:"/images/p8.jpeg",
    description: "100% organic and natural"
  },
  {
    src: "/images/p9.jpeg", 
    description: "scientifically viable"
  },
  {
    src: "/images/p10.jpeg",
    description: "consume with friends and families"
  },
  // Add more images as needed
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up an interval to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='carousel'>
      {images.map((image, index) => (
        <motion.div
          key={index} 
          className="imageContainer"
          initial={{ opacity: 0, scale: 1 }}  
          animate={{ opacity: index === currentIndex ? 1 : 1, scale: index === currentIndex ? 1 : 1 }}
          transition={{ duration: 3}} // Smooth slow transition
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        >
          <Image
             layout="fill" // This makes the image fill the container
             objectFit="cover" //
            src={image.src} alt={image.description} className="image" />
          <motion.div
            className="description"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 0.9, y: 0 }} 
            transition={{ duration: 4, delay: 0.5 }} 
            
          >
            <p style={{fontSize:"23px"}}>
             {image.description} 
            </p>  
          </motion.div>  
        </motion.div>  
      ))}
    </div>
  );
};

export default ImageCarousel;
