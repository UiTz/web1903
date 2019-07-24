import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // 用来存储数据
    isLogin: false, // 用来显示是否登录
    userInfo: null
  },
  getters: { // 获得数据状态
    getIsLogin: state => {return state.isLogin},   // 获取用户登录状态
    getUserInfo: state => {return state.userInfo}  // 获取用户信息
  },
  mutations: { // 用来更改用户数据
    getSession (state) {
      state.userInfo = JSON.parse(sessionStorage.getItem('user_info'));
      state.isLogin = state.userInfo !== null;
    },
    setUserInfo (state, info) {
      state.userInfo = info;
      state.isLogin = true;
      sessionStorage.setItem('user_info', info);
    },
    userLogout (state) {
      sessionStorage.removeItem('user_info');
      state.isLogin = false;
    }
  },
  actions: {

  }
})
