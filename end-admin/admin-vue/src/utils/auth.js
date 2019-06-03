import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setTokenAndExpire(token, expireTime) {
  return Cookies.set(TokenKey, token, { expires: expireTime })
}

export function setRandomKeyAndExpire(randomKey, expireTime) {
  return Cookies.set('Admin-RandomKey', randomKey, { expires: expireTime })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
