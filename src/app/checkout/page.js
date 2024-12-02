'use client'
import React, {useContext, useState, useEffect} from 'react'
import CheckoutAppBar from '../appbar_checkout/page'
import PaystackPop from '@paystack/inline-js'
import Link from 'next/link'
import MyContext from '@/context/mycontext';
import { addDoc, collection, query, where, getDocs , Timestamp} from 'firebase/firestore';
import { db } from '@/firebase-config';
import {ToastContainer, toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

function Checkout() {

    // State to hold the selected payment option
  const [paymentOption, setPaymentOption] = useState('');  

  const router = useRouter(); 


  // Handler to update state based on the user's selection
  const handlePaymentChange = (event) => {
    setPaymentOption(event.target.value);
  };


  const {
    cart, authKey
  } = useContext(MyContext) 


  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
 
  const [email, setEmail] = useState(authKey);
  const [amount, setAmount] = useState(totalPrice);
  const [backupNumber, setBackupNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [data, setData] = useState(''); 
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [userId, setUserId] = useState(null);




   useEffect(() => {

   const fetchData = async () =>
   {
    try {
     const ref = collection(db, 'profile')

     const q = query(ref, where('email', '==', email))

     const querySnapshot = await getDocs(q); 
     if(!querySnapshot.empty) {

      setName(querySnapshot.docs[0].data().name)
      setPhone(querySnapshot.docs[0].data().phone)
      setUserId(querySnapshot.docs[0].data().userId) 
      console.log(querySnapshot.docs[0].data())
    //  const docData = querySnapshot.docs[0].data();  
      
      console.log(data) 
     } else {
      console.log('no data found')  
     }
    } catch (error) {
      console.log(error)
    }
   } 

      fetchData();
   }, []);

 
  const handleCheckout = (e) => {  

    const paid = paymentOption == 'before' ? 'Yes' : 'No'
    const paymentMode = paymentOption == 'before' ? 'Payment Before Delivey' : 'Payment After delivery'

    async function addData(){

   //   const filteredCart = cart.map(({image, ...rest}) => rest)

      const filteredCart = cart.map(({ image, ...rest }) => ({
        ...rest,                   
        subTotal: rest.price * rest.quantity 
      }));

    //  const timestamp = new Date();

      try {
        console.log(phone)

      const ref = collection(db, "orders");
     await addDoc(ref,{
          email:email,
          telephone:phone,
          backupNumber: backupNumber,
          amount: amount,
          destination: destination, 
          paymentMode: paymentMode,  
          Paid: paid, 
          named:name,
          cart: filteredCart,
          createdAt:Timestamp.now().toDate(), 
          userId:userId,
         
         })


         //alert(" successfull...Thank you")
         toast.success('successful', {position:"top-right", autoClose: 3000}) 
         router.push('/profile')
    
        
        } catch(error) {
           // An error occurred   
           // ...
           console.log(error)
           //alert(" An error occurred...try again", error);
           toast.error('an error occured...try  again') 
         };

    }

   if(paymentOption == 'before'){ 

   

    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: "pk_test_a6b02861ff230834be674fb8d1e1aa556e1b9ef0",
      amount: amount * 100,
      email: email,
      channels: ["mobile_money"], 
      onSuccess(transaction) {
       
        addData()
       
       
    
       
       
      },
      onCancel() {
       // alert(" Transaction cancelled")
        toast.error('Transaction cancelled') 
      }
    })
  } else {
     addData()
  }
}

  return (
    <div>
       <ToastContainer/>
      <CheckoutAppBar/>

      <div style={{marginTop:"65px"}}></div>
      <div style={{display:"flex", flexDirection:"column",minHeight:"720px", marginBottom:"20px",marginLeft:"2px", borderRadius:"5px", width:"96vw", border:"1px solid green"}}>
         <p style={{textAlign:"center"}}>4AS FOODS CO LTD.</p>
         <p style={{textAlign:"center"}}>Product Details</p> 
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
          <p style={{marginLeft:"5px"}}><strong>Name</strong></p>
          <p><strong>Quantity</strong></p>
          <p style={{marginRight:"5px",}}><strong>Unit Price</strong></p>
          <p style={{marginRight:"5px",}}><strong>Subtotal</strong></p>

         </div>
         <div style={{height:"1px", width:"92vw", marginLeft:"5px", backgroundColor:"green", border:"1px solid green"}}></div>
         
         {cart.map((item) => (
         <div key={item.id} style={{display:"flex",flexDirection:"column"}}>
       
         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }}>
          <p style={{marginLeft:"5px"}}>{item.name}</p> 
          <p> {item.quantity}</p> 
          <p style={{marginRight:"5px"}}>${item.price.toFixed(2)}</p> 
          <p style={{marginRight:"5px"}}>${(item.price * item.quantity).toFixed(2)} </p> 


         </div>
         
         </div> 
           ))}
        

         < p style={{marginLeft:"5px"}}>TOTAL :  ${totalPrice.toFixed(2)}</p> 
        

         <p style={{textAlign:"center"}}>User Delivery Details</p>

        <div style={{marginLeft:"5px", marginBottom:"18px"}}>
         <p style={{padding:0, marginLeft:0, fontSize:"20px"}}>Name: {name && name}</p>
         <p style={{padding:0, margin:0, fontSize:"20px"}}>Contact: {phone && phone}</p>
         </div>
        <p style={{marginLeft:"8px", fontSize:"20px"}}>Enter your destination: </p>
         <input
              type="email"
              placeholder="Enter destination address"  
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{width:"90vw", border:"1px solid green", height:"40px", marginLeft:"6px", borderRadius:"5px"}}
          />

         <p style={{marginLeft:"8px", marginTop:"25px", fontSize:"20px"}}>Enter backup contact: </p>
         <input
              type="email"
              placeholder="Enter backup number"  
              value={backupNumber}
              onChange={(e) => setBackupNumber(e.target.value)}
              style={{width:"90vw", border:"1px solid green", height:"40px", marginLeft:"6px", borderRadius:"5px", marginTop:"0px"}}
          />



          <p style={{textAlign:"center", fontSize:'20px', marginTop:"30px", marginBottom:"30px"}}>Payment Options</p> 

          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
          {/* Payment Before Delivery Option */}
          <strong>
          <label>
            <input
              type="checkbox" 
              value="before"
              checked={paymentOption === 'before'} 
              onChange={handlePaymentChange}
              style={{marginLeft:"10px", fontSize:'18px'}}  
            />
            Pay Now
          </label>
          </strong>
    
          {/* Payment After Delivery Option */}
          <strong>
          <label style={{marginLeft:"10px"}}>
            <input 
              type="checkbox"
              value="after"
              checked={paymentOption === 'after'}
              onChange={handlePaymentChange}
              style={{marginLeft:"15px", fontSize:'18px'}}
            />
             After Delivery
          </label>
          </strong>
    
          {/* 
          <div style={{ marginLeft: '20px' }}>
            <h3>Selected Payment Option: {paymentOption === 'before' ? 'Before Delivery' : paymentOption === 'after' ? 'After Delivery' : 'None'}</h3>
          </div>  
          */}
        </div>


    <div>
   
         <button style={{border:"none",height:"50px", width:"90vw", backgroundColor:"green", color:'white', marginLeft:"10px", marginRight:"8px", marginTop:"25px", borderRadius:"5px", fontSize:"18px", marginBottom:"20px"}} onClick={handleCheckout}>CHECKOUT</button>
    
    </div>

      </div>
    </div>
  )
}

export default Checkout
