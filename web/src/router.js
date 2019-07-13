import Vue from 'vue'
import Router from 'vue-router'
//引入product组件
import Product from "./views/Product.vue"
import index from './views/index.vue'
import company from './views/company.vue'
import Join from './views/Join.vue'
import login from './components/login.vue'
<<<<<<< HEAD
import register from './components/register.vue'
import productDetails from './components/productDetails.vue'
=======
import About from './views/About.vue'

>>>>>>> e1b180a0d9c54ce2f8e0d1f0f2e05f0e9e2a8fe9


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
<<<<<<< HEAD
      {path: '/register',
      component:register},
     {path:'/productdetails',
      component:productDetails}
=======
      {path: '/About',
      component:About},
>>>>>>> e1b180a0d9c54ce2f8e0d1f0f2e05f0e9e2a8fe9
  ]
})
