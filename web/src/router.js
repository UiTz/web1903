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
import register from './components/register.vue'
import productDetails from './components/productDetails.vue'
import About from './views/About.vue'
import elflex from './views/elflex.vue'
import Carousel from './views/Carousel.vue';
<<<<<<< HEAD
=======
>>>>>>> c7d285a9b28ddecff07cfc450a3410da4ff348e4
import register from './components/register.vue'
import productDetails from './components/productDetails.vue'
import About from './views/About.vue'
>>>>>>> 54e211ca16a294ccbb9712ead84d1716d6ed962b
import CompanyOne from './components/CompanyOne.vue'
import CompanyTwo from './components/CompanyTwo.vue'
import CompanyThree from './components/CompanyThree.vue'
import CompanyFour from './components/CompanyFour.vue'
import CompanyFive from './components/CompanyFive.vue'
import CompanySix from './components/CompanySix.vue'
<<<<<<< HEAD
import mproduct from './views/moble/mproduct.vue'
=======
import mindex from './views/moble/mindex.vue'
import mcompany from './views/moble/mcompany.vue'
>>>>>>> 54e211ca16a294ccbb9712ead84d1716d6ed962b


Vue.use(Router)
export default new Router({
  routes: [
<<<<<<< HEAD
    {path:'/product',component:Product},
    {path: '/',component:index},
    {path: '/join',component:Join},
    {path: '/company',component:company},
    {path: '/login',component:login},
    {path: '/register',component:register},
    {path:'/productdetails',component:productDetails},
    {path:'/About',component:About},
    {path:'/CompanyOne',component:CompanyOne},
    {path:'/CompanyTwo',component:CompanyTwo},
    {path:'/CompanyThree',component:CompanyThree},
    {path:'/CompanyFour',component:CompanyFour},
    {path:'/CompanyFive',component:CompanyFive},
    {path:'/CompanySix',component:CompanySix},
    {path:'/mindex',component:mindex},
    {path:'/mcompany',component:mcompany},
  ],
  
=======
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
      {path:'/Elflex',
      component:elflex},
      {path:'/Carousel',
      component:Carousel},
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
      {path:'/mproduct',
      component:mproduct},
  ]
>>>>>>> c7d285a9b28ddecff07cfc450a3410da4ff348e4
})
