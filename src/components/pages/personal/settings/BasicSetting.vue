<template>
	<div class="basicsetting">
		<div class="form-element">
			<label>注册邮箱</label>
			<el-input v-model="form.email" :disabled="true" placeholder="请输入常用的邮箱地址"></el-input> 
			<i class="icon-check-circle2"></i>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>昵称</label>
			<el-input v-model="form.nickname" placeholder="请输入昵称"></el-input> 
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>手机绑定</label>
			<el-input v-model="form.phoneno" placeholder="请输入手机号"></el-input><el-input placeholder="短信验证码" v-model="form.verno">
			    <template slot="append">发送验证码</template>
			</el-input>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element" style="display:flex;align-items: baseline;">
			<label>消息提醒</label>
			<div style="display:flex;flex-direction:column;align-items: flex-end;">
				<el-checkbox v-model="form.checked">当有人对我发布的代码评论时</el-checkbox>
				<el-checkbox v-model="form.checked">当有人回复我的评论时</el-checkbox>
				<el-checkbox v-model="form.checked">当有人关注我时</el-checkbox>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          email: '496150841@qq.com',
          nickname: '小哥哥',
          phoneno: '',
          verno: '',
          checked: true
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style type="text/css">
	.basicsetting .form-element{
		display: flex;
		flex-direction: row;
		position: relative;
		padding: 10px 0;
		align-items: center;
	}
	.basicsetting .form-element label{
		font-size: 14px;
	    color: #48576a;
	    line-height: 1;
	    padding: 11px 12px 11px 0;
	    box-sizing: border-box;
	    text-align: right;
	    width: 80px;
	}
	.basicsetting .form-element .el-checkbox{
		margin-left: 0;
	}
	.basicsetting .form-element .el-input{
		width: 250px;
		margin-right: 10px;
	}
</style>