'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";
import  "./styles.css";

const CheckoutAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); 
  };

  return ( 
    <div className='container'>
      {/* Navbar: Hamburger Menu and Title */}
      <motion.div
       
       initial={{ opacity: 0, y: -40 }}
       animate={{ opacity: 0.9, y: 0 }}
       transition={{ duration: 1 }} 
      /* style={navbarStyle} */
       className = "navbarStyle"
     >
      
        <div className='barStyle'>
        <img src='https://graphicsfamily.com/wp-content/uploads/2020/08/agriculture-logo-design-free-downlaod-1180x663.jpg' alt='heloo' className='imageStyle' />
        <h1 className='titleStyle'>CHECKOUT</h1>
        </div>
       
       <div className='barItems'>   
        <p>HOME</p>
        <p className='service'> SERVICE</p>
        <p className='contact'>  CONTACTS</p>
        <button className='buttonStyle'> SHOP  </button>
       </div>
      
        <div className='buttonDiv'> 
        <Link href="/cart">
          <button className='buttonStyle2'> CART</button>
        </Link>
        </div>
       
         {/* <FaBars size={24} style={menuIconStyle} onClick={handleToggle} /> */}
      </motion.div>

      {/* Sidebar (using Framer Motion for animation) */}
      <motion.div
        initial={{ x: '-105%' }} // Starts hidden off-screen
        animate={{ x: isOpen ? '0%' : '-105%' }} // Animates to cover 30% width
        transition={{
          type: 'tween',
          duration: 0.6, // Slower and more fluid
          ease: 'easeInOut', // Smooth easing
        }}
        className="sidebarStyle" 
      >
        {/* Close Icon */}
       
       
        <FaTimes size={24} style={menuIconStyle} onClick={handleToggle} /> 
        {/* List of items */}
        <ul className='listStyle'>
          
          <li className='listItemStyle'>Home</li>
          <li  className='listItemStyle'>About</li>
          <li  className='listItemStyle'>Services</li>
          <li  className='listItemStyle'>Contact</li>
        </ul>
       
      </motion.div>
    </div>
  );
};


const menuIconStyle = {
    cursor: 'pointer',
    color: '#333',
    marginRight: '50px'
  };


export default CheckoutAppBar;
