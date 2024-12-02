import React from 'react'

export const metadata = {
  title:"About Codevolution"
}

function About() {
  return (
    <div style={{margin:"10px", marginTop:"25px"}}>
      <p style={{fontSize:"36px", margin:0, }}><strong>About Us</strong></p>
      <div style={{border:"1px solid green", width:"94vw", height:"1px", color:"green", marginRight:"5px", }}> </div>
     

      <p  style={{ fontSize:"22px" , marginRight:"25px",  lineHeight: "30px"}}>We are 4AS foods limited. We specialized in growing, processing and selling food products for local and 
                international sales. We are also dedicted to increasing nutritional value and food security in the country
        </p>
    </div>
  )
}

export default About
