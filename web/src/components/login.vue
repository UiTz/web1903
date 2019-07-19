<template>
 <div class="main">
     <div class="d1 w-100"></div>
<el-dialog title="用户登录" :before-close="handleclose" :visible.sync="dialogFormVisible">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
    <el-form-item label="用户名"  prop="uname">
      <el-input type="text" v-model="ruleForm.uname" autofocus placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码"  prop="upwd">
      <el-input type="password" v-model="ruleForm.upwd" placeholder="请输入密码"></el-input>
    </el-form-item>
  <el-form-item >
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
</el-form>
</el-dialog>
</div>
</template>
<script>
  export default {
    data() {
       return{
        dialogFormVisible: true,
        ruleForm: {
          uname: '',
          upwd: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules:{
            uname:{required:true,message:"请输入用户名",trigger:'blur'},
            upwd:{required:true,message:'请输入密码',trigger:'blur'}
        }
       }
    },
    methods:{
        submitForm(formName) {
        var url="user/api/login";
        var u=this.ruleForm.uname;
        var p=this.ruleForm.upwd;
        var obj={uname:u,upwd:p};
        this.axios.post(url,obj).then(result=>{
            if(result.data.code===200){
                 this.$alert('登录成功',{callback:action=>{this.$router.push('/');}});
                
            }else{
                this.$alert("用户名或者密码不正确",{confirmButtonText:'确定'});
            }
        })
        },
    handleclose(){
        this.$router.push('/');
  }
        }
  }
</script>
<style scoped>
/*设置图片样式*/
.d1{
    background:url("../../public/img/index/index-1.png") no-repeat;
    background-size:100% 100%;
    height:500px;
}
/*设置对话框的样式*/
.el-dialog{
    text-align: center;
}
/*设置对话框宽度*/
.el-input{
    width:60% !important;
    margin-right: 200px;
}
.el-form-item__error{
    margin-left:8%;
}
.el-button{
    margin-left:-20% !important;
    border-radius: 5px !important;
    width:150px;
}
</style>
