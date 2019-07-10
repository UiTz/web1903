import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入页面顶部加载进度条插件
/*import NProgress from 'nprogress'
import 'nprogress/nprogress.css'*/

Vue.config.productionTip = false;

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
