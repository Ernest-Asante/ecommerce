"use client"
import React,{useContext} from 'react'
import CartAppBar from '../appbar_cart/page'
import Link from 'next/link'
import MyContext from '@/context/mycontext';


function Cart() {

   const {
      cart,
    } = useContext(MyContext) 


    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

   

  return (
    <div>
     <CartAppBar/>

     <div style={{marginTop:"62px"}}></div> 

     {cart.map((item) => (
      <>
     <div key={item.id} style={{display:"flex",  marginLeft:"5px",flexDirection:"column", marginTop:"15px"}}>
        <div style={{display:"flex", flexDirection:"row", left:0, marginTop:"1px", height:"130px", width:"97vw", border:"1px solid green", borderRadius:"10px"}}>
        <img src={item.image}
           alt='heloo' style={{ borderRadius:"50%", height:"100px", width:"30vw",marginTop:"10px", marginLeft:"5px"}} /> 
     
     <div style={{display:"flex", flexDirection:"column", marginLeft:"10px", marginRight:"5px"}}>
         <h3 style={{margin:4, padding:0}}>Item : {item.name}</h3>
         <h3 style={{margin:4, padding:0}}>Quantity : {item.quantity}</h3>
         <h3 style={{margin:4, padding:0}}>Unit price :  ${item.price.toFixed(2)}</h3> 
         <h3 style={{marginTop:10,marginLeft:"4px", marginBottom:"10px"}}> Subtotal : ${(item.price * item.quantity).toFixed(2)}</h3> 
      </div>
   </div>  
   </div>
   </>
     ))}



<h2>TOTAL:  ${totalPrice.toFixed(2)}</h2> 
   <div>
     <Link href="/checkout"> 
         <button style={{border:"none",height:"50px", width:"94vw", backgroundColor:"green", color:'white', marginLeft:"10px", marginRight:"8px", marginTop:"18px", borderRadius:"5px", fontSize:"18px"}}>PROCEED TO CHECKOUT</button>
     </Link>
    
    </div>

    </div> 
  )
}

export default Cart
