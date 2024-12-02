"use client"
import { createContext, useState } from 'react';

const MyContext = createContext(null);

export const  UserProvider = 
({children}) => {
    const [user, setUser] = useState(null);
   
    const [authKey, setAuthKey] = useState(null); 


    const [cart, setCart] = useState([]);
    const [quantities, setQuantities] = useState({}); 

    // Increase quantity
    const increaseQuantity = (productId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1,
        }));
    };

    // Decrease quantity
    const decreaseQuantity = (productId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
        }));
    };


     // Add to cart
     const addToCart = (product) => {
        const quantity = quantities[product.id] || 0;
        if (quantity > 0) {
            const newItem = { ...product, quantity };
            setCart((prevCart) => {
                // Check if item is already in cart
                const existingItemIndex = prevCart.findIndex((item) => item.id === product.id);
                if (existingItemIndex !== -1) {
                    // Update quantity if item is already in cart
                    const updatedCart = [...prevCart];
                    updatedCart[existingItemIndex].quantity = quantity;

                    return updatedCart; 
                }
                // Add new item to cart
                console.log(newItem)
                return [...prevCart, newItem];
            });
        }
    };

    return (
        <MyContext.Provider
        value ={{ user, setUser, authKey, setAuthKey, 
             cart, 
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            quantities,}}>
        {children}
        </MyContext.Provider> 
    )
}

export default MyContext