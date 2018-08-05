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

  toggleNav = () => {
    const { $ } = window
    const viewport = $(window).width()
    if (viewport < 995) {
      document.querySelector('.navbar-toggler').click()
    }
  }

  render() {
    const { cart, user } = this.props
    const order = cart.reduce((acc, cur) => acc + cur.amount, 0)
    return (
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            FrogMart
          </Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item' onClick={this.toggleNav}>
                <Link className='nav-link' to='/product'>
                  <i className='fas fa-tshirt mr-1'></i>
                  Product
                </Link>
              </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
              {!this.props.isAuthenticated ? (
                <Fragment>
                  <li className='nav-item' onClick={this.toggleNav}>
                    <Link className='nav-link' to='/signup'>
                      <i className='fas fa-user-plus mr-1'></i>
                      Sign up
                    </Link>
                  </li>
                  <li className='navbar-item' onClick={this.toggleNav}>
                    <Link className='nav-link' to='signin'>
                      <i className='fas fa-sign-in-alt mr-1'></i>
                      Sign in
                    </Link>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className='nav-item' onClick={this.toggleNav}>
                    <Link className='nav-link' to='/profile'>
                      <i className='fas fa-user-ninja mr-1'></i>
                      {user.username}
                    </Link>
                  </li>
                  <li className='nav-item' onClick={this.toggleNav}>
                    <Link className='nav-link' to='/cart'>
                      <i className='fas fa-shopping-cart mr-2'></i>
                      {order > 0 && (
                        <span className='badge badge-warning'>{order}</span>
                      )}
                    </Link>
                  </li>
                  <li className='nav-item' onClick={this.toggleNav}>
                    <a className='nav-link' onClick={this.loggedOut}>
                      <i className='fas fa-sign-out-alt mr-1'></i>
                      Logout
                    </a>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { logout })(Nav)