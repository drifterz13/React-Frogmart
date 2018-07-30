import { FETCH_PRODUCT } from '../../types'
import api from '../../services/api'

const fetchProduct = (products) => {
  return {
    type: FETCH_PRODUCT,
    payload: products
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


