import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/dev-api/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/dev-api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/dev-api/user/logout',
    method: 'post'
  })
}
export function test1() {
  return request({
    url: 'process/configScan/topTenConfig',
    method: 'post',
  })
}
export function test2(data) {
  return request({
    url: '/api/user/check',
    method: 'post',
    data
  })
}
