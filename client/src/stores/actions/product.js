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
    return api('assets/db.json').product.getAll().then(res => {
      const products = res.data
      dispatch(fetchProduct(products))
    })
  }
}
