import React from 'react'
import { Accordion, AccordionSummary , AccordionDetails, Typography} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

function Faqs() {

    const faqData =  [
       {
        question: 'What payment methods do you accept?',
         answer: 'We accept all major credit cards and debit cards, mobile money and bank transfers'
       },
       {
        question: 'How can i track my orders?',
         answer: 'Once your order has been shipped, you will receive an email of time of arrival with the tracking number to monitor'
       },
       {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy. Items must be unused and in their original package'

       },
       {
        question:"How long does shipping takes?",
        answer:' Shipping time varies by location. Typically, orders are delivered within 3-7 business days within Ghana'
       },
       {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship worldwide. Shipping costs and delivery times will vary depending on destination'
       },
       {
        question:' Do you offer discounts and promotion?',
        answer: 'You can reach out to our customer support team via email at support@example.com or by phone (123) 456-7890'
       }
    ]
  return (
    <div style={{margin:"10px", marginTop:"25px", marginRight:"10px"}}>
    <p style={{fontSize:"36px", margin:0, }}><strong>FAQs</strong></p>
    <div style={{border:"1px solid green", width:"94vw", height:"1px", color:"green", marginRight:"10px", }}> </div>
   
   <p><strong>FREQUENTLY ASKED QUESTIONS</strong></p>

   <div>
    {faqData.map((item, index) => ( 
        <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
               <Typography>
                 {item.question}
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {item.answer}
                </Typography>
            </AccordionDetails>

        </Accordion>
    ))}
   </div>

   </div>
  )
}

export default Faqs