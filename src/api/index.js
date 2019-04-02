import $axios from './request.js'

export function $get (url) { // 发送get请求
  return $axios.get(url)
}

export function $post (url, params) { // 发送post请求
  return $axios.post(url, params)
}

export function $put (url, params) { // 发送put请求
  return $axios.put(url, params)
}

export function $delete (url, params) { // 发送delete请求
  return $axios.delete(url, { data: params })
}
