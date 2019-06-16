import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component:  () => import('@/view/login/login'),
    },
    {
      path: 'dashbord',
      name: 'dashbord',
      component: () => import('@/view/dashbord'),
      children: [
        // 页面配置
        {
          path: '/',
          name: 'home',
          component: () => import('@/view/pages/home'),
        }, {
          path: '/mine',
          name: 'mine',
          component: () => import('@/view/pages/mine'),
        },
        // 数据统计
        {
          path: '/traffic',
          name: 'traffic',
          component: () => import('@/view/dataBase/traffic')
        },
        {
          path: '/trade',
          name: 'trade',
          component: () => import('@/view/dataBase/trade')
        },
        // 会员中心
        {
          path: '/manage',
          name: 'manage',
          component: () => import('@/view/member/manage')
        },
        // 商品管理
        {
          path: '/goods',
          name: 'goods',
          component: () => import('@/view/goods/goods')
        },
        // 店铺设置
        {
          path: '/setting',
          name: 'setting',
          component: () => import('@/view/store/setting')
        }
      ]
    }
  ]
})
