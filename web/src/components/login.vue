<template>
	<div class="main">
		<el-button type="text" style="color:rgb(177, 105, 57);margin-top:15px;" @click="dialogFormVisible = true">登录
		</el-button>
		<el-dialog :modal-append-to-body='false' id='myclass' title="用户登录" :before-close="handleclose"
		           :visible.sync="dialogFormVisible">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px">
				<el-form-item label="用户名" prop="uname">
					<el-input type="text" v-model="ruleForm.uname" autofocus placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="upwd">
					<el-input type="password" v-model="ruleForm.upwd" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		inject: ['reload'],
		data () {
			return {
				dialogFormVisible: false,
				ruleForm: {
					uname: '',
					upwd: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					uname: { required: true, message: "请输入用户名", trigger: 'blur' },
					upwd: { required: true, message: '请输入密码', trigger: 'blur' }
				}
			}
		},
		methods: {
			submitForm () {
				var url = "/user/api/login";
				var u = this.ruleForm.uname;
				var p = this.ruleForm.upwd;
				if (u === '') {
					console.log("用户名不能为空");
					return;
				}
				if (u === '') {
					console.log("密码不能为空");
					return;
				}
				var obj = { uname: u, upwd: p };
				this.axios.post(url, obj).then(result => {
					if (result.data.code === 200) {
						console.log(result.data);
						let userInfo = JSON.stringify(result.data.result[0]);
						this.$store.commit('setUserInfo', userInfo);
						this.$message({
							message: '登录成功',
							type: 'success'
						});
						this.dialogFormVisible = false;
						this.$router.go(0);
					} else {
						this.$alert("用户名或者密码不正确", { confirmButtonText: '确定' });
					}
				});
				this.$emit('ruleFormData', this.ruleForm)
			},
			handleclose () {
				this.dialogFormVisible = false;
			},
		}
	}
</script>
<style scoped>
	#myclass {
		position: absolute;
		top: 270%;
		left: 50%;
		margin-top: -350px;
		margin-left: -400px;
		overflow: hidden;
		width: 800px;
		height: 700px;
		border-radius: 5px;
	}

	/*设置图片样式*/
	.d1 {
		background: url("../../public/img/index/index-1.png") no-repeat;
		background-size: 100% 100%;
		height: 500px;
	}

	/*设置对话框的样式*/
	.el-dialog {
		text-align: center;
	}

	/*设置对话框宽度*/
	.el-input {
		width: 250px !important;
		/*margin-right: 200px;*/
	}

	.el-form-item__error {
		margin-left: 8%;
	}

	.el-button {
		margin-left: -20% !important;
		border-radius: 5px !important;
	}
</style>
