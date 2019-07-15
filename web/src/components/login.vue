<template>
 <div class="main">
     <div class="d1 w-100"></div>
<el-dialog title="用户登录" :before-close="handleclose" @click="cancel" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="uname" autofocus :placeholder="unameHolder"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="upwd" :placeholder="upwdHolder"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary"  @click="login">登录</el-button>
    <el-button @click="cancel">取 消</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
  export default {
    data() {
       return{
        orderId:1,
        unameHolder:"请输入用户名",
       upwdHolder:"请输入密码",
       uname:"",
       upwd:"",
        dialogFormVisible: true,
        form: {
          name: '',
          upwd: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
       }
    },
    methods:{
        login(){
        var u=this.uname;
        var p=this.upwd;
        var reg=/^[a-z0-9A-Z_]{3,12}$/;
        if(!reg.test(u)){
            this.$toast("用户名格式不正确");return;
        }
        if(!reg.test(p)){
            this.$toast("密码格式不正确");return;
        }
        var url='login';
        var obj={uname:u,upwd:p};
        this.axios.get(url,{params:obj}).then(result=>{
            if(result.data.code>0){
                confirm('提示','登录成功');
                this.$router.push('/');
            }else{
                confirm("用户名或者密码不正确");
            }
        })
    },
    cancel(){
        this.$router.push('/');
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
    width:60%;margin-left:3%;
}
</style>
