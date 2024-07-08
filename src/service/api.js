import axios from 'axios'
import { Message } from '@arco-design/web-react'
import Cookie from 'react-cookies'

const Http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截器
Http.interceptors.request.use(
  (config) => {
    const Authorization = Cookie.load('AUTHTOKEN')
    if (Authorization) {
      config.headers.Authorization = Authorization // 登录token（后端登录接口返回）
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
Http.interceptors.response.use(
  (response) => {
    const { data } = response
    if ([100300, 100301].includes(data.code)) {
      // 无效code,跳转至域名
      sessionStorage.clear()
      Cookie.remove('AUTHTOKEN')
      Message.error(data.message)
      setTimeout(() => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/login'
      }, 1000)
    } else if ([200, '000000'].includes(data.code)) {
      // 成功
      return Promise.resolve(data)
    } else {
      Message.error(data.message || data.error)
      return Promise.resolve(data)
    }
  },
  (error) => Promise.reject(error)
)

export default Http
