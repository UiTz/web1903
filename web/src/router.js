import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<<<<<<< HEAD
//引入product组件
import Product from "./views/Product.vue"
=======
import index from './views/index.vue'


>>>>>>> 1b679e5e7639e8fc1d794399174ddb8be026b5af
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {path:'/product',component:Product},
=======
      path: '/index',
      component: index
    }
>>>>>>> 1b679e5e7639e8fc1d794399174ddb8be026b5af
  ]
})
