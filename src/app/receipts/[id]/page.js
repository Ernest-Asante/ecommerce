'use client'
import React, {useContext, useState, useEffect} from 'react'

import Link from 'next/link'
import MyContext from '@/context/mycontext';
import { addDoc, collection, query, where, getDoc, doc , Timestamp} from 'firebase/firestore';
import { db } from '@/firebase-config';
import ReceiptAppBar from '@/app/appbar_receipts/page'



function Receipt({ params }) {
    const { id } = params;

    console.log(id)
   
  


  const [data, setData] = useState(null);   
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'orders', `${id}`); // Reference to the document with the specific ID
        const docSnap = await getDoc(docRef); // Fetch the document data

        if (docSnap.exists()) {
          setData(docSnap.data());
          console.log(docSnap.data()); 
        } else {  
          console.log('No data found'); 
        }
      } catch (error) {
        console.log(error);  
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <ReceiptAppBar/>

      <div style={{marginTop:"65px"}}></div>
      <div style={{display:"flex", flexDirection:"column",minHeight:"720px", marginBottom:"20px",marginLeft:"0px", borderRadius:"5px", width:"96vw", border:"1px solid green"}}>
         <p style={{textAlign:"center"}}>4AS FOODS CO LTD.</p>
       
         <p style={{textAlign:"center"}}>Product Details</p> 
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
          <p style={{marginLeft:"5px"}}><strong>Name</strong></p>
          <p><strong>Quantity</strong></p>
          <p style={{marginRight:"5px",}}><strong>Unit Price</strong></p>
          <p style={{marginRight:"5px",}}><strong>Subtotal</strong></p>

         </div> 
         <div style={{height:"1px", width:"92vw", marginLeft:"5px", backgroundColor:"green", border:"1px solid green"}}></div>
         
        
         {data && data.cart.map((item) => (
         <div style={{display:"flex",flexDirection:"column"}}>
       
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
          <p style={{marginLeft:"5px"}}>{item.name}</p> 
          <p> {item.quantity}</p>  
          <p style={{marginRight:"5px"}}>${item.price}</p> 
          <p style={{marginRight:"5px"}}>${item.subTotal} </p> 

 
         </div> 
         
         </div> 
          
         ))}

         <p style={{ marginLeft:"10px"}}>TOTAL :  $ {data && data.amount}</p> 
        

         <p style={{textAlign:"center"}}>User Delivery Details</p>

        <div style={{marginLeft:"5px", marginBottom:"18px"}}>
         <p style={{padding:0, marginLeft:0}}>Name: {data && data.named}</p>
         <p style={{padding:0, margin:0}}>Contact: {data && data.telephone}</p>
         <p style={{padding:0, marginLeft:0}}>Destination: {data && data.destination}</p>
         <p style={{padding:0, margin:0}}>Second number: {data && data.backupNumber}</p>
         <p style={{padding:0, marginTop:"15px"}}>Payment Mode: {data && data.paymentMode}</p>
         <p style={{padding:0, marginTop:"15px"}}>Paid: {data && data.paid}</p>
         </div>



         


    <div>
   
         <button style={{border:"none",height:"40px", width:"90vw", backgroundColor:"green", color:'white', marginLeft:"10px", marginRight:"8px", marginTop:"25px", borderRadius:"5px", fontSize:"18px", marginBottom:"20px"}} >CANCEL ORDER</button>
    
    </div>

      </div> 
    </div>
  )
}

export default Receipt
