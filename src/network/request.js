import axios from 'axios'
export function request(config) {
    //创建一个axios实例对象instance
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66', //配置默认url
        timeout: 2000,
    })

    //请求拦截器
    // instance.interceptors.request.use(config => {
    //     console.log(config)
    //     return config
    // }, err => {
    //     console.log(err)
    // })

    //响应拦截器
    // instance.interceptors.response.use(res => {
    //     console.log(res)
    //     return res
    // }, err => {
    //     console.log(err)
    // })

    return instance(config)
}