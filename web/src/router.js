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
import productDetails2 from './components/productDetails2.vue'
import productDetails3 from './components/productDetails3.vue'
import productDetails4 from './components/productDetails4.vue'
import productDetails5 from './components/productDetails5.vue'
import productDetails6 from './components/productDetails6.vue'
import productDetails7 from './components/productDetails7.vue'
import productDetails8 from './components/productDetails8.vue'
import productDetails9 from './components/productDetails9.vue'
import productDetails10 from './components/productDetails10.vue'
import productDetails11 from './components/productDetails11.vue'
import productDetails12 from './components/productDetails12.vue'
import productDetails13 from './components/productDetails13.vue'
import productDetails14 from './components/productDetails14.vue'
import productDetails15 from './components/productDetails15.vue'
import About from './views/About.vue'
import elflex from './views/elflex.vue'
import Carousel from './views/Carousel.vue';
import CompanyOne from './components/CompanyOne.vue'
import CompanyTwo from './components/CompanyTwo.vue'
import CompanyThree from './components/CompanyThree.vue'
import CompanyFour from './components/CompanyFour.vue'
import CompanyFive from './components/CompanyFive.vue'
import CompanySix from './components/CompanySix.vue'
import mproduct from './views/moble/mproduct.vue'
import mindex from './views/moble/mindex.vue'
import mcompany from './views/moble/mcompany.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/product',component:Product},
    {path: '/',component:index},
    {path: '/join',component:Join},
    {path: '/company',component:company},
    {path: '/login',component:login},
    {path: '/register',component:register},


    {path:'/productdetails',component:productDetails},
    {path:'/productdetails2',component:productDetails2},
    {path:'/productdetails3',component:productDetails3},
    {path:'/productdetails4',component:productDetails4},
    {path:'/productdetails5',component:productDetails5},
    {path:'/productdetails6',component:productDetails6},
    {path:'/productdetails7',component:productDetails7},
    {path:'/productdetails8',component:productDetails8},
    {path:'/productdetails9',component:productDetails9},
    {path:'/productdetails10',component:productDetails10},
    {path:'/productdetails11',component:productDetails11},
    {path:'/productdetails13',component:productDetails12},
    {path:'/productdetails14',component:productDetails13},
    {path:'/productdetails14',component:productDetails14},
    {path:'/productdetails15',component:productDetails15},




    {path:'/About',component:About},
    {path:'/CompanyOne',component:CompanyOne},
    {path:'/CompanyTwo',component:CompanyTwo},
    {path:'/CompanyThree',component:CompanyThree},
    {path:'/CompanyFour',component:CompanyFour},
    {path:'/CompanyFive',component:CompanyFive},
    {path:'/CompanySix',component:CompanySix},
    {path:'/mindex',component:mindex},
    {path:'/mcompany',component:mcompany},
    {path:'/mproduct',component:mproduct}
  ],
})
