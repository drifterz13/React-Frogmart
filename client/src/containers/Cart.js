import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from '../components/CartList'
import Checkout from '../components/Checkout'
import * as actions from '../stores/actions/cart'
import '../assets/css/Cart.css'

class Cart extends Component {
  state = {
    cart: [],
    totalPrice: 0,
    totalItem: 0
  }

  handleOrderChange() {
    const cart = this.props.cart.map(c => ({ ...c }))
    const totalPrice = cart.reduce((acc, cur) => acc + (cur.price * cur.amount), 0)
    const totalItem = cart.reduce((acc, cur) => acc + cur.amount, 0)
    this.setState({ cart, totalPrice, totalItem })
  }

  componentDidMount() {
    this.handleOrderChange()
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.cart) !== JSON.stringify(this.props.cart)) {
      this.handleOrderChange()
    }
  }

  configAmount(type, id) {
    type === 'plus' ? this.props.plusProduct(id) : this.props.minusProduct(id)
  }

  removeItem = id => this.props.removeFromCart(id);
  

  confirmOrder() {
    const order = []
    this.props.cart
      .filter(item => item.amount !== 0)
      .forEach(item => {
        order.push({
          productId: item._id,
          amount: item.amount,
          price: item.price
        })
      })
    const totalPrice = order.reduce((acc, cur) => acc + (cur.price * cur.amount), 0)
    const payload = {
      order,
      user: this.props.user._id,
      totalPrice
    }
    this.props.submitOrder(payload).then(() => {
      this.props.history.push('/success')
    })
  }

  render() {
    const { cart, totalPrice, totalItem } = this.state
    return (
      <div className='container main-cart'>
        <div className='row justify-content-center'>
          {cart.map(c => (
            <div key={c._id} className='card col-md-8 mb-3'>
              <div className='card-body col-md-4 cart-item-body'>
                <CartList 
                  order={c} 
                  removeItem={id => this.removeItem(id)}
                  editAmount={(type, id) => this.configAmount(type, id)}/>
              </div>
            </div>
          ))}
        </div>
        <Checkout 
          amount={totalItem} 
          totalPrice={totalPrice} 
          confirm={() => this.confirmOrder()}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, actions)(Cart)