import { FETCH_PRODUCT, LOGGED_OUT } from '../../types'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PRODUCT:
      return [...action.payload]
    case LOGGED_OUT:
      return []
    default:
      return state
  }
}