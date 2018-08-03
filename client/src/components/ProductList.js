import React from 'react'
import NumberFormat from 'react-number-format'
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
          onClick={() => props.addToCart(product)}
          />
        <div className='card-body'>
          <div>
            <span>{productName}</span>
            <i onClick={() => props.addToCart(product)} className="fas fa-cart-plus"></i>
          </div>
          <NumberFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              renderText={value => <span style={{fontSize: '14px'}} className='fomt-weight-light'>{value} THB</span>}
            />
        </div>
      </div> 
    </div>
  )
}


export default ProductList