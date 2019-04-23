import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Bottom from './publicvue/Bottom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainindex',
      component: () => import('./vuessb/Mainindex.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {// 底部公共组件
      path: '/bottom',
      name: 'bottom',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./publicvue/Bottom.vue')
    },
    {// 顶部公共组件
      path: '/top',
      name: 'top',
      component: () => import('./publicvue/Top.vue')
    },
    {
      // 登录
      path: '/login',
      name: 'login',
      component: () => import('./vuessb/Login.vue')
    },
    {
      // 服务器登录
      path: '/loginServer',
      name: 'loginServer',
      component: () => import('./vuessb/LoginServer.vue')
    },
    {
      // 服务器登录
      path: '/main',
      name: 'main',
      permission: '',
      component: () => import('./vuessb/Main.vue')
    },
    {
      // 服务器登录
      path: '/m_top',
      name: 'm_top',
      component: () => import('./publicvue/M_Top.vue')
    },
    {
      // 服务器登录
      path: '/m_bottom',
      name: 'm_bottom',
      component: () => import('./publicvue/M_Bottom.vue')
    },
    {
      // 服务器登录
      path: '/atask',
      name: 'atask',
      // meta: { title: 'Atask' },
      component: () => import('./submodule/Atask.vue')
    },
    // {
    //   // 服务器登录
    //   path: '/Mainindex',
    //   name: 'Mainindex',
    //   component: () => import('./vuessb/Mainindex.vue')
    //   // children: [
    //   //   { path: '/atask',
    //   //     name: 'atask',
    //   //     // meta: { title: 'Atask' },
    //   //     component: () => import('./submodule/Atask.vue') }
    //   // ]
    // },
    {
      // 服务器登录
      path: '/section',
      name: 'section',
      component: () => import('./submodule/Section.vue')
    },
    {
      // 服务器登录
      path: '/completion',
      name: 'completion',
      component: () => import('./submodule/Completion.vue')
    },
    {
      // 服务器登录
      path: '/setthestyle',
      name: 'setthestyle',
      component: () => import('./publicvue/Setthestyle.vue')
    }

  ]
})
