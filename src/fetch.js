import axios from 'axios'
import qs from 'qs'

var service = axios.create({
    timeout: 5000,
    baseURL:'/api',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;'
    }
})

//POST传参序列化(添加请求拦截器)
service.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    //  _.toast("错误的传参", 'fail');
    console.log("错误的传参");
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
service.interceptors.response.use((res) => {
    //对响应数据做些事
    if (!res.data.status) {
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    // _.toast("网络异常", 'fail');
    console.log("网络异常");
    return Promise.reject(error);
});

export default service
//返回一个Promise(发送post请求)
// export function fetchPost(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, params)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err);
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
// ////返回一个Promise(发送get请求)
// export function fetchGet(url, param) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, { params: param })
//             .then(response => {
//                 resolve(response.data)
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }