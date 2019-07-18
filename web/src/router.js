import Vue from 'vue'
import Router from 'vue-router'
//引入product组件
import Product from "./views/Product.vue"
import index from './views/index.vue'
import company from './views/company.vue'
import Join from './views/Join.vue'
import login from './components/login.vue'

import elflex from './views/elflex.vue'
import Carousel from './views/Carousel.vue';


import register from './components/register.vue'
import productDetails from './components/productDetails.vue'
import About from './views/About.vue'

import CompanyOne from './components/CompanyOne.vue'
import CompanyTwo from './components/CompanyTwo.vue'
import CompanyThree from './components/CompanyThree.vue'
import CompanyFour from './components/CompanyFour.vue'
import CompanyFive from './components/CompanyFive.vue'
import CompanySix from './components/CompanySix.vue'

import mproduct from './views/moble/mproduct.vue'

import mindex from './views/moble/mindex.vue'
import mcompany from './views/moble/mcompany.vue'
import mmyheader from './components/moble/mmyheader.vue'
import mproductdetails from './components/moble/mproductdetails.vue'


Vue.use(Router)
export default new Router({
   mode: 'history',
  routes: [
    
    {path: '/',component:index,},
    {path:'/product',component:Product},
    {path: '/join',component:Join},
    {path: '/company',component:company},
    {path: '/login',component:login},
    {path: '/register',component:register},
    {path:'/About',component:About},
    {path:'/productdetails',component:productDetails},
    {path:'/CompanyOne',component:CompanyOne},
    {path:'/CompanyTwo',component:CompanyTwo},
    {path:'/CompanyThree',component:CompanyThree},
    {path:'/CompanyFour',component:CompanyFour},
    {path:'/CompanyFive',component:CompanyFive},
    {path:'/CompanySix',component:CompanySix},
    {path:'/mindex',component:mindex},
    {path:'/mcompany',component:mcompany},
    {path:'/mproduct',component:mproduct},
    {path:'/mproductdetails',component:mproductdetails}
  ],
})
