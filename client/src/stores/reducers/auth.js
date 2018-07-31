import { LOGGED_IN, LOGGED_OUT } from '../../types'

const initialState = {
  user: null,
  isAuthenticated: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {...state, isAuthenticated: true, user: action.payload}
    case LOGGED_OUT:
      return {...state, user: null, isAuthenticated: false}
    default:
      return state
  }
}