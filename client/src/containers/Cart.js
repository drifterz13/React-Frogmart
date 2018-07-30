import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from '../components/CartList'
import Checkout from '../components/Checkout'
import '../assets/css/Cart.css'

class Cart extends Component {
  state = {
    cart: [],
    totalPrice: 0
  }

  componentDidMount() {
    const cart = this.props.cart.map(c => ({ ...c }))
    const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0)
    this.setState({ cart, totalPrice })
  }

  render() {
    const { cart, totalPrice } = this.state
    return (
      <div className='container main-cart'>
        <div className='row justify-content-center'>
          {this.state.cart.map(c => (
            <div key={c._id} className='card col-md-8 mb-3'>
              <div className='card-body col-md-4 cart-item-body'>
                <CartList order={c} />
              </div>
            </div>
          ))}
        </div>
        <Checkout amount={cart.length} totalPrice={totalPrice} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)