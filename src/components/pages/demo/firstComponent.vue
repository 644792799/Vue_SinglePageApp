<template>
	<div class="row">
		<div class="col-md-12 h20"></div>
		<div class="col-md-1"></div>
		<div class="col-md-1 p0">
			<div class="bs-c0 w20">
				<P>bs-c0</P>
				<P>#FFF</P>
			</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c1 w20">
				<P>bs-c1</P>
				<P>#F9FAFB</P>
			</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c2 w20"><P>bs-c2</P><P>#CED0D2</P></div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c3 w20"><P>bs-c3</P><P>#5D5794</P></div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c4 w20"><P>bs-c4</P> <P>#D4ECDC</P></div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c5 w20"><P>bs-c5</P> <P>#7DD196</P></div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c6 w20"><P>bs-c6</P> <P>#4E5359</P></div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c7 w20"><P>bs-c7</P> <P>#A5A7A8</P></div>
		</div>
		<div class="col-md-12 h20"></div>

		<div class="col-md-12">
			<button class="btn-1 btn">注册</button>
			<button class="btn-2 btn">登陆</button>
			<button class="btn-3 btn">登陆</button>
		</div>
		<div class="col-md-12 h20"></div>


		<div class="col-md-12">
			<articleList :articlesdata="articlesdata"></articleList>
		</div>
		<div class="col-md-4">
			<div class="panel panel-default">
			  <div class="panel-heading">用户卡片</div>
			  <div class="panel-body">
			    <businessCard :userInfo="userInfo"></businessCard>
			  </div>
			  <div class="panel-footer text-right">作者:{{author}}</div>
			</div>
		</div>
		
		
	</div>
</template>

<script type="text/javascript">
	import BusinessCard from 'components/comps/common/BusinessCard.vue'
	import ArticleList from 'components/comps/article/ArticleList.vue'
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
						category: ['类别1','类别2'],
						url: '/#/article'
					},
					{
						avator: 'https://www.gravatar.com/avatar/644792799?d=http://tva4.sinaimg.cn/crop.0.0.599.599.50/62e42164gw1ev348sehr3j20go0go3zm.jpg',
						title: 'test2',
						category: ['类别3','类别4','类别5','类别6'],
						url: '/#/article'
					},
					{
						avator: '/static/img/头像示例.jpg',
						title: '基础知识汇总2',
						category: ['类别1','类别2'],
						url: '/#/article'
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

<style type="text/css">
	.w20{
		height: 40px;
		text-align: center;
	}
	.p0{
		padding: 0!important;
	}
	.w20:hover{
		background-image: none;
	    -webkit-transform: scale(1.5);
	    -moz-transform: scale(1.5);
	    -o-transform: scale(1.5);
	    transform: scale(1.5);
	    box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
	}
	.p0:hover{
		z-index: 9999;
	}
	.h20{
		*height: 20px;
		margin: 5px 0;
		border-bottom: 1px solid #eee;
	}
</style>