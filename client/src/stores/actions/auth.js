import { LOGGED_IN, LOGGED_OUT } from '../../types'
import api from '../../services/api'

export const login = user => {
  return {
    type: LOGGED_IN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: LOGGED_OUT
  }
}

export const auth = (type, credential) => {
  const url = `http://localhost:5000/api/user/${type}`
  return dispatch => {
    return api(url).user.auth(credential).then(res => {
      localStorage.token = res.data.token
      dispatch(login(res.data))
    }) 
  }
}

