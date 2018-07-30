import { PLUS_ITEM, MINUS_ITEM, ADD_TO_CART } from '../../types'

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

export const addProductToCart = product => {
  return dispatch => dispatch(addProduct(product))
}

export const plusProduct = id => dispatch => dispatch(plusCartProduct(id))

export const minusProduct = id => dispatch => dispatch(minusCartProduct(id))

