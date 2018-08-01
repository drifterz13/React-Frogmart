import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '../stores'
import jwtDecode from 'jwt-decode'
import Main from './Main'
import { login } from '../stores/actions/auth'

const store = configureStore()

if (localStorage.token) {
  const user = jwtDecode(localStorage.token)
  store.dispatch(login({
    username: user.username,
    email: user.email,
    token: localStorage.token,
    _id: user._id
  }))
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
)

export default App