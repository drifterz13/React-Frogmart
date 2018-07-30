import React from 'react'
import '../assets/css/ProductList.css'

const ProductList = ({product, ...props}) => {
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
            <i onClick={() => props.addToCart(product)} className="fas fa-cart-plus"></i>
          </div>
          <span>{price} THB</span>
        </div>
      </div> 
    </div>
  )
}


export default ProductList