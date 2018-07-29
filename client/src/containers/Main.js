import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Product from './Product'
import Cart from './Cart'
import Nav from './Nav'

const divStyle = {
  height: '100vh',
  maxHeight: '100%',
  overflow: 'auto',
  backgroundColor: '#efefef'
}

const Main = (props) => (
  <div style={divStyle}>
    <Nav />
    <Switch>
      <Route exact path='/' render={() => <Home {...props} />} />
      <Route exact path='/product' render={() => <Product {...props} />} />
      <Route exact path='/cart' render={() => <Cart {...props} />} />
    </Switch>
  </div>
)

export default withRouter(Main)