import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../stores/actions/auth'
import '../assets/css/Nav.css'

class Nav extends Component {
  
  loggedOut = e => {
    this.props.logout()
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  render() {
    const { cart } = this.props
    const order = cart.reduce((acc, cur) => acc + cur.amount, 0)
    return (
      <nav className='navbar navbar-light fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <i className='fas fa-frog mr-2'></i>
            FrogMart
          </Link>
          <ul className='navbar-nav'>
            {!this.props.isAuthenticated ? (
              <Fragment>
                <li className='nav-item'>
                  <Link className='nav-link' to='/signup'>
                    <i className='fas fa-user-plus mr-1'></i>
                    Sign up
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link className='nav-link' to='signin'>
                    <i className='fas fa-sign-in-alt mr-1'></i>
                    Sign in
                  </Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li className='nav-item'>
                  <Link className='nav-link' to='/cart'>
                    <i className='fas fa-shopping-cart mr-2'></i>
                    {order > 0 && (
                      <span className='badge badge-warning'>{order}</span>
                    )}
                  </Link>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' onClick={this.loggedOut}>
                    <i className='fas fa-sign-out-alt mr-1'></i>
                    Logout
                  </a>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { logout })(Nav)