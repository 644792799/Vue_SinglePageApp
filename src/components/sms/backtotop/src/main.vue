<template>
	<div @click="BackToTop" class="sms-backtotop"><i class="el-icon-arrow-up"></i></div>
</template>
<script type="text/javascript">
	export default{
		name: 'SmsBackToTop',
		data(){
			return{}
		},
		methods: {
			BackToTop:  function(){
				document.body.scrollTop = document.documentElement.scrollTop = 0
			}
		}
	}
</script>
<style type="text/css">
	.sms-backtotop{
		width: 50px;
		height: 50px;
		position: fixed;
		bottom: 5px;
		right: 5px;
		z-index: 9999;
		cursor: pointer;
		text-align: center;
    	line-height: 50px;
    	background: #d4d9df;
    	opacity: 0.5;
	}
	.sms-backtotop:hover{
		opacity: 1;
	}
</style>