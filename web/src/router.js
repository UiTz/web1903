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
import Information from './components/Information.vue'
//import CompanyTwo from './components/CompanyTwo.vue'
//import CompanyThree from './components/CompanyThree.vue'
//import CompanyFour from './components/CompanyFour.vue'
//import CompanyFive from './components/CompanyFive.vue'
//import CompanySix from './components/CompanySix.vue'
import mproductdetails from './components/moble/mproductdetails.vue'
import mcompanyone from './components/moble/mcompanyone.vue'
import mcompanytwo from './components/moble/mcompanytwo.vue'
import mcompanythree from './components/moble/mcompanythree.vue'
import mcompanyfour from './components/moble/mcompanyfour.vue'
import mcompanyfive from './components/moble/mcompanyfive.vue'
import mcompanysix from './components/moble/mcompanysix.vue'
import mlogin from './components/moble/mlogin.vue'
import mproduct from './views/moble/mproduct.vue'
import mindex from './views/moble/mindex.vue'
import mcompany from './views/moble/mcompany.vue'
import mjoin from './views/moble/mjoin.vue'
import mabout from './views/moble/mabout.vue'
import Error from './components/Error'


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '',
      component:index,
      meta: {
        title: '码农练习生蛋糕屋'
      }
    },
    {
      path: '/',
      component:index,
      meta: {
        title: '码农练习生蛋糕屋'
      }
    },
    {
      path: '/index',
      component:index,
      meta: {
        title: '码农练习生蛋糕屋'
      }
    },
    {
      path:'/product',
      component:Product,
      meta: {
        title: '产品专区 - 码农练习生蛋糕屋'
      }
    },
    {
      path: '/join',
      component:Join,
      meta: {
        title: '加盟代理 - 码农练习生蛋糕屋'
      }
    },
    {
      path: '/company',
      component:company,
      meta: {
        title: '企业资讯 - 码农练习生蛋糕屋'
      }
    },
    {path: '/login',component:login},
    // {
    //   path: '/register',
    //   component:register,
    //   meta: {
    //     title: '注册 - 码农练习生蛋糕屋'
    //   }
    // },
    {path:'/productdetails',component:productDetails,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails2',component:productDetails2,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails3',component:productDetails3,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails4',component:productDetails4,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails5',component:productDetails5,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails6',component:productDetails6,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails7',component:productDetails7,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails8',component:productDetails8,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails9',component:productDetails9,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails10',component:productDetails10,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails11',component:productDetails11,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails12',component:productDetails12,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails13',component:productDetails13,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails14',component:productDetails14,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/productdetails15',component:productDetails15,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/About',component:About,meta:{title: '留言专区 - 码农练习生蛋糕屋'}},
    {path:'/productdetails',component:productDetails,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/Information',component:Information,meta:{title: '文章详情 - 码农练习生蛋糕屋'}},
    {path:'/mindex',component:mindex,meta:{title: '码农练习生蛋糕屋'}},
    {path:'/mcompany',component:mcompany,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mproductdetails',component:mproductdetails,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mproduct',component:mproduct,meta:{title: '商品 - 码农练习生蛋糕屋'}},
    {path:'/mjoin',component:mjoin,meta:{title: '加盟代理 - 码农练习生蛋糕屋'}},
    {path:'/mcompanyone',component:mcompanyone,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mcompanytwo',component:mcompanytwo,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mcompanythree',component:mcompanythree,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mcompanyfour',component:mcompanyfour,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mcompanyfive',component:mcompanyfive,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mcompanysix',component:mcompanysix,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mabout',component:mabout,meta:{title: '商品详情 - 码农练习生蛋糕屋'}},
    {path:'/mlogin',component:mlogin,meta:{title: '登录 - 码农练习生蛋糕屋'}},
    {path:'/404',component:Error,meta:{title: '404 Not Found'}},
    {
      path: '*',
      redirect: '/404'
    }
  ],
})
