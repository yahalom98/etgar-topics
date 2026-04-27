import React from 'react'
import './Products.css';

export default function Products({ title, price, image, description, id }) {
  return (
    <div>
      <div className="product-card">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}
