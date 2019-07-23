import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入页面顶部加载进度条插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from "axios"
axios.defaults.withCredentials = true;
//axios.defaults.baseURL = 'http://176.30.9.188:3000/';
axios.defaults.baseURL = 'http://localhost:3000/';
Vue.prototype.axios=axios;
import 'element-ui/lib/theme-chalk/index.css'
import myheader from './components/myheader'
import myfooter from './components/myfooter'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false;


Vue.use(Mint);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.component("my-header",myheader);
Vue.component("my-footer",myfooter);
// 配置NProgress进度条选项  —— 动画效果
NProgress.configure({ ease: 'ease', speed: 500 });
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});
router.afterEach(() => {
  NProgress.done()
});


//没有用在注释 不用理会
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
