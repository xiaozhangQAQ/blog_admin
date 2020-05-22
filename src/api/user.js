import request from '@/utils/request'


// export function tset(data) {
//   return request({
//     url: 'http://127.0.0.1:7001/api/v2/topics',
//     method: 'post',
//     data
//   })
// }
export const login = (data)=>request.post(`http://127.0.0.1:7001/api/login`,data);


// export function login(data) {
//   return request({
//     url: 'a/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: 'a/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: 'a/user/logout',
//     method: 'post'
//   })
// }
