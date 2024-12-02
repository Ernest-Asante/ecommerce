import React from 'react'
import {Metadata} from 'next'

export const generateMetadata = ({params})  =>{
 return {
    title : `Product ${params.productid}`,
 }
}

function ProductDetails({params}) {
  return (
    <div>
      <h2>Details about product {params.productid}</h2>
    </div>
  )
}

export default ProductDetails
