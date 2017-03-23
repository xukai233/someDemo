import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import zonghui from 'components/zonghui'
import add from 'components/add'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/zonghui',
      name: 'zonghui',
      component: zonghui
    }, {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }, {
      path: '/add',
      name: 'add',
      component: add
    }

  ]
})
