import axios from 'axios'

export default function(url) {
  return {
    user: {
      auth: user => axios.post(url, user),
    },
    product: {
      getAll: () => axios.get(url)
    },
    order: {
      confirmOrder: order => {
        return axios.post(url, order)
      },
      getOrderHistory: () => {
        axios.defaults.headers['Authorization'] = `Bearer ${localStorage.token}`
        return axios.get(url)
      }
    }
  }
}