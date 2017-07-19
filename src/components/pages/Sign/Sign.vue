<template>
	<div class="sign">
		<div class="sign-in">
			<div class="title">
				<h3>登陆</h3>
			</div>
			<div class="form-ele">
				<el-form :model="signinRuleForm" :rules="signinrules" ref="signinRuleForm" label-width="70px" class="signinRuleForm" label-position="top" :show-message="false">
				  <el-form-item label="用户名" prop="username">
				    <el-input v-model="signinRuleForm.username" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="signinRuleForm.pass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item>
				  	<el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
				  	<span class="pull-right">
						<a href="" style="color:#20a0ff;">忘记密码?</a>
					</span>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('signinRuleForm')">登陆</el-button>
				  </el-form-item>
				</el-form>
			</div>
			<div class="thirdaccount">
				<div class="title">三方账号登陆</div>
				<div class="thirdaccount-logo">
					<i class="icon-weibo" style="color: rgb(234, 111, 90);"></i> 
					<i class="icon-wechat" style="color: rgb(66, 192, 46);"></i> 
					<i class="icon-qq" style="color: rgb(49, 148, 208);"></i> <i class="icon-github2"></i> 
					<i class="icon-google" style="color: rgb(49, 148, 208);"></i>
				</div>
			</div>
		</div>
		<div class="arc">&nbsp;</div>
		<div class="sign-up">
			<div class="title">
				<h3>注册</h3>
			</div>
			<div class="form-ele">
				<el-form :model="signupRuleForm" :rules="signuprules" ref="signupRuleForm" label-width="70px" class="signupRuleForm" label-position="top" :show-message="false">
				  <el-form-item label="用户名" prop="username">
				    <el-input v-model="signupRuleForm.username" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="signupRuleForm.pass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="确认密码" prop="checkPass">
				    <el-input type="password" v-model="signupRuleForm.checkPass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('signupRuleForm')">注册</el-button>
				  </el-form-item>
				</el-form>
			</div>
			<div>
				
			</div>
		</div>	
	</div>
</template>
<script type="text/javascript">
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.signupRuleForm.checkPass !== '') {
            this.$refs.signupRuleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.signupRuleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
      	rememberPassword: false,
        signinRuleForm: {
          pass: '',
          username: ''
        },
        signinrules: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          username: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      		{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ]
        },
        signupRuleForm: {
        	pass: '',
        	checkPass: '',
        	username: ''
        },
        signuprules: {
          pass: [
          	{ required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
          	{ required: true, message: '请输入确认密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
          username: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      		{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style type="text/css">
	.sign{
		position:relative;
		display:flex;
		flex-direction:row;
		height:440px;
		overflow:hidden;
		align-items:center;
		border-radius: 3px;
	}
	.sign .sign-in .title{
		margin: 50px 0 15px 20px;
		color: var(--title-color, #4e5359);
	}
	.sign .sign-in .form-ele{
		margin: 10px -20px 0 20px;
	}
	.sign .sign-in .thirdaccount{
		margin-left: 20px;
		margin-top: 25px;
	}
	.sign .sign-in .thirdaccount .title{
		font-size: 12px;
		color: var(--sub-title-color, #939c99);
		margin: 0 0 10px;
		position: relative;
	}
	.sign .sign-in .thirdaccount .title:after{
		content: "";
	    border-top: 1px solid #b5b5b5;
	    display: block;
	    position: absolute;
	    width: 80px;
	    top: 7px;
	    right: 0px;
	}
	.sign .sign-in .thirdaccount .thirdaccount-logo{
		font-size: 25px;

	}
	.sign .sign-in{
		height: 440px;
		width:180px;
		background:#f2f2f2;
		z-index: 1;
	}
	.sign .sign-up{
		width:320px;
		height:440px;
		background:#fff;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}
	.sign .sign-up .title{
		margin: 50px 0 15px 120px;
		color: var(--title-color, #4e5359);
	}
	.sign .sign-up .form-ele{
    	margin: 10px 20px 0 120px;
	}
	.sign .arc{
		position:absolute;
		left:-325px;
		height:600px;
		width:600px;
		border-right:1px solid #d5d5d5;
		border-top-right-radius: 300px;
	  	border-bottom-right-radius: 300px;
		background:#f2f2f2;
		box-shadow:inset -1px 0px 5px 0px #d5d5d5;
	}
	.sign .el-form-item {
	    margin-bottom: 10px;
	}
</style>