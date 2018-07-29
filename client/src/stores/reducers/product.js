import { FETCH_PRODUCT } from '../../types'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PRODUCT:
      return [...action.payload]
    default:
      return state
  }
}