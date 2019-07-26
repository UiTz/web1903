<template>
<div>
    <div class="d1 w-100"></div>
  <el-dialog :before-close="handleclose" title="用户注册" :visible.sync="dialogFormVisible">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名"  prop="uname">
      <el-input type="text" v-model="ruleForm.uname" autofocus placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码"   prop="upwd">
      <el-input type="password" v-model="ruleForm.upwd" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="emails" >
      <el-input v-model="ruleForm.emails" auto-complete="off" placeholder="请输入邮箱"></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input v-model="ruleForm.phone" auto-complete="off" placeholder="请输入电话"></el-input>
    </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
     </el-form-item>
     </el-form>
</el-dialog>
</div>
</template>
<script>
export default {
  data(){
      var checkuname = (rule,value,callback)=> {
          let uname = value;
          setTimeout(() => {
              this.axios.post('user/api/queryuser',{uname}).then(res=> {
                  console.log(res);
                  let code = res.data.code;
                  if (code === 201) {
                      callback(new Error('该用户名已被注册'));
                  } else {
                      callback();
                  }
              });
          }, 500);
      };
      return{
          dialogFormVisible:true,
        ruleForm:{
          uname: '',
          upwd: '',
          emails: '',
          phone: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
          rules:{
            uname:[
                {required:true,message:"用户名不能为空",trigger:'blur'},
                {pattern:/^[a-zA-Z0-9_-]{4,16}$/,message:"长度在4到16个字符",trigger:'blur'},
                {validator: checkuname,trigger: 'blur'}
            ],
            upwd:[
                {required:true,message:'请输入密码',trigger:'blur'},
                {min:6,max:20,message:'6~20位字符',trigger:'blur'}
            ],
            emails:[
                {required:true,message:'请输入邮箱地址',trigger:'blur'},
                {type:'email',message:'请输入正确的邮箱地址',trigger:'blur'}
            ],
            phone:[
                {required:true,message:'请输入电话号码',trigger:'blur'},
                {pattern:/^[1][3456789]\d{9}$/,message:'请输入正确的电话',trigger:'blur'}
            ]
          }
        }
      },        
   methods:{
    submitForm(formName) {
        var url='user/api/register';
        var u=this.ruleForm.uname;
        var p=this.ruleForm.upwd;
        var e=this.ruleForm.emails;
        var t=this.ruleForm.phone;
        var obj={uname:u,upwd:p,email:e,phone:t};
        this.axios.post(url,obj).then(result=>{
            if(result.data.code===200){
               this.$alert('提交成功',{callback:action=>{this.$router.push('/');}});
            }else{
                this.$alert("提交失败",{confirmButtonText:'确定'});
            }
        })
    },
   resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    handleclose(){
        this.$router.push('/');
  }
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
    margin-right: 200px;
}
.el-form-item__error{
    margin-left:8%;
}
.el-button{
    border-radius: 5px !important;
}
</style>

