'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";
import  "./styles.css";

const Sidebar = () => {
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
       <div><FaBars size={25} className='menuIconStyle' onClick={handleToggle} /> </div>
        <div className='barStyle'>
        <img src='https://graphicsfamily.com/wp-content/uploads/2020/08/agriculture-logo-design-free-downlaod-1180x663.jpg' alt='heloo' className='imageStyle' />
        <h1 className='titleStyle'>4AS FOODS</h1>
        </div>
       
       <div className='barItems'>   
        <p>HOME</p>
        <p className='service'> SERVICE</p>
        <p className='contact'>  CONTACTS</p>
        <button className='buttonStyle'> SHOP  </button>
       </div>
       <div className='buttonDiv'> 
        <Link href="/shop">
          <button className='buttonStyle2'> SHOP </button>
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
        <Link href="/shop">
           <li className='listItemStyle'>Shop</li>
        </Link>
        <Link href="/about">
           <li className='listItemStyle'>About</li>
        </Link>
        <Link href="/services">
           <li className='listItemStyle'>Services</li>
        </Link>
        <Link href="/contact">
           <li className='listItemStyle'>Contact</li>
        </Link>
        <Link href="/faqs">
           <li className='listItemStyle'>FAQs</li>
        </Link>
        
        </ul>
       
      </motion.div>
    </div>
  );
};

// Styles
const navbarStyle = {
    position: 'fixed', // Fixed at the top of the viewport
    top: 0,
    left: 0,
    width: '100%', // Full width across the screen
    height: '25px', // Set a height for the app bar
    display: 'flex',
   // justifyContent: 'space-between', // Space between title, button, and menu icon
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0)', // Semi-transparent white background
    backdropFilter: 'blur(50px)', // Apply a blur effect
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
    zIndex: 1000, // Ensure the app bar stays on top
  };


const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#32CD32',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    marginLeft:"3%",
    marginRight:'1%',
    height:'30px',
   // marginTop:'5px',
    width:'130px',
    
    cursor: 'pointer',
    marginRight: '1rem', // Add some space between button and menu icon
  };

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginLeft:'12px'
};

const menuIconStyle = {
  cursor: 'pointer', 
  color: '#333', 
  marginLeft: "50vw",
  marginTop:"20px"
};
const sidebarStyle = {
    position: 'fixed', // Fixes the sidebar to the right
    top: 0,
    right: 0, // Positioned on the right of the viewport
    width: '50%', // 30% of the viewport width
    height: '90%', // Full height
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    zIndex: 1001, // Behind the navbar but on top of page content
    padding: '2rem',
  };

const closeIconStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  cursor: 'pointer',
  color: '#333',
  zIndex: 1001, // Ensure the close icon is on top of the sidebar content
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  marginTop: '2rem',
};

const listItemStyle = {
  padding: '0.75rem 0',
  fontSize: '1.2rem',
  borderBottom: '1px solid #ddd',
 
};



export default Sidebar;
