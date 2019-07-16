import Vue from 'vue'
import Router from 'vue-router'
//引入product组件
import Product from "./views/Product.vue"
import index from './views/index.vue'
import company from './views/company.vue'
import Join from './views/Join.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import productDetails from './components/productDetails.vue'
import About from './views/About.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/product',
    component:Product},
      {path: '/',
      component:index},
      {path: '/join',
      component:Join},
      {path: '/company',
      component:company},
      {path: '/login',
      component:login},
      {path: '/register',
      component:register},
     {path:'/productdetails',
      component:productDetails},
      {path:'/About',
      component:About},

  ]
})
