<template>
	<div class="personalsetting">
		<div class="form-element">
			<label>真实姓名</label>
			<el-input v-model="form.realname" placeholder="请输入真实姓名"></el-input>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>性别</label>
			<el-radio class="radio" v-model="form.sex" label="1">男</el-radio>
  			<el-radio class="radio" v-model="form.sex" label="2">女</el-radio>
  			<el-radio class="radio" v-model="form.sex" label="3">保密</el-radio>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>出生日期</label>
			<el-date-picker
		      v-model="form.birthday"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions0">
		    </el-date-picker>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>所在公司</label>
			<el-input v-model="form.company" placeholder="请输入所在公司"></el-input>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element" style="display:flex;flex-direction: row;align-items: flex-start;">
			<label>个人描述</label>
			<textarea placeholder=""></textarea>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>个人网站</label>
			<el-input v-model="form.website" placeholder="请输入个人网站"></el-input>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element thirdaccount">
			<label>三方账号</label>
			<div class="thirdaccount-item-container">
				<div class="thirdaccount-item">
					<i class="icon-weibo" style="color:#ea6f5a;"></i>
					<div>
						<a href="">新浪微博账号绑定</a>
					</div>
				</div>
				<div class="thirdaccount-item">
					<i class="icon-wechat" style="color:#42c02e;"></i>
					<div>
						<a href="">微信账号绑定</a>
					</div>
				</div>
				<div class="thirdaccount-item">
					<i class="icon-qq" style="color:#3194d0;"></i>
					<div>
						<a href="">QQ账号绑定</a>
					</div>
				</div>
				<div class="thirdaccount-item">
					<i class="icon-github2"></i>
					<div>
						<a href="">GITHUB账号绑定</a>
					</div>
				</div>
				<div class="thirdaccount-item">
					<i class="icon-google" style="color:#3194d0;"></i>
					<div>
						<a href="">GOOGLE账号绑定</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    data() {
	      return {
	        form: {
	          realname: '',
	          nickname: '小哥哥',
	          sex: '3',
	          birthday: '',
	          phoneno: '',
	          verno: '',
	          checked: true,
	          company: '',
	          website: ''
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
	.personalsetting .form-element{
		display: flex;
		flex-direction: row;
		position: relative;
		padding: 10px 0;
		align-items: center;
	}
	.personalsetting .thirdaccount{
		display:flex;
		align-items: baseline;
	}
	.personalsetting .thirdaccount .thirdaccount-item-container{
		display:flex;
		flex-direction:column;
		align-items: flex-start;
	}
	.personalsetting .thirdaccount .thirdaccount-item-container .thirdaccount-item{
		display:flex;
		flex-direction:row;
		align-items: center;
		position: relative;
		line-height: 1.78;
		padding: 10px 0;
	}
	.personalsetting .thirdaccount .thirdaccount-item-container .thirdaccount-item:first-child{
		padding-top: 0; 
	}
	.personalsetting .thirdaccount .thirdaccount-item-container .thirdaccount-item i{
		font-size: 20px;
	}
	.personalsetting .thirdaccount .thirdaccount-item-container .thirdaccount-item>div{
		margin-left: 30px;
		font-size: 14px;
	}
	.personalsetting .thirdaccount .thirdaccount-item-container .thirdaccount-item a{
		color: var(--content-color, #4E5359);
	}
	.personalsetting .thirdaccount .thirdaccount-item-container .thirdaccount-item a:hover{
		color: var(--link-hover-color, #20a0ff);
	}
	.personalsetting .form-element label{
		font-size: 14px;
	    color: #48576a;
	    line-height: 1;
	    padding: 11px 12px 11px 0;
	    box-sizing: border-box;
	    text-align: right;
	    width: 80px;
	}
	.personalsetting .form-element .el-radio{
		text-align: left;
		width: auto;
	}
	.personalsetting .form-element textarea{
		width: 500px;
	    height: 50px;
	    padding: 8px 10px;
	    font-size: inherit;
	    border: 1px solid #bfcbd9;
	    border-radius: 4px;
	    *background-color: hsla(0,0%,71%,.1);
	    display: block;
	    resize: none;
	    outline-style: none;
	    overflow: auto;
	    color: #1f2d3d;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	}
	.personalsetting .form-element textarea:hover{
		border-color: #8391a5;
	}
	.personalsetting .form-element textarea:focus{
		outline: 0;
    	border-color: #20a0ff;
	}
	.personalsetting .form-element .el-checkbox{
		margin-left: 0;
	}
	.personalsetting .form-element .el-input{
		width: 250px;
		margin-right: 10px;
	}
</style>