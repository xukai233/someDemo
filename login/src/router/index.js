import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import my from '@/components/my/my'
import login from '@/components/login/login'
import signin from '@/components/signin/signin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    }
  ]
})
