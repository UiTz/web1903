import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入页面顶部加载进度条插件
<<<<<<< HEAD
/*import NProgress from 'nprogress'
import 'nprogress/nprogress.css'*/
=======
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
<<<<<<< HEAD
import ElementUI from 'element-ui' 
import axios from "axios"
Vue.prototype.axios=axios
import 'element-ui/lib/theme-chalk/index.css'
import myheader from './components/myheader'
import myfooter from './components/myfooter'
//没有用的编译 ，不用理会
Vue.use(ElementUI);
=======
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
>>>>>>> d3898cfd93292cd5b7ac9bb00606a832eac9cf43

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
