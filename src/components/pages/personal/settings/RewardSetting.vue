<template>
	<div class="rewardsetting">
		<div class="form-element">
			<label>打赏功能</label>
			<el-radio class="radio" v-model="form.rewardstate" label="1">打开</el-radio>
  			<el-radio class="radio" v-model="form.rewardstate" label="2">关闭</el-radio>
  			<div class="descript">打赏功能开启后，打赏按钮将出现在代码片描述底部</div>
  			<!-- <el-tooltip content="打赏功能开启后，打赏按钮将出现在代码片描述底部" placement="top" effect="light">
		    	<i class="icon-question"></i>
		    </el-tooltip> -->
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<label>默认打赏额度</label>
			<el-input placeholder="请输入内容" v-model="form.payquota">
		    	<template slot="append">
		    		<i class="icon-rmb"></i>
		    	</template>
		  	</el-input>
		</div>	
		<div class="form-element" style="display:flex;flex-direction: row;align-items: flex-start;">
			<label>打赏描述</label>
			<textarea placeholder=""></textarea>
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="form-element">
			<el-button type="primary" @click="onSubmit">保存</el-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    data() {
	      return {
	        form: {
	          rewardstate: '2',
	          payquota: 2
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
	.rewardsetting .form-element{
		display: flex;
		flex-direction: row;
		position: relative;
		padding: 10px 0;
		align-items: center;
		color: #48576a;
	}
	.rewardsetting .form-element .descript{
		font-size: 12px;
		display: flex;
		align-items: center;
		line-height: 1;
    	margin-left: 20px;
    	color: var(--sub-title-color, #939c99);
	}
	.rewardsetting .form-element i{
		cursor: pointer;
	}
	.rewardsetting .form-element>label:first-child{
	    text-align: right;
	    width: 100px;
	    margin-right: 20px;
	}
	.rewardsetting .form-element label{
		font-size: 14px;
	    color: #48576a;
	    line-height: 1;
	    padding: 11px 12px 11px 0;
	    box-sizing: border-box;
	}
	.rewardsetting .form-element .el-radio{
		text-align: left;
		width: auto;
	}
	.rewardsetting .form-element .el-input{
		width: 100px;
		margin-right: 10px;
	}
	.rewardsetting .form-element textarea{
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
	.rewardsetting .form-element textarea:hover{
		border-color: #8391a5;
	}
	.rewardsetting .form-element textarea:focus{
		outline: 0;
    	border-color: #20a0ff;
	}
</style>