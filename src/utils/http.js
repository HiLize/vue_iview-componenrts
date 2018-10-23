/**
 * A simple HTTP request module
 */
import axios from 'axios'
import events from '@/utils/events'
import {SERVER_TIME} from '@/config/eventName.conf'

const METHODS = ['get', 'post', 'put', 'delete', 'patch'].reduce((ret, item) => {
  ret[item.toUpperCase()] = item
  return ret
}, {})

// axios instance with default configurations
const instance = axios.create({
  baseURL: '/context-path', // specify your own api context api path here !!!
  withCredentials: true,
  responseType: 'json'
})

instance.interceptors.request.use(function (config) {
  // TODO: global interceptor before send request

  if (process.env.NODE_ENV === 'development') {
    // window['DJ-X-CSRFToken'] = 'DfIMcLHi4Ftpw2keOVeTLQqPlDPI31o6rIus4BtEl3wSmOfainCd0HlCgK6YDcg8'
  }

  // config.headers = {...config.headers, 'X-CSRFToken': window['DJ-X-CSRFToken']}
  return config
}, function (error) {
  return Promise.reject(error)
})

const request = (url, method, data, headers) => {
  if (data) {
    // remove 'null' value for backend check
    for (let key in data) {
      data[key] = data[key] === null ? undefined : data[key]
    }
  }
  const options = {
    method,
    url,
    data,
    headers
  }

  if (method === METHODS.GET) {
    options.params = data || {}
  } else {
    options.data = data
  }

  return instance.request(options).then(res => {
    // 从任意服务器响应头中获取服务器时间, 不需要单独定义接口
    if (res.headers && res.headers.date) {
      events.emitEvent(SERVER_TIME, [new Date(res.headers.date)])
    }

    if (/2\d\d/.test(res.status)) { // treat '2xx' as success code
      return res.data
    } else {
      console.error(res)
      throw new Error('请求失败')
    }
  }).catch(e => {
    if (e && e.response && e.response.data && e.response.data.code) {
      throw new Error(e.response.data.code[0])
    } else {
      throw e
    }
  })
}

/**
 * http get
 */
export const get = (url, data, headers) => {
  return request(url, METHODS.GET, data, headers)
}

/**
 * http post
 */
export const post = (url, data, headers) => {
  return request(url, METHODS.POST, data, headers)
}

/**
 * http patch
 */
export const patch = (url, data, headers) => {
  return request(url, METHODS.PATCH, data, headers)
}

/**
 * http put
 */
export const put = (url, data, headers) => {
  return request(url, METHODS.PUT, data, headers)
}

/**
 * http delete
 */
export const del = (url) => {
  return request(url, METHODS.DELETE)
}
