import React from 'react'
import '../assets/css/CartList.css'

const CartList = ({order}) => {
  const { productName, price, imageUrl } = order
  return (
    <div className='cart-wrapped'>
      <img 
        className='img-fluid img-thumbnail'
        src={imageUrl} 
        alt={`order-${productName}`} 
        />
      <div className='cart-detail'>
        <div>
          <h5>{productName}</h5>
          <p>THB {price}</p>
        </div>
        <p style={{textAlign: 'right'}}>Remove</p>
      </div>
    </div>
  )
}

export default CartList