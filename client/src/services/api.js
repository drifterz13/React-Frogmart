import axios from 'axios'

export default function(url) {
  return {
    user: {
      auth: user => axios.post(url, user),
    },
    product: {
      getAll: () => axios.get(url)
    }
  }
}