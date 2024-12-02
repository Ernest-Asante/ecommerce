'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import * as motion from "framer-motion/client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

// Sample data: List of reviews
const reviews = [
  {
    name: "John Doe",
    title: "Best Tomatoes Ever!", 
    message: "The tomatoes were so fresh and juicy, my salads have never tasted better!",
    image: "/images/r6.jpeg", // Ensure this image exists in your public folder
  },
  {
    name: "Jane Smith",
    title: "Great Quality Crops",
    message: "I bought crops for my farm, and they are thriving. The quality is top-notch!",
    image: "/images/r1.jpeg",
  },
  {
    name: "Sam Wilson",
    title: "Exceptional Service!",
    message: "The delivery was on time, and the products were better than expected. Highly recommend!",
    image: "/images/r5.jpeg",
  },
  {
    name: "Jane Smith",
    title: "Great Quality Crops",
    message: "I bought crops for my farm, and they are thriving. The quality is top-notch!",
    image: "/images/r3.jpeg",
  },
  {
    name: "Sam Wilson",
    title: "Exceptional Service!",
    message: "The delivery was on time, and the products were better than expected. Highly recommend!",
    image: "/images/r4.jpeg",
  },
  {
    name: "Jane Smith",
    title: "Great Quality Crops",
    message: "I bought crops for my farm, and they are thriving. The quality is top-notch!",
    image: "/images/r2.jpeg",
  },
 
]; 


const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...arrowStyles,
          right: '10px',
          alignItems:"center", // Position right side
          backgroundColor: 'rgba(0, 128, 0, 0.6)',
          // Example: light green with opacity
        }}
        onClick={onClick}
      />
    );
  };
  
  // Custom Prev Arrow Component
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...arrowStyles,
          left: '10px',
          // Position left side
         
          backgroundColor: 'rgba(0, 128, 0, 0.6)', // Example: light green with opacity
        }}
        onClick={onClick}
      />
    );
  };
  
  // Common Styles for Arrows
  const arrowStyles = {
    display: 'block',
    padding: '15px',
    zIndex: 2,
    
    borderRadius: '50%',
    width: '25px',
    height: '25px',
   // color:"green",
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Shadow for better visibility
  };
  
// Carousel settings for React Slick
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, 
  nextArrow: <NextArrow />, // Add custom Next Arrow
  prevArrow: <PrevArrow />,// Change slides every 5 seconds
};


// Styles for Review Card



  const reviewCardStyle = {
    padding: '2px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px', // Rounded corners
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Shadow around the card
     border: '1px solid rgba(0, 0, 0, 0.2)', // Border that stands out
     textAlign: 'center',
    marginBottom: '30px',
    alignItems:"center",
    width:"98vw",
    justifyContent:"center" // Space between reviews
  };
  

const ReviewsPageX = () => {
  return (
    <div style={{ padding: '5px', marginTop:"20px" , backgroundColor: 'hsla(0, 0%, 96%, 0.4)'}}>
      <motion.div
         initial={{ opacity: 0, y: 70 }}
           
         transition={{ duration: 1.5 }} 


       
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         viewport={{ once: true }}
        
         >
      <h3 style={{marginLeft:"2px", textAlign:"center", marginRight:"10px", fontSize:"30px", color:'green'}}>Customer Reviews</h3>
      </motion.div>
      <Slider {...sliderSettings}>
        {reviews.map((review, index) => (
          <motion.div key={index} style={reviewCardStyle}
          initial={{ opacity: 0, y: 70 }}
           
          transition={{ duration: 1.5 }} 


        
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
         
          >
            <Image
              src={review.image} 
              alt={review.title}
              width={210}
              height={200}
              style={{ borderRadius: '50%', marginBottom: '20px' , justifyContent:"center", alignItems:"center", marginLeft:"20%"}}
            />
            <h2 style={{marginLeft:"2px", marginRight:"1px", textAlign:"center"}}>{review.title}</h2>
            <p  style={{fontSize:"20px",marginLeft:"2px", marginRight:"1px", textAlign:"center"}}><strong>- {review.name} -</strong></p>
            <p  style={{fontSize:"20px",marginLeft:"2px", marginRight:"1px", textAlign:"center"}}>{review.message}</p>
          </motion.div> 
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsPageX;
