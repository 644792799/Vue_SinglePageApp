<template>
	<div class="row">
		<div class="col-md-4">
			<div class="panel panel-default">
			  <div class="panel-heading">用户卡片</div>
			  <div class="panel-body">
			    <businessCard :userInfo="userInfo"></businessCard>
			  </div>
			  <div class="panel-footer text-right">作者:{{author}}</div>
			</div>
		</div>
		<div class="col-md-4"></div>
		<div class="col-md-4"></div>
	</div>
</template>

<script type="text/javascript">
	import BusinessCard from './BusinessCard.vue'
	export default{
		data(){
			return {
				author: "cjay",
				userInfo: {
					username: '644792799',
					fullname: 'CJay',
					avatar: '/static/img/头像示例2.jpg',
					socialnetwork: [{
						imgurl: '/static/img/qq.png',
						name: 'qq'
					}, {
						imgurl: '/static/img/github.png',
						name: 'github'
					}, {
						imgurl: '/static/img/weibo.png',
						name: 'weibo'
					}, {
						imgurl: '/static/img/google.png',
						name: 'google'
					}]
				}
			}
		},
		components: {
			"businessCard": BusinessCard
		}
	}
</script>