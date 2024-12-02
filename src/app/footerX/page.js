import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import * as motion from "framer-motion/client"
import Link from 'next/link';

function FooterX() {
  return (
    <div style={{display:"flex", flexDirection:"column", flex:1, marginTop:'20px', backgroundColor:"rgb(5,25,0,1)", minHeight:"600px", width:"100%"}}>
        <motion.div style={{ marginLeft:'10px'}}
        
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
            < div style={{height:'1px', width:'60px', border:"1px solid white", backgroundColor:"white"}}></div>
            <p  style={{ fontSize:"20px" ,color:"white", marginRight:"25px",  lineHeight: "30px"}}>We are 4AS foods limited. We specialized in growing, processing and selling food products for local and 
                international sales. We are also dedicted to increasing nutritional value and food security in the country
            </p>

        </motion.div>
        <motion.div style={{}}
           
           initial={{ opacity: 0,y: 80, scale:0.8 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ 
               duration: 1.5
           }}
           >
        
            <h1  style={{ color:"white", marginLeft:"10px"}}>Contact Us</h1>
            < div style={{height:'1px', width:'60px', border:"1px solid white", backgroundColor:"white", marginLeft:"10px"}}></div>
            <p  style={{fontSize:"20px" , color:"white", marginRight:"10px", marginLeft:"10px", lineHeight:"30px"}}>No 4 lane, Osudoku street <br/>Dworwulu, Accra <br/>Telephone: 05436325375 <br/>Email: asanteernest@gmail.com</p> 
          

        </motion.div>
        <motion.div style={{}}  
          initial={{ opacity: 0,y: 80, scale:0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
              duration: 1.5
          }}
           >
            <h1  style={{ color:"white", marginLeft:"10px",}}>Social Media</h1>
            < div style={{height:'1px', width:'60px', border:"1px solid white", backgroundColor:"white" ,marginLeft:"10px",}}></div>
            <p  style={{fontSize:"20px" , color:"white", marginRight:"10px", marginLeft:"10px",lineHeight:"35px"}}>Facebook: 4AS Foods LTD <br/> Instagram: 4AS Foods<br/>Youtube: 4AS Foods LTD</p> 



       </motion.div>
       <motion.div style={{}}
               initial={{ opacity: 0,y: 80, scale:0.8 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ 
                   duration: 1.5
               }}
            
       >
            <h1  style={{ color:"white", marginLeft:"10px"}}>Quick Links</h1>
            < div style={{height:'1px', width:'40px', border:"1px solid white", backgroundColor:"white", marginLeft:"10px"}}></div>
            <div style={{marginTop:"15px", lineHeight: "0px", marginBottom:"10px"}}>
                <Link href="/careers">
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={18} color="white" style={{marginLeft:"10px"}}/>
                <p  style={{fontSize:"20px" , color:"white", marginLeft:"5px"}}>Careers</p> 
                </div>
                </Link>

                <Link href="/privacy_policy">
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={18} color="white" style={{marginLeft:"10px"}}/>
                <p  style={{fontSize:"20px" , color:"white", marginLeft:"5px"}}>Privacy policy</p> 
                </div>
                </Link>

               
                <Link href="/terms_conditions">
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <IoIosArrowForward size={18} color="white" style={{marginLeft:"10px"}}/>
                <p  style={{fontSize:"20px" , color:"white", marginLeft:"5px"}}>Terms and conditions</p> 
                </div>
                </Link>


              
             
            </div>


       </motion.div>
      
    </div>
  )
}

export default FooterX
