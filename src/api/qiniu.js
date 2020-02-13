import request from '@/utils/request'

export function getToken() {
  return request({
    url: '/qiniu/upload/token', // 假地址 自行替换
    method: 'get'
  })
}

export function deleteType(data) {
  return request({
    url: '/api/agencyType/deleteType',
    method: 'post',
    data
  })
}
export function insertType(data) {
  return request({
    url: '/api/agencyType/insertType',
    method: 'post',
    data
  })
}
export function selectType(data) {
  return request({
    url: '/api/agencyType/selectType',
    method: 'post',
    data
  })
}
export function updateType(data) {
  return request({
    url: '/api/agencyType/updateType',
    method: 'post',
    data
  })
}