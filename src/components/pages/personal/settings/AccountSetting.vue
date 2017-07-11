<template>
	<div class="accountsetting">
		<div class="form-element">
			<label>当前密码</label>
			<el-input v-model="form.currentsec" placeholder="6-15位，包含数字和字母"></el-input> 
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>新密码</label>
			<el-input v-model="form.newsec" placeholder="新密码和当前密码不能相同"></el-input> 
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>确认密码</label>
			<el-input v-model="form.confirmsec" placeholder="确认密码和新密码保持一致"></el-input> 
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<el-button type="primary" @click="onSubmit">提交</el-button>
			<!-- <el-button>取消</el-button> -->
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    data() {
	      return {
	        form: {
	          currentsec: '',
	          newsec: '',
	          confirmsec: ''
	        },
	        pickerOptions0: {
	          // disabledDate(time) {
	          //   return time.getTime() < Date.now() - 8.64e7;
	          // }
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
	.accountsetting .form-element{
		display: flex;
		flex-direction: row;
		position: relative;
		padding: 10px 0;
		align-items: center;
	}
	.accountsetting .form-element>label:first-child{
	    text-align: right;
	    width: 100px;
	    margin-right: 20px;
	}
	.accountsetting .form-element label{
		font-size: 14px;
	    color: #48576a;
	    line-height: 1;
	    padding: 11px 12px 11px 0;
	    box-sizing: border-box;
	}
	.accountsetting .form-element .el-checkbox{
		margin-left: 0;
	}
	.accountsetting .form-element .el-input{
		width: 250px;
		margin-right: 10px;
	}
	.accountsetting .el-button--primary{
		background: var(--btn-bg-color-primary, #20a0ff);
    	border-color: var(--btn-border-color-primary, #20a0ff);
    	color: var(--btn-font-color-primary, #fff);
	}
	.accountsetting .el-button--primary:hover{
		background: var(--btn-hover-bg-color-primary, #4db3ff);
		border-color: var(--btn-hover-border-color-primary, #4db3ff);
	}
	.accountsetting .el-button--default:hover{
		border-color: var(--btn-border-color-primary, #20a0ff);
		color: var(--btn-hover-color-default, #ea7069);
	}
</style>