<template>
	<div>
		<h1>组件一</h1>
		<a href="#">written by {{author}}</a>
		<businessCard :imgurl="userImg"></businessCard>
	</div>
</template>

<script type="text/javascript">
	import BusinessCard from './BusinessCard.vue'
	export default{
		data(){
			return {
				author: "cjay",
				userImg: '/static/img/头像示例2.jpg'
			}
		},
		components: {
			"businessCard": BusinessCard
		}
	}
</script>