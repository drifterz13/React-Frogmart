import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import '../assets/css/Checkout.css'

const Checkout = ({amount, totalPrice}) => {
  return (
    <div className='row justify-content-center mb-5'>
      <div className='card col-md-6'>
        <div className='card-body checkout-body'>
          <div className='checkout-main mb-3'>
          <NumberFormat 
            value={totalPrice} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'THB '} 
            renderText={value => <div>Subtotal ({amount} items): {value}</div>} 
            />
            <p>Shipping: FREE</p>
          </div>
          <span className='checkout-main mb-3'>
            <NumberFormat 
              value={totalPrice} 
              displayType={'text'} 
              thousandSeparator={true} 
              prefix={'THB '} 
              renderText={value => (
                <Fragment>
                  <h5 className='mr-2'>Total:</h5> <h5 style={{fontStyle: 'italic'}}>{value}</h5>
                </Fragment>
              )} />
          </span>
          <div>
            <Link to='/product' className='btn btn-light mr-3'>Continue shopping</Link>
            <button type='button' className='btn btn-primary'>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout