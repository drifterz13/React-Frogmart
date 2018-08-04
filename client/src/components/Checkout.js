import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import PaymentModal from './PaymentModal'
import '../assets/css/Checkout.css'

class Checkout extends Component {

  handleTooltip = () => {
    const { $ } = window
    if (this.props.totalPrice === 0) {
      document.getElementById('checkout').addEventListener('mouseleave', function(e) {
        $('#checkout').tooltip('hide')
      })
      $('#checkout').tooltip('toggle')
    }
  }

  handleCheckout = e => {
    this.props.confirm()
    console.log('Success Checkout!')
  }

  render() {
    const { amount, totalPrice } = this.props
    return (
      <div className='row justify-content-center mb-5' style={{ flexWrap: 'wrap' }}>
        <div className='card col-6 checkout-wrapped'>
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
                    <h5 className='mr-2'>Total:</h5> <h5>{value}</h5>
                  </Fragment>
                )} />
            </span>
            <div className='checkout-button-wrapped'>
              <Link to='/product' className='btn btn-light mr-3'>Continue shopping</Link>
              <span 
                id='checkout' 
                tabIndex='0' 
                data-toggle='tooltip' 
                title={this.props.totalPrice === 0 ? 'You dont have items in your cart' : ''}
                onMouseEnter={this.handleTooltip}
                >
                <button
                  className='btn btn-primary'
                  style={totalPrice === 0 ? {cursor: 'not-allowed'} : {}}
                  disabled={totalPrice === 0 ? true : false}
                  type='button'
                  data-toggle='modal'
                  data-target='#checkoutModal'
                >
                  Proceed to checkout</button>
              </span>
            </div>
          </div>
        </div>
        <PaymentModal checkout={this.handleCheckout} />
      </div>

    )
  }
}

export default Checkout