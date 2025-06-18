import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    accept: '*/*',
    'content-type': 'application/json',
  },
})

export default axios
