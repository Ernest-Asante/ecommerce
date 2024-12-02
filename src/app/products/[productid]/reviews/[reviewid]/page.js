import React from 'react'

function ReviewDetails({params}) {
  return (
    <div>
      <h2>Review {params.reviewid} for product {params.productid}</h2>
    </div>
  )
}

export default ReviewDetails
