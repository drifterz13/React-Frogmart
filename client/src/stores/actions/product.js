import { FETCH_PRODUCT, ADD_TO_CART } from '../../types'
import api from '../../services/api'

const fetchProduct = (products) => {
  return {
    type: FETCH_PRODUCT,
    payload: products
  }
}

const addProduct = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const getProducts = () => {
  return dispatch => {
    const url = 'http://localhost:5000/api/products'
    return api(url).product.getAll().then(res => {
      const products = res.data
      console.log(products)
      dispatch(fetchProduct(products))
    })
  }
}

export const addProductToCart = product => {
  return dispatch => dispatch(addProduct(product))
}

