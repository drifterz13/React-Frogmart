import { PLUS_ITEM, MINUS_ITEM, ADD_TO_CART, SUBMIT_ORDER, REMOVE_FROM_CART } from '../../types'
import api from '../../services/api'

const addProduct = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

const plusCartProduct = (id) => {
  return {
    type: PLUS_ITEM,
    id
  }
}

const minusCartProduct = (id) => {
  return {
    type: MINUS_ITEM,
    id
  }
}

const clearOrder = () => {
  return {
    type: SUBMIT_ORDER
  }
}
const removeItem = id => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const addProductToCart = product => {
  return dispatch => dispatch(addProduct(product))
}

export const plusProduct = id => dispatch => dispatch(plusCartProduct(id))
export const minusProduct = id => dispatch => dispatch(minusCartProduct(id))
export const removeFromCart = id => dispatch => dispatch(removeItem(id))
export const cancelOrder = () => dispatch => dispatch(clearOrder())

export const submitOrder = orders => {
  const url = 'http://localhost:5000/api/order'
  return dispatch => {
    return api(url).order.confirmOrder(orders).then(() => {
      dispatch(clearOrder())
    })
  }
}

