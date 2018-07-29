import { combineReducers } from 'redux'
import cart from './cart'
import products from './product'

export default combineReducers({
  products,
  cart
})