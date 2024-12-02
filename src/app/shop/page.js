"use client"
import React, {useState, useContext} from 'react'
import ShopAppBar from '../appbar_shop/page'
import ReviewsPageX from '../reviewx/page'
import MyContext from '@/context/mycontext';
 

const products = [
  {
      id: 1,
      name: 'OKRO',
      image: '/images/b3.jpeg', // Make sure to replace with actual paths to your images
      price: 10,
  },
  {
      id: 2,
      name: 'PEPPER',
      image: '/images/b2.jpeg',
      price: 20,
  },
  {
      id: 3,
      name: 'TOMATOES',
      image: '/images/b1.jpeg',
      price: 15,
  },
  {
      id: 4,
      name: 'RICE',
      image:'/images/b4.jpeg',
      price: 25,
  },
];

function Shop() {

 

  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    quantities,} = useContext(MyContext) 

   


  return (
    <div style={{padding:0,margin:0}}>
      <ShopAppBar/> 
       <div style={{marginTop:"60px"}}></div>  
    
       
       <div style={styles.catalogueContainer}>
       {products.map((product) => (
           <div key={product.id} style={styles.productCard}>
               <img src={product.image} alt={product.name} style={styles.image} />
               <h3 style={{fontSize:"20px"}}>{product.name}</h3>
               <p style={{fontSize:"20px", padding:0, marginTop:"0px"}}> Price: ${product.price}</p>

               {/* Quantity Controls */}
               <div style={styles.quantityControls}>
                   <button onClick={() => decreaseQuantity(product.id)} style={{width:"20vw", height:"30px", fontSize:"20px"}}><strong>-</strong></button>
                   <div style={styles.quantityDisplay}><strong>{quantities[product.id] || 0}</strong></div>
                   <button onClick={() => increaseQuantity(product.id)} style={{width:"20vw", height:"30px", fontSize:"20px"}}><strong>+</strong></button>
               </div>

               {/* Add to Cart Button */}
               <button
                   style={styles.addToCartButton}
                   onClick={() => addToCart(product)} 
               >
                   Add to Cart
               </button>
           </div>  
       ))}
   </div>


    

      <ReviewsPageX/> 
    </div> 
  )
}

export default Shop


const styles = {
  catalogueContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(92vw, 1fr))', // Ensures 2 items per row if possible
      gap: '10px', // Spacing between the items
     
  },
  productCard: {
      width: '92vw', // Each item takes about 48% of the viewport width
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  image: {
      width: '85%',
      height: 'auto', 
      objectFit: 'cover',
      borderRadius: '10px',
  },
  quantityControls: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '10px',
  },
  quantityDisplay: {
      margin: '0 10px',
      fontSize: '20px',
      minWidth: '30px',
      textAlign: 'center',
      marginRight:"12vw",
      marginLeft:"12vw",
  },
  addToCartButton: {
      backgroundColor: '#007bff',
      fontSize:"20px",
      color: 'white',
      height:"40px",
      backgroundColor:"green",
      border: 'none',
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      width:"80%",
      marginBottom:"20px",
       marginTop:"20px"
  },
};

