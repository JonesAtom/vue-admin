import http from '@/utils/fetch'
class Page {
    constructor() {

    }

    /**
     * 登陆 获取用户信息
     */
    getUserInfo(sCallback, fCallback) {
        let params = {
            url: '/get-user-info',
            sucess: res => {
                sCallback && sCallback(res)
            },
            fail: err => {
                fCallback && fCallback(err)
            }
        }
        return http(params)
    }
}

export default new Page()