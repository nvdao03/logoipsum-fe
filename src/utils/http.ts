import axios, { AxiosInstance } from 'axios'

const URL = import.meta.env.VITE_API_ROOT

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const http = new Http().instance
export default http
