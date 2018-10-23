/**
 * simple cache for global data store
 */
const _cache = {}

export const setItem = (key, val) => {
  if (!key) {
    return
  }

  _cache[key] = val
}

export const getItem = (key) => {
  if (!key) {
    return
  }

  return _cache[key]
}

export default {
  setItem,
  getItem
}
