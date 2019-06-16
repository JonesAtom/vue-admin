import fetch from '@/utils/fetch'
class Login {
    constructor() {

    }

    /**
     * 登陆 获取用户信息
     */
    checkLogin(data, sCallback, fCallback) {
        return fetch({
            url: '/login/check-login',
            method: "POST",
            // params: data,
            data: data,
            sucess: res => {
                sCallback && sCallback(res)
            },
            fail: err => {
                fCallback && fCallback(err)
            }
        })
    }
}

export default new Login()