import React from 'react'
import Link from "next/link";

function ProductList() {
  const productId = 100;
  return (
    <>
    <div>
      <h2>Product List</h2>
      <h3><Link href="/products/1">Product 1</Link></h3>
      <h3><Link href="/products/2">Product 2</Link></h3>
      <h3><Link href="/products/3" replace>Product 3</Link></h3>
      <h3><Link href={`/products/${productId}`}>Product {productId}</Link></h3>
    </div>

    <div>
       <Link href="/">HOMEPAGE</Link>
    </div>
    </>
  )
}

export default ProductList
