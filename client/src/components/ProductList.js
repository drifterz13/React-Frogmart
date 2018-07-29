import React from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'

const ProductList = ({product}) => {
  const { productName, imageUrl, price } = product
  return (
    <div className='product-list col-md-4 col-sm-12'>
      <div className='card'>
        <img 
          className='card-img-top img-fluid img-thumbnail' 
          src={imageUrl} 
          alt={`img-${productName}`} 
          />
        <div className='card-body'>
          <div>
            <span className='lead'>{productName}</span>
            <Link to='/cart'>
              <i className="fas fa-cart-plus"></i>
            </Link>
          </div>
          <span>{price} THB</span>
        </div>
      </div> 
    </div>
  )
}


export default ProductList