import request from '@/utils/request'
import Qs from 'qs'

export function login(userName, password) {
  return request({
    url: '/api/admin/auth',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: {
      userName,
      password
    },
    transformRequest: [function(data) {
      data = Qs.stringify(data)
      return data
    }]
  })
}
//
// export function logout() {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }
