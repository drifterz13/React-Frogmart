import { combineReducers } from 'redux'
import cart from './cart'
import products from './product'
import auth from './auth'

export default combineReducers({
  products,
  cart,
  auth
})