import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//引入product组件
import Product from "./views/Product.vue"

import index from './views/index.vue'
import company from './views/company.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Home
    },
    
    {path:'/product',component:Product},

      {path: '/index',
      component:index},
      {path: '/company',
      component:company}
  ]
})
