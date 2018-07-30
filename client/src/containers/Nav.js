import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/css/Nav.css'

class Nav extends Component {
  render() {
    const { cart } = this.props
    return (
      <nav className='navbar navbar-light fixed-top'>
        <div className='container'>
          <Link className="navbar-brand" to="/">
            <i className="fas fa-frog mr-2"></i>
            FrogMart
          </Link>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                <i className='fas fa-user-astronaut mr-2'></i>
                user
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/cart'>
                <i className='fas fa-shopping-cart mr-2'></i>
                {cart.length > 0 && (
                  <span className='badge badge-warning'>{cart.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Nav)