import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from '../components/CartList'

class Cart extends Component {
  state = {
    cart: []
  }

  componentDidMount() {
    const cart = this.props.cart.map(c => ({ ...c }))
    this.setState({ cart })
  }

  render() {
    return (
      <div className='container' style={{ marginTop: '100px', height: '100%' }}>
        <div className='row justify-content-center'>
          {this.state.cart.map((c, i) => (
            <div class="card col-md-8 mb-3">
              <div class="card-body col-md-4" style={{ maxWidth: '100%' }}>
                <CartList key={i} order={c} />
              </div>
            </div>
          ))}
        </div>
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