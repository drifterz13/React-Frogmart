import React from 'react'
import NumberFormat from 'react-number-format'
import '../assets/css/CartList.css'

const CartList = ({ order, editAmount, removeItem }) => {
  const { productName, price, imageUrl, amount, _id } = order
  return (
    <div className='cart-wrapped'>
      <div className='cart-top'>
        <img
          className='img-fluid img-thumbnail'
          src={imageUrl}
          alt={`order-${productName}`}
        />
        <div>
          <h5>{productName}</h5>
          <NumberFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              renderText={value => <p className='text-right'>THB {value}</p>}
              />
        </div>
      </div>
      <div className='cart-detail'>
        <span className='row align-items-center justify-content-center ml-0'>
          Quantity:
          <p className='plus ml-2' onClick={() => editAmount('plus', _id)}>+</p>
          <p className='ml-2 mb-0' style={{ fontWeight: '500' }}>{amount}</p>
          <p className='minus ml-2' onClick={() => editAmount('minus', _id)}>-</p>
        </span>
        <p className='text-right mb-0' style={{cursor: 'pointer'}} onClick={() => removeItem(_id)}>Remove</p>
      </div>
    </div>
  )
}

export default CartList