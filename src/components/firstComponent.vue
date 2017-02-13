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
		<div class="col-md-8">
			<articleList :articlesdata="articlesdata"></articleList>
		</div>
		<div class="col-md-4"></div>
	</div>
</template>

<script type="text/javascript">
	import BusinessCard from './BusinessCard.vue'
	import ArticleList from './ArticleList.vue'
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
				},
				articlesdata: [
					{
						avator: '/static/img/头像示例2.jpg',
						title: '基础知识汇总',
						category: ['类别1','类别2']
					},
					{
						avator: 'https://www.gravatar.com/avatar/644792799?d=http://tva4.sinaimg.cn/crop.0.0.599.599.50/62e42164gw1ev348sehr3j20go0go3zm.jpg',
						title: 'test2',
						category: ['类别3','类别4','类别5','类别6']
					}
				]
			}
		},
		components: {
			"businessCard": BusinessCard,
			"articleList": ArticleList
		}
	}
</script>