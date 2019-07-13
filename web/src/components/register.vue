<template>
<div>
    <div class="d1 w-100"></div>
  <el-dialog title="用户注册" @click="cancel" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="uname" autofocus placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码"  :label-width="formLabelWidth">
      <el-input v-model="upwd" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="邮箱"  :label-width="formLabelWidth">
      <el-input v-model="email" placeholder="请输入邮箱"></el-input>
    </el-form-item>
    <el-form-item label="电话"  :label-width="formLabelWidth">
      <el-input v-model="tel" placeholder="请输入电话"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="register">提交</el-button>
    <el-button @click="cancel">取 消</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
import register from '../assets/register.js'
export default {
    props:{
        uname:{default:''},
        upwd:{default:''},
        email:{default:''},
        tel:{default:''}
    },
  data(){
      return{
        dialogFormVisible:true,
        form: {
          uname: '',
          upwd: '',
          email: '',
          tel: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
  },
methods:{
    register(){
        var url='register';
        var u=uname;
        var p=upwd;
        var e=email;
        var t=tel;
        var obj={uname:u,upwd:p,email:e,tel:t};
        this.axios.get(url,{params:obj}).then(result=>{
            if(result.data.code>0){
                this.$messagebox('提交成功');
                this.$router.push('/');
            }else{
                this.$messagebox('提交失败');
            }
        })
    },
    cancel(){
        this.$router.push('/');
    },
}
}
</script>
<style>
/*设置图片样式*/
.d1{
    background:url("../../public/img/index/index-1.png") no-repeat;
    background-size:100% 100%;
    height:500px;
}
/*设置对话框样式*/
.el-dialog{
    text-align: center;
}
.el-input{
    width:60% !important;
    margin-right: 100px;
}
</style>

    