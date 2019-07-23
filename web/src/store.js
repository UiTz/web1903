import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_name: '',
    userInfo: sessionStorage.getItem('user_info')
  },
  mutations: {
    setUserInfo(state, info) {
      state.userInfo=info;
      sessionStorage.setItem('user_info', info);
    }
  },
  actions: {

  }
})
