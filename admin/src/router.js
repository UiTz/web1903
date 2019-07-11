import Vue from 'vue'
import Router from 'vue-router'
import Main from "./views/Main";
import CategoryEdit from "./views/CategoryEdit";
import List from "./views/List";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {path:'/categories/list',component:List},
        {path:'/categories/create',component:CategoryEdit}
      ],
    },
  ]
})
