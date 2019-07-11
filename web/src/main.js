import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*import NProgress from 'nprogress'
import 'nprogress/nprogress.css'*/
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import axios from "axios"
Vue.prototype.axios=axios
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8080';
import 'element-ui/lib/theme-chalk/index.css'
import myheader from './components/myheader'
import myfooter from './components/myfooter'
Vue.use(ElementUI)
Vue.config.productionTip = false;
Vue.component("my-header",myheader);
Vue.component("my-footer",myfooter);

// 配置NProgress进度条选项  —— 动画效果
/*NProgress.configure({ ease: 'ease', speed: 500 })

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
