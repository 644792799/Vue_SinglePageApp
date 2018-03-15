<template>
	<div @click="ScrollToTop" class="scrolltotop"><i class="el-icon-arrow-up"></i></div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{}
		},
		methods: {
			ScrollToTop:  function(){
				document.body.scrollTop = document.documentElement.scrollTop = 0
			}
		}
	}
</script>
<style type="text/css">
	.scrolltotop{
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
	}
</style>