import axios from 'axios'
import AuthService from './auth'
import UsersService from './users'
import FeedbacksService from './feedbacks'
import router from '../router'
import { setGlobalLoading } from '../store/global'

const API_ENVS = {
  local: 'http://localhost:3000',
  production: 'https://backend-f75dpwkp5-fernando-lomonaco.vercel.app'
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] ?? API_ENVS.local
})

httpClient.interceptors.request.use(config => {
  setGlobalLoading(true)
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})

// interceptor funcao que fica no meio da requisicao
httpClient.interceptors.response.use((response) => {
  setGlobalLoading(false)
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 || error.request.status === 500

  if (canThrowAnError) {
    setGlobalLoading(false)
    throw new Error(error.message)
  }

  if (error.response.status === 401) {
    router.push({ name: 'Home' })
  }
  return error
})

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient),
  feedbacks: FeedbacksService(httpClient)
}
