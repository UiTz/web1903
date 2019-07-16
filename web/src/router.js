import Vue from 'vue'
import Router from 'vue-router'
//引入product组件
import Product from "./views/Product.vue"
import index from './views/index.vue'
import company from './views/company.vue'
import Join from './views/Join.vue'
import login from './components/login.vue'
<<<<<<< HEAD
=======

>>>>>>> 62898037480335433e7bae177a19e0359b554a93
import register from './components/register.vue'
import productDetails from './components/productDetails.vue'
import About from './views/About.vue'
import CompanyOne from './components/CompanyOne.vue'
import CompanyTwo from './components/CompanyTwo.vue'
import CompanyThree from './components/CompanyThree.vue'
import CompanyFour from './components/CompanyFour.vue'
import CompanyFive from './components/CompanyFive.vue'
import CompanySix from './components/CompanySix.vue'

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
      {path:'/CompanyOne',
      component:CompanyOne},
      {path:'/CompanyTwo',
      component:CompanyTwo},
      {path:'/CompanyThree',
      component:CompanyThree},
      {path:'/CompanyFour',
      component:CompanyFour},
      {path:'/CompanyFive',
      component:CompanyFive},
      {path:'/CompanySix',
      component:CompanySix},

  ]
})
