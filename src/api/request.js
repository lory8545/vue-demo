import axios from 'axios'
import config from './config.js'

// baseURL配置
const baseURL = process.env.NODE_ENV === 'development'
  ? config.BaseUrl
  : window.g.BaseUrl

// 创建axios实例
const service = axios.create({
  baseURL: baseURL,
  withCredentials: true
  // timeout: 30000 // 请求超时时间
})

service.defaults.headers = {
  // 'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json;charset=UTF-8' // 默认是此值, 部分接口是formdata或其他.
}

// request拦截器(可以定义请求携带token)
service.interceptors.request.use(config => {
  // 请求路径加上时间戳 避免ie缓存
  config.params = {
    _t: Date.parse(new Date()),
    ...config.params
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return [null, response.data]
  },
  error => { // 异常统一处理
    return [error, null]
  }
)

export default service
