'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log('placing your order');
        router.push('/')
    }
  return (
    <div>
      <h1>ORDER PRODUCT</h1>
      <button   onClick={handleClick}>PLACE ORDER</button>
    </div>
  )
}

export default OrderProduct
