import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Product from './Product'
import Cart from './Cart'
import AuthForm from './AuthForm'
import Profile from './Profile'
import Success from '../components/Success'
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
      <Route path='/product' component={withAuth(Product)} />
      <Route path='/cart' component={withAuth(Cart)} />
      <Route path='/signup' render={() => <AuthForm type='signup' {...props} />} />
      <Route path='/signin' render={() => <AuthForm type='signin' {...props} />} />
      <Route path='/profile' component={withAuth(Profile)} />
      <Route path='/success' component={Success} />
    </Switch>
  </div>
)

export default withRouter(Main)