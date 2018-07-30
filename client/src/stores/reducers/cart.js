import { ADD_TO_CART, PLUS_ITEM, MINUS_ITEM } from '../../types'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case PLUS_ITEM:
      return state.map(product => {
        if (product._id === action.id) {
          const amount = product.amount + 1
          return {...product, amount}
        }
        return product
      })
    case MINUS_ITEM:
      return state.map(product => {
        if (product._id === action.id) {
          const amount = product.amount - 1
          return amount <= 0 ? {...product, amount: 0} : {...product, amount}
        }
        return product
      })
    default:
      return state
  }
}