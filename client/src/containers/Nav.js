import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light fixed-top">
        <div className='container'>
          <Link className="navbar-brand" to="/">
            <i className="fas fa-frog mr-2"></i>
            FrogMart
          </Link>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>User</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                <i className="fas fa-shopping-cart mr-2"></i>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav