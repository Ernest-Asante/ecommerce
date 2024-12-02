'use client'
import ImageCarousel from '../carousel/page';
import Footer from '../footer/page';
import NourishPage from '../how/page';
import ReviewsPage from '../reviews/page';
import  "./styles.css";
//import {p10} from './p10.jpeg'

import Sidebar from '../sidebar/page';
import * as motion from "framer-motion/client"
import OurStoriesPage from '../stories/page';
import Image from 'next/image';
import ReviewsPageX from '../reviewx/page';
import FooterX from '../footerX/page';


export default function Home() {

  const images = [
    {
      src: "/images/b2.jpeg",
     
    },
    {
      src:"/images/b3.jpeg",
     
    },
    {
      src: "/images/b4.jpeg",
      description: "Image 3 Description"
    },
    {
      src:"/images/b5.jpeg",
      description: "Image 1 Description"
    },
    {
      src:"/images/b6.jpeg",
     
    },
    {
      src:"/images/b7.jpeg",
     
    },
  ]


  return (
    <div style={{ width:"100%"}}> 

       
   
      
    
 
<Sidebar/> 
      <div className='homeView'>
      
      < motion.div style={{flex: 1,height:'430px', marginTop:"5px", backgroundColor: 'rgba(255, 255, 235, 0.9)'}}
      
      initial={{ opacity: 0,y: -5, scale:0.7 }} 
       whileInView={{ opacity: 1, y: 0, scale: 1 }}
       viewport={{ once: true }}
        transition={{ 
      duration: 2
  }}
 > 
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
      <img src='https://cdn1.vectorstock.com/i/1000x1000/64/35/logo-farm-food-vector-20546435.jpg' alt='heloo' style={{height:'30px', width:'30px', borderRadius:"5px", marginRight:"25px"}} />
      <h1 style={{textAlign:"center"}}>  | 4A'S FOOD</h1>
      </div>
       
        <p style={{fontSize:'25px'}}>  FOOD PRODUCTS GROWN FROM THE RICH GHANAIAN SOIL</p>
        <p  style={{fontSize:'20px'}}> PROVIDING NUTRITION TO EVERY HOME |    THE ONLY FOOD COMPANY TO TRUST </p> 
     
        </motion.div>
        <div style={{ flex: 1 }}> 
         <ImageCarousel /> 
       </div>

      </div>



      <div className="cropm">
      <motion.div
          initial={{ opacity: 0, y: 70 }}
          transition={{ duration: 1.5 }}  
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ once: true }}  
        >
       
        <h2 style={{fontSize:"35px", color:"green", marginTop:"40px", marginLeft:"5px"}}>1 From varieties of crops to choose from</h2>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginBottom:"10px"}}>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90} 
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>TOMATOES</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>PEPPER</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>RICE</p>
          </div>
        </div>

        </motion.div> 

        </div>

    
        



     <div className="cropl">
      <motion.div
          initial={{ opacity: 0, y: 70 }}
          transition={{ duration: 1.5 }}  
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ once: true }}  
        >
       
        <h2 style={{fontSize:"35px", color:"green", marginTop:"40px", marginLeft:"5px"}}>From varieties of crops to choose from</h2>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginBottom:"10px"}}>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={200} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>TOMATOES</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>PEPPER</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>RICE</p>
          </div>
        </div>

        </motion.div> 

        </div>

    
        
     

       <ReviewsPage/>

      <Footer/> 

     {/*SMALL SCREEN */}

      <div className='miniHomeView'>
        <div className="mini">
        <Sidebar/> 
           
        <ImageCarousel/>
        <motion.div 
          
      initial={{ opacity: 0,y: -5, scale:0.7 }} 
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
       transition={{ 
     duration: 2
       }}
        style={{ minHeight: '120px', width:'100vw', backgroundColor:"green", marginTop:'1px', marginBottom:"2px", padding:0, justifyContent:"center", alignItems:"center"}}>
          <p style={{color:"white", textAlign:"center", fontFamily:"monospace", fontSize:"35px", justifyContent:"center", alignItems:"center", marginTop:"60px"}}>Creating a more food secure world</p>
        </motion.div>
        <div style={{zIndex:-100}}>
        < motion.div style={{flex: 1,minHeight:'460px', marginTop:"1px", backgroundColor: 'rgba(255, 255, 245, 0.9)',  zIndex: -50}} 
      
      initial={{ opacity: 0,y: -5, scale:0.7 }}   
       whileInView={{ opacity: 1, y: 0, scale: 1 }}
       viewport={{ once: true }}
        transition={{ 
      duration: 2
        }}
       > 
      
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginBottom:"10px"}}>
      <p style={{fontSize:'30px', marginBottom:"10px", marginLeft:"10px", marginRight:"8px"}}>
         Our planets's population is growing rapidly and so is the need for more food.
          Already, 800 million people go to bed hungry each night.
           As a food company to the world, 4As is growing and producing more food with less impact,
           to move that food to store shelves and family tables, and to nourish people for a more food secure world.
      </p>
    
      </div>
       
      
        </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 70 }}
          transition={{ duration: 1.5 }}  
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ once: true }}  
        >
       
        <h2 style={{fontSize:"35px", color:"green", marginTop:"40px", marginLeft:"5px"}}>From varieties of crops to choose from</h2>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginBottom:"10px"}}>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>TOMATOES</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>PEPPER</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>RICE</p>
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginBottom:"20px"}}>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>ONIONS</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"15px", fontWeight:"bold"}}>GARLIC</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Image src='/images/b3.jpeg'
           width={90} 
           height={90}
       // layout="fill" // This makes the image fill the container
       // objectFit="cover" 
          alt='heloo' style={{ borderRadius:"45px"}} />
          <p style={{fontSize:"12px", fontWeight:"bold"}}>OKRO</p>
          </div>
        </div>

        <button style={{color:"white", fontSize:"20px", backgroundColor:"green", width:"90vw", justifyContent:"center", alignItems:"center", height:"40px", borderStyle:"none", marginBottom:"25px", borderRadius:"5px", marginLeft:"5%"}}>SHOP NOW</button>
      
        </motion.div> 

    
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{marginTop:"30px"}}
        >
          
           <img src='/images/b3.jpeg'
         
            // layout="fill" // This makes the image fill the container
            // objectFit="cover" 
              alt='heloo' style={{ borderRadius:"10px", height:"189px", width:"92vw", margin:"8px", marginLeft:"4vw"}} /> 
        
          
         <h3 style={{marginLeft:"10px", fontSize:"30px"}}>GROW</h3>
         <p style={{fontSize:"25px", marginLeft:'10px'}}>How we grow crops to healthy standard</p>
         < div style={{height:'1px', width:'90vw', border:"1px solid white", backgroundColor:"green" ,marginLeft:"5%", marginBottom:"30px"}}></div>
         </motion.div> 

         <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{marginTop:"30px"}}
        >
          
           <img src='/images/b3.jpeg'
         
            // layout="fill" // This makes the image fill the container
            // objectFit="cover" 
              alt='heloo' style={{ borderRadius:"10px", height:"189px", width:"92vw", margin:"8px", marginLeft:"4vw"}} /> 
        
          
         <h3 style={{marginLeft:"10px", fontSize:"30px"}}>PROCESSING</h3>
         <p style={{fontSize:"25px", marginLeft:'10px'}}>How we grow process and package products for sales</p>
         < div style={{height:'1px', width:'90vw', border:"1px solid white", backgroundColor:"green" ,marginLeft:"5%", marginBottom:"30px"}}></div>
         </motion.div>  


         <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{marginTop:"30px"}}
        >
          
           <img src='/images/b3.jpeg'
         
            // layout="fill" // This makes the image fill the container
            // objectFit="cover" 
              alt='heloo' style={{ borderRadius:"10px", height:"189px", width:"92vw", margin:"8px", marginLeft:"4vw"}} /> 
        
          
         <h3 style={{marginLeft:"10px", fontSize:"30px"}}>SALES</h3>
         <p style={{fontSize:"25px", marginLeft:'10px'}}>How we get our products to consumers around the world</p>
         < div style={{height:'1px', width:'90vw', border:"1px solid white", backgroundColor:"green" ,marginLeft:"5%", marginBottom:"30px"}}></div>
         </motion.div> 

         <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
         
        >
          <p style={{fontSize:"50px", color:"green", margin:0, padding:0, marginBottom:"5px", textAlign:"center"}}>Our purpose</p>

          <h2 style={{fontSize:"30px",marginLeft:"10px", marginTop:"10px",  marginRight:"10px",lineHeight:"35px" }}>To nourish the world in a<br/> safe, responsible and <br/> sustainable way</h2>
          <p style={{fontSize:"21px",marginLeft:"8px", marginTop:"10px", marginBottom:"40px", marginRight:"10px", lineHeight:"30px"}}>Sitting at the heart of global supply chain, we grow , process and package food crops for sale
            <br/> Every day our team comes to work commiting to: 
            <ul style={{lineHeight:"30px"}}>
              <li>Improving lives through food, nutrition and health</li>
              <li style={{marginTop:"10px"}}>Looking for ways to innovate with purpose</li>
              <li style={{marginTop:"10px"}}> Nourishing our growing world by providing access to life's essentials</li>
            </ul>
           This is how we create new opportunities for our customers to grow, communities to prosper and customers to live well

          </p>
          
          </motion.div> 

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{minHeight:"450px", margin:"6px", width:"92%", marginLeft:"4vw", backgroundColor:"rgb(0,90,0)", borderRadius:"15px"}}  
          > 
           <h1 style={{ fontSize:"40px",color: "rgb(174, 255,30)", marginLeft:"1px", marginTop:"1px", padding:"16px", letterSpacing:"4px"}}>People</h1>

           <p style={{fontSize:"25px",paddingTop:"0px", marginLeft:"20px", color: "rgb(174, 255,30)", marginRight:"10px"}}>With 20 people and starting from Ghana, we work with trusted partners
            to bring together ideas and resources that can nourish lives around the world.
           </p> 
           <button style={{backgroundColor:"green", borderStyle:"none", marginLeft:"20px", borderRadius:"5px", height:"40px", width:"120px", color:"white", fontSize:"18px"}}>Careers</button>
           </motion.div>  


           <motion.div 
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{height:"0px",margin:"6px", marginTop:"30px", width:"96%"}}  
          >

            </motion.div>


           <motion.div 
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{minHeight:"400px",margin:"6px", marginTop:"50px", width:"92%", marginLeft:"4vw", backgroundColor:"rgb(174, 255,60)", borderRadius:"15px", marginTop:"20px"}}  
          >
           <h1 style={{fontSize:"40px",color: "rgb(0,90,0)", marginLeft:"1px", marginTop:"1px", padding:"16px", letterSpacing:"4px"}}>Products</h1>

           <p style={{ fontSize:"25px",paddingTop:"0px", marginLeft:"20px", color: "rgb(0,90,0)", marginRight:"10px"}}>Partnering across the supply chain, we bring varieties offood stuffs and industrial products
            to meet customers' ever evolving needs.
           </p> 
           <button style={{fontSize:"18px",backgroundColor:"green", borderStyle:"none", marginLeft:"20px", borderRadius:"5px", height:"40px", width:"150px", color:"white"}}>Our Products</button>
           </motion.div>  


          
           <motion.div 
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{height:"0px",margin:"6px", marginTop:"30px", width:"96%"}}  
          >

            </motion.div>
           

           <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{minHeight:"450px", margin:"6px", width:"92%", marginLeft:"4vw", backgroundColor:"white", borderRadius:"15px", marginTop:"20px", borderColor:"rgb(0,90,0)", border:"1px solid green", marginBottom:"20px"}}  
          >
           <h1 style={{ fontSize:"40px",color: "rgb(0,90,0)", marginLeft:"1px", marginTop:"1px", padding:"16px", letterSpacing:"4px"}}>Planet</h1>

           <p style={{ fontSize:"25px",paddingTop:"0px", marginLeft:"20px", color: "rgb(0,90,0)", marginRight:"10px"}}>From rich soil of Ghana to local and global shipping lanes,
            we work everyday to bring new sustainable practices, 
            reduce our impact on the planet and take care of people
            
           </p> 
           <button style={{backgroundColor:"green",fontSize:"20px", borderStyle:"none", marginLeft:"20px", borderRadius:"5px", height:"40px", width:"150px", color:"white"}}>Sustainability</button>
           </motion.div>  


          {/*HOW WE NOURISH THE WORLD  */}
  
          <motion.div
            initial={{ opacity: 0, y: 70 }}
           
            transition={{ duration: 1.5 }} 


          
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{marginTop:"40px"}}
            >
          <h2 style={{textAlign:"center", color:"green",marginTop:"20px", fontSize:"30px", marginLeft:"5px"}}>How We Are Working To Nourish The World</h2>
           </motion.div>
         
           <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{height:"400px", width:"96vw", marginLeft:"2vw", backgroundColor:"white", borderRadius:"10px", marginTop:"20px", borderColor:"rgb(0,90,0)", marginBottom:"20px", boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.1)', }}  
          >
           <img
              src="/images/b3.jpeg"
              alt="opoku"
              //layout="fill" // This makes the image fill the container
              //objectFit="cover"
             
              style={{height:"180px", width:"90vw",borderRadius:"10px",justifyContent:"center", alignItems:"center", marginTop:"10px", marginLeft:"10px"}}
            />
            <h3 style={{marginLeft:"10px", fontSize:"25px"}}>Sustainable farming</h3>
            <p style={{marginLeft:"10px", fontSize:"20px"}}>We employ sustainable farming practices to ensure a greener, healthier planet.
              and all the...
            </p>
           </motion.div>  


           <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{height:"400px", width:"96vw", marginLeft:"2vw", backgroundColor:"white", borderRadius:"10px", marginTop:"20px", borderColor:"rgb(0,90,0)", marginBottom:"20px", boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.1)', }}  
          >
           <img
              src="/images/b3.jpeg"
              alt="opoku"
              //layout="fill" // This makes the image fill the container
              //objectFit="cover"
             
              style={{height:"180px", width:"90vw",borderRadius:"10px",justifyContent:"center", alignItems:"center", marginTop:"10px", marginLeft:"10px"}}
            />
            <h3 style={{marginLeft:"10px", fontSize:"25px"}}>Hygyienic packaging</h3>
            <p style={{marginLeft:"10px", fontSize:"20px"}}>We employ hygienic packaging of stuffs under hygyienic conditions to ensure a greener, healthier planet.
              and all the...
            </p>
           </motion.div>  




           <motion.div
            initial={{ opacity: 0, y: 70 }}
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={{height:"470px", width:"96vw", marginLeft:"2vw", backgroundColor:"white", borderRadius:"10px", marginTop:"20px", borderColor:"rgb(0,90,0)", marginBottom:"20px", boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.1)', }}  
          >
           <img
              src="/images/b3.jpeg"
              alt="opoku"
              //layout="fill" // This makes the image fill the container
              //objectFit="cover"
             
              style={{height:"200px", width:"90vw",borderRadius:"10px",justifyContent:"center", alignItems:"center", marginTop:"10px", marginLeft:"10px"}}
            />
            <h3 style={{marginLeft:"10px", fontSize:"25px"}}>Exceptional customer care</h3>
            <p style={{marginLeft:"10px", fontSize:"20px"}}>The health and wellbeing of our customers are our priority
              We take that into account and deliver an exceptional service to our customers
            </p>
           </motion.div>  



      <ReviewsPageX/>
      <div style={{marginTop:"50px"}}>
       <FooterX/>
      </div>


      </div>   
      </div> 

     {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }} 
        >
      
        <h1 style={{textAlign:"center"}}>FROM VARIETIES OF PRODUCTS TO CHOOSE FROM</h1>
      </motion.div>

<div style={{display:"flex", flexDirection:"row"}}>
      {images.map((image, index) => (
      <motion.div
       
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 0.9, y: 0 }} 
       transition={{ duration: 1, delay: 0.5 }} 
     
        style={{display:"flex", flexDirection:"row", marginTop:"5px", justifyContent:"space-evenly", marginLeft:'10px', height:'100px', width:'155px'}}>
    
      <Image src={image.src}
        layout="fill" // This makes the image fill the container
        objectFit="cover"   alt='heloo' style={{ borderRadius:"5px"}} />

     
      </motion.div>
       ))}
       </div>

       */}


  {/*HOW WE NOURISH THE WORLD  */}

   






     
    
    <div>
    {/*  <NourishPage/>

     <OurStoriesPage/>

      <ReviewsPage/>

      <Footer/>  */}
      </div>
    </div>

  );
}
