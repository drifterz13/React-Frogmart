import React from 'react'
import '../assets/css/CartList.css'

const CartList = ({ order, editAmount }) => {
  const { productName, price, imageUrl, amount, _id } = order
  return (
    <div className='cart-wrapped'>
      <div>
        <img
          className='img-fluid img-thumbnail'
          src={imageUrl}
          alt={`order-${productName}`}
        />
        <span className='row align-items-center justify-content-center mt-2'>
          Quantity: 
          <p className='plus ml-2' onClick={() => editAmount('plus', _id)}>+</p>
          <p className='ml-2 mb-0' style={{fontWeight: '500'}}>{amount}</p> 
          <p className='minus ml-2' onClick={() => editAmount('minus', _id)}>-</p>
        </span>
      </div>
      <div className='cart-detail'>
        <div>
          <h5>{productName}</h5>
          <p>THB {price}</p>
        </div>
        <p style={{ textAlign: 'right', marginBottom: '9px' }}>Remove</p>
      </div>
    </div>
  )
}

export default CartList