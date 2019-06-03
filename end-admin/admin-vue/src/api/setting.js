import request from '@/utils/request'
import Qs from 'qs'

export function getSettings() {
  return request({
    url: '/api/admin/setting/getSettings',
    method: 'get'
  })
}

export function updateSettings(settings) {
  return request({
    url: '/api/admin/setting/updateSettings',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: settings,
    transformRequest: [function(data) {
      data = Qs.stringify(data)
      return data
    }]
  })
}

export function getSettingVal(settings, key) {
  for (const object of settings) {
    if (object.key === key) {
      return object.value
    }
  }
}

export default {
  getSettings,
  updateSettings,
  getSettingVal
}
