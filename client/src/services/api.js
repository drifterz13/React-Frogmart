import axios from 'axios'

export default function(url) {
  return {
    product: {
      getAll: () => axios.get(url)
    }
  }
}