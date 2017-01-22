<template>
	<div id="businessCard">
		<div class="userPhoto">
			<img :src="imgurl == undefined || imgurl == null || imgurl == '' ? defaultimgurl : imgurl">
		</div>
		<div class="socialNetwork"></div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				defaultimgurl: '/static/img/头像示例.jpg'
			}
		},
		props: ['imgurl']
	}
</script>

<style type="text/css">
	.userPhoto img{
		width: 100px;
		height: 100px;
	}
</style>