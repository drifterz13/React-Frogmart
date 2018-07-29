import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Product from './Product'
import Cart from './Cart'
import Nav from './Nav'

const Main = (props) => (
  <div>
    <Nav />
    <Switch>
      <Route exact path='/' render={() => <Home {...props} />} />
      <Route exact path='/product' render={() => <Product {...props} />} />
      <Route exact path='/cart' render={() => <Cart {...props} />} />
    </Switch>
  </div>
)

export default withRouter(Main)