import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Product from './Product'
import Cart from './Cart'
import AuthForm from './AuthForm'
import { withAuth } from '../hoc/AuthHoc'
import Nav from './Nav'

const divStyle = {
  height: '100vh',
  maxHeight: '100%',
  overflow: 'auto',
  backgroundColor: '#fff'
}

const Main = (props) => (
  <div style={divStyle}>
    <Nav {...props} />
    <Switch>
      <Route exact path='/' render={() => <Home {...props} />} />
      <Route exact path='/product' component={withAuth(Product)} />
      <Route exact path='/cart' component={withAuth(Cart)} />
      <Route exact path='/signup' render={() => <AuthForm type='signup' {...props} />} />
      <Route exact path='/signin' render={() => <AuthForm type='signin' {...props} />} />
    </Switch>
  </div>
)

export default withRouter(Main)