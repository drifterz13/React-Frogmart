import React, { Component } from 'react'
import api from '../services/api'

class PaymentModal extends Component {
  state = {
    errros: null
  }

  handleSubmit = e => {
    e.preventDefault()
    const checkoutForm = document.getElementById('checkout-form')
    const { Omise } = window
    Omise.setPublicKey('pkey_test_5csoj7uqs1o8uhko7r6')
    const cardObject = {
      name: document.querySelector('[data-name="nameOnCard"]').value,
      number: document.querySelector('[data-name="cardNumber"]').value,
      expiration_month: document.querySelector('[data-name="expiryMonth"]').value,
      expiration_year: document.querySelector('[data-name="expiryYear"]').value,
      security_code: document.querySelector('[data-name="securityCode"]').value
    }
    Omise.createToken('card', cardObject, (statusCode, response) => {
      if (statusCode === 200) {
        console.log(response)
        const payload = {tokenId: response.id}
        const url = 'http://localhost:5000/api/checkout'
        checkoutForm.omiseToken.value = response.id
        api(url).payment.checkout(payload).then(() => {
          const { $ } = window
          $('#checkoutModal').modal('toggle')
          this.props.checkout()
        })
      } else {
        const cutMessage = response.message.split(',')[0]
        this.setState({ errors: cutMessage })
      }
    })
  }

  render () {
    const { errors } = this.state
    const formClass = errors ? 'form-control is-invalid' : 'form-control'
    return (
      <div className='modal fade' id='checkoutModal' tabIndex='-1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header' style={{backgroundColor: '#fbfbfb'}}>
              <h5 className='modal-title'>FrogMart Payment</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <p>
                <img src='http://bootstrap-ecommerce.com/main/images/icons/pay-visa.png' alt='visa' />
                <img className='mx-1' src='http://bootstrap-ecommerce.com/main/images/icons/pay-mastercard.png' alt='mastercard' />
                <img src='http://bootstrap-ecommerce.com/main/images/icons/pay-american-ex.png' alt='american-ex' />
              </p>
              <form id='checkout-form' onSubmit={this.handleSubmit} >
                {errors && (
                  <div className='alert alert-danger text-center p-1'>{errors}</div>
                )}
                <div className='form-group'>
                  <label>Name on card</label>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fa fa-user'></i>
                    </span>
                    <input type='text' data-name='nameOnCard' className={formClass} placeholder='Full Name' />
                  </div>
                </div>

                <div className='form-group'>
                  <label>Card Number</label>
                  <div className='input-group'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='fa fa-credit-card'></i>
                      </span>
                    </div>
                    <input type='text' data-name='cardNumber' className={formClass} placeholder='••••••••••••••••' />
                    </div>
                </div>

                <div className='row'>
                  <div className='col-sm-8'>
                    <div className='form-group'>
                      <label>
                        <span className='hidden-xs'>Expiration</span>
                      </label>
                      <div className='form-inline'>
                        <select className={formClass} data-name='expiryMonth' style={{width: '45%'}}>
                          <option value=''>MM</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                          <option value='6'>6</option>
                          <option value='7'>7</option>
                          <option value='8'>8</option>
                          <option value='9'>9</option>
                          <option value='10'>10</option>
                          <option value='11'>11</option>
                          <option value='12'>12</option>
                        </select>
                        <span style={{width: '10%', textAlign: 'center'}}> / </span>
                        <select className={formClass} data-name='expiryYear' style={{ width: '45%' }}>
                          <option value=''>YYYY</option>
                          <option value='2018'>2018</option>
                          <option value='2019'>2019</option>
                          <option value='2020'>2020</option>
                          <option value='2021'>2021</option>
                          <option value='2022'>2022</option>
                          <option value='2023'>2023</option>
                          <option value='2024'>2024</option>
                          <option value='2025'>2025</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='form-group'>
                      <label data-toggle='tooltip' title='' data-original-title='3 digits code on back side of the card'>
                        CVV
                        <i className='fa fa-question-circle'></i>
                      </label>
                      <input type='text' data-name='securityCode' className={formClass} />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <button className='btn btn-primary'>Checkout</button>
                </div>
                <input type='hidden' name='omiseToken' />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PaymentModal