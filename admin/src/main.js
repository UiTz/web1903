import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import './plugins/element.js'
import router from './router'
import qs from 'qs'

Vue.use(ElementUI);

Vue.config.productionTip = false;


import http from './axios'
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios = http;
Vue.prototype.$qs = qs;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

