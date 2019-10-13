import Vue from 'vue'
import Vuex from 'vuex'

let Base64 = require('js-base64').Base64;

Vue.use(Vuex, Base64);

export default new Vuex.Store({
	state: { // 用来存储数据
		isLogin: false, // 用来显示是否登录
		userInfo: null
	},
	getters: { // 获得数据状态
		getIsLogin: state => {return state.isLogin},   // 获取用户登录状态
		getUserInfo: state => {return state.userInfo}  // 获取用户信息
	},
	mutations: {
		// 用来获取用户数据
		getSession (state) {
			let user = localStorage.getItem(Base64.encode('user_info'));
			if (user === null) {
				return false
			} else {
				state.userInfo = JSON.parse(Base64.decode(user));
				state.isLogin = state.userInfo !== null;
			}
		},
		setUserInfo (state, info) {
			let b = Base64.encode(info);
			state.userInfo = info;
			state.isLogin = true;
			localStorage.setItem(Base64.encode('user_info'), b);
		},
		userLogout (state) {
			localStorage.removeItem(Base64.encode('user_info'));
			state.isLogin = false;
		}
	},
	actions: {}
})
