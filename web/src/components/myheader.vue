<template>
  <header id="main">
    <div v-if="isShow">
      <img class="my-style" src="https://image.zuma.com/image/1132100791935149067.png" alt="">
      <h1 class="my-font text-center">Tasty bread</h1>
    </div>
    <div id="navbar">
      <el-menu text-color="rgb(177, 105, 57)" @select="handleSelect"
               :default-active="$route.path" class="el-menu-demo" router mode="horizontal">
        <el-menu-item v-for="(item,i) of navList" :key="i" :index="item.path">
          {{item.navItem}}
        </el-menu-item>
        <div v-if="!isLogin">
          <!--<el-button type="text" class="myrouter ml-3 pr-5" @click="dialogFormVisible = true">登录</el-button>-->
          <myLogin class="myrouter ml-3 pr-5" v-on:ruleFormData="handleRuleFormData"></myLogin>
          <myRegister class="myrouter ml-3 pr-5" v-on:formData="handleFormData"></myRegister>
        </div>
        <div v-else>
          <el-button type="text" class="myrouter uname ml-3 pr-5">{{ user_name }}</el-button>
          <el-button  type="text" class="myrouter logout" @click="logout">退出</el-button>
        </div>
      </el-menu>
      <!--<div class="main">
        <el-dialog id="myclass" title="用户登录" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px">
            <el-form-item label="用户名" prop="uname">
              <el-input type="text" v-model="ruleForm.uname" autofocus placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="upwd">
              <el-input type="password" v-model="ruleForm.upwd" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width:250px;" type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>-->
    </div>
  </header>
</template>
<script>
import register from './register';
import login from './login'
  export default {
    inject: ['reload'],
    components:{
          "myRegister":register,
          "myLogin":login
      },
    data() {
      return {
        isShow: true,
        navList: [
          {path: '/', navItem: "首页"},
          {path: '/product', navItem: "产品专区"},
          {path: '/join', navItem: "加盟代理"},
          {path: '/company', navItem: "企业资讯"},
          {path: '/About', navItem: "留言专区"}
        ],
        // dialogFormVisible: false,
        dialogFormVisible1: false,
    //     ruleForm: {
    //       uname: '',
    //       upwd: '',
    //       delivery: false,
    //       type: [],
    //       resource: '',
    //       desc: ''
    //     },
    //     rules: {
    //       uname: {required: true, message: "请输入用户名", trigger: 'blur'},
    //       upwd: {required: true, message: '请输入密码', trigger: 'blur'}
    //     }
      }
     },
    computed: {
      isLogin () {
        return this.$store.getters.getIsLogin;
      },
      user_info () {
        let userInfo = this.$store.getters.getUserInfo;
        // console.log(str.user_name);
        return this.$store.getters.getUserInfo;
      },
      user_name () {
        console.log(this.$store.getters.getUserInfo.user_name);
        return this.$store.getters.getUserInfo.user_name;
      }
    },
    //created() {
    //  let uinfo = this.$store.state.userInfo;
    //  this.user_name = uinfo.user_name;
    //},
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = document.querySelector('#navbar').offsetTop;
        if (scrollTop > offsetTop) {
          document.querySelector(".el-menu").style.position = 'fixed';
          document.querySelector(".el-menu").style.opacity = '0.95';
        } else {
          document.querySelector(".el-menu").style.position = 'relative';
          document.querySelector(".el-menu").style.opacity = '1';
        }
      },
      // submitForm() {
      //   let that = this;
      //   var url = "user/api/login";
      //   var u = this.ruleForm.uname;
      //   var p = this.ruleForm.upwd;
      //   var obj = {uname: u, upwd: p};
      //   this.axios.post(url, obj).then(result => {
      //     if (result.data.code === 200) {
      //       let uinfo = JSON.stringify(result.data.result[0]);
      //       this.$store.commit('setUserInfo',uinfo);
      //       this.$message({
      //         message: '登录成功',
      //         type: 'success'
      //       });
      //       this.dialogFormVisible = false;
      //       this.$router.go(0);
      //     } else {
      //       this.$alert("用户名或者密码不正确", {confirmButtonText: '确定'});
      //     }
      //   });
      // },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
       },
      logout: function () {
        this.$store.commit('userLogout');
        this.$message({
          message: '退出成功',
          type: 'success'
        })
      },
       handleFormData(data){
            console.log(data);
        },
        handleRuleFormData(Data){
          console.log(Data);
        }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
    }
</script>
<style scoped lang="less">
  .el-menu{
    /*position: fixed !important;*/
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #f5b763;
  }
  #main {
    position: absolute;
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }
  
  /*图片的样式*/
  img.my-style {
    /*position: absolute;*/
    display: block;
    margin: auto;
    margin-top: 40px;
    width: 100px;
    height: 100px;
    /*top: -100px;*/
    /*left: 50%;*/
    /*margin-left: -50px;*/
  }
  
  /*字体的样式*/
  h1.my-font {
    color: rgb(177, 105, 57);
    font-family: "Chiller";
    text-align: center;
    margin-bottom: 30px;
    font: 32px solid orange;
  }
  #myclass{
position: absolute;
top:50%;
left:50%;
margin-top:-350px;
margin-left:-400px;
overflow: hidden;
width:800px;
height:700px;
border-radius: 5px;
}
  /*导航栏的样式*/
  .el-menu-demo {
    width: 100%;
    height: 70px;
    color: #EEE1cf;
    font: 15% !important;
  }
  
  .el-menu--horizontal > .el-menu-item {
    width: 10%;
    height: 70px;
    text-align: center;
    line-height: 70px;
  }
  
  .el-menu--horizontal > .el-menu-item:hover {
    color: #fff !important;
    background-color: #e29b46 !important;
  }
  
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 0 !important;
    color: #fff !important;
    background-color: #e29b46 !important;
  }
  
  .myrouter {
    float: right;
    /*line-height: 70px;*/
    height: 69px;
    color: rgb(177, 105, 57) !important;
    outline:0 none !important;
    a{
      color: rgb(177, 105, 57);
      text-decoration: none;
    }
  }
  .uname{
    position: absolute;
    right: 2%;
  }
  .logout{
    right: 2%;
    position: absolute;
  }
</style>


