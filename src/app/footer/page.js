import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import * as motion from "framer-motion/client"
import  "./styles.css";

function Footer() {
  return (
    <>
    <div className='medium'>
    <div style={{display:"flex", flexDirection:"row", flex:1, marginTop:'20px', backgroundColor:"rgb(5,25,0,1)", minHeight:"300px", width:"100%"}}>
      
        <motion.div style={{flex:3, marginLeft:'30px'}}
        
         /*   initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 0.9, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }} */

            initial={{ opacity: 0,y: 80, scale:0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 1.5
            }}
          >
        
            <h1 style={{ color:"white"}}>About Us</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white"}}></div>
            <p  style={{ color:"white", marginRight:"25px",  lineHeight: "32px", fontSize:"22px"}}>We are 4A's foods limited. We specialized in growing, processing and selling food products for local and 
                international sales. We are also dedicted to increasing nutritional value and food security in the country
            </p>

        </motion.div>
        <motion.div style={{flex:3}}
           
           initial={{ opacity: 0,y: 80, scale:0.8 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ 
               duration: 1.5
           }}
           >
        
            <h1  style={{ color:"white"}}>Contact Us</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white"}}></div>
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>No 4 lane, Osudoku street</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>Dworwulu, Accra</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>Greater Accra Region</p>  
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>Telephone: 05436325375</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>Email: asanteernest@gmail.com</p> 


        </motion.div>

        </div>
        <div style={{display:"flex", flexDirection:"row", flex:1, marginTop:'0px', backgroundColor:"rgb(5,25,0,1)", minHeight:"300px", width:"100%"}}>

        <motion.div style={{flex:3, marginLeft:'30px'}}  
          initial={{ opacity: 0,y: 80, scale:0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
              duration: 1.5
          }}
           >
            <h1  style={{ color:"white"}}>Social Media</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white"}}></div>
            <p  style={{ color:"white", marginRight:"10px", fontSize:"23px"}}>Facebook: 4A's Foods</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"23px"}}>Instagram: 4A's Foods</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"23px"}}>Youtube: 4A's Foods</p>  


       </motion.div>
       <motion.div style={{flex:3}}
               initial={{ opacity: 0,y: 80, scale:0.8 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ 
                   duration: 1.5
               }}
            
       >
            <h1  style={{ color:"white"}}>Quick Links</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white"}}></div>
            <div style={{marginTop:"15px", lineHeight: "20px"}}>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={15} color="white" />
                <p  style={{ color:"white", marginLeft:"5px", fontSize:"21px"}}>Careers</p> 
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={15} color="white" />
                <p  style={{ color:"white", marginLeft:"5px", fontSize:"21px"}}>Privacy policy</p> 
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={15} color="white" />
                <p  style={{ color:"white", marginLeft:"5px", fontSize:"21px"}}>Terms and conditions</p> 
                </div>


              
             
            </div>


       </motion.div>
      </div>
    </div>

   





    <div className='large'>
    <div style={{display:"flex", flexDirection:"row", flex:1, marginTop:'20px', backgroundColor:"rgb(5,25,0,1)", minHeight:"300px", width:"100%"}}>
      
        <motion.div style={{flex:3, marginLeft:'30px'}}
        
         /*   initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 0.9, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }} */

            initial={{ opacity: 0,y: 80, scale:0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 1.5
            }}
          >
        
            <h1 style={{ color:"white"}}>About Us</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white"}}></div>
            <p  style={{ color:"white", marginRight:"25px",  lineHeight: "32px", fontSize:"22px"}}>We are 4A's foods limited. We specialized in growing, processing and selling food products for local and 
                international sales. We are also dedicted to increasing nutritional value and food security in the country
            </p>

        </motion.div>
        <motion.div style={{flex:3}}
           
           initial={{ opacity: 0,y: 80, scale:0.8 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ 
               duration: 1.5
           }}
           >
        
            <h1  style={{ color:"white"}}>Contact Us</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white"}}></div>
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>No 4 lane, Osudoku street</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>Dworwulu, Accra</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>Greater Accra Region</p>  
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>Telephone: 05436325375</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"22px"}}>Email: asanteernest@gmail.com</p> 


        </motion.div>

        <motion.div style={{flex:3, marginLeft:'30px'}}  
          initial={{ opacity: 0,y: 80, scale:0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
              duration: 1.5
          }}
           >
            <h1  style={{ color:"white"}}>Social Media</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white"}}></div>
            <p  style={{ color:"white", marginRight:"10px", fontSize:"23px"}}>Facebook: 4A's Foods</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"23px"}}>Instagram: 4A's Foods</p> 
            <p  style={{ color:"white", marginRight:"10px", fontSize:"23px"}}>Youtube: 4A's Foods</p>  


       </motion.div>
       <motion.div style={{flex:3}}
               initial={{ opacity: 0,y: 80, scale:0.8 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ 
                   duration: 1.5
               }}
            
       >
            <h1  style={{ color:"white"}}>Quick Links</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white"}}></div>
            <div style={{marginTop:"15px", lineHeight: "20px"}}>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={15} color="white" />
                <p  style={{ color:"white", marginLeft:"5px", fontSize:"21px"}}>Careers</p> 
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={15} color="white" />
                <p  style={{ color:"white", marginLeft:"5px", fontSize:"21px"}}>Privacy policy</p> 
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={15} color="white" />
                <p  style={{ color:"white", marginLeft:"5px", fontSize:"21px"}}>Terms and conditions</p> 
                </div>


              
             
            </div>


       </motion.div>
      </div>
    </div>
    </>
  )
}

export default Footer
