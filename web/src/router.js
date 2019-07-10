import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from './views/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Home
    },
    {
      path: '/index',
      component: index
    }
  ]
})
