
//import { motion } from 'framer-motion'

import * as motion from "framer-motion/client"

function Motion() {
  return (
    <>
    < motion.div

     style={{height:200, width: 200, backgroundColor: "lightgreen"}}
       initial={{
        opacity: 0, y: -50, scale:0.5}}
      animate={{
        opacity: 1, y:0, scale: 1
        }}
      transition={{
        duration: 0.5
      }}
    >

    <h3 style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>FRAMER MOTION</h3>
      
    </motion.div>

< motion.div

style={{height:200, width: 200, backgroundColor: "lightblue", top: 10}}
 
initial={{
    opacity: 0, y: -50, scale:0.5}} 

   animate={{
    opacity: 1, y:0, 
    scale: [1, 1, 0.5, 1, 1], 
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "0%"],
  }}
  transition={{ 
    duration: 3
  }}

>

<h3 style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>FRAMER MOTION</h3>
 
</motion.div>

< motion.div

style={{height:200, width: 200, backgroundColor: "lightblue", top: 10}}
 
initial={{
    opacity: 0, y: -50, scale:0.5}} 

   animate={{
    opacity: 1, y:0, 
    scale: [1, 1, 1, 1, 1], 
    rotate: [0, 0, 270, 270,],
    borderRadius: ["20%", "20%", "50%", "50%", ],
  }}
  transition={{ 
    duration: 3
  }}


>

<h3 style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>FRAMER MOTION</h3>
 
</motion.div>

< motion.div

style={{height:200, width: 200, backgroundColor: "lightgreen"}}
initial={{ opacity: 0,y: -50, scale:0.5 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
viewport={{ once: true }}
transition={{ 
    duration: 2
  }}
>

<h3 style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>FRAMER MOTION</h3>
 
</motion.div>
</>
  )
}

export default Motion
