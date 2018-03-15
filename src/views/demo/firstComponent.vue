<template>
	<el-row class="text-center">
	  <el-col :span="24">
	  	<div class="grid-content">
	  		&nbsp;
	  	</div>
	  </el-col>
	  <el-col :span="4">
		  <div class="grid-content">
		  	<SmsCard >
				<div slot="header" class="clearfix">
    				<span style="line-height: 36px;">卡片名称</span>
    				<el-button style="float: right;" type="primary">操作按钮</el-button>
  				</div>
  				<div v-for="o in 4" class="text item">
	    				{{'列表内容 ' + o }}
	  			</div>
		  	</SmsCard>
		  </div>
	  </el-col>
	  <el-col :span="4">
	  	<div class="grid-content">
	  		<el-checkbox v-model="checked" checked>备选项</el-checkbox>
	  	</div>
	  </el-col>
	  <el-col :span="4">
	  	<div class="grid-content">
	  		<!-- <div class="bs-c0 w20">
				<P>bs-c0</P>
				<P>#FFF</P>
			</div> -->
			<!-- <span class="default-language-color">
				<span class=""></span>
			</span> -->
			<SmsPoint language="java" label="Java"></SmsPoint>
			<SmsPoint language="php" label="Php"></SmsPoint>
			<SmsPoint language="javascript" label="Javascript"></SmsPoint>
			<SmsPoint language="css" label="Css"></SmsPoint>
			<SmsPoint label="Default"></SmsPoint>
	  	</div>
	  </el-col>
	  <el-col :span="3">
	  	<div class="grid-content">
	  		
	  	</div>
	  </el-col>
	  
	  <el-col :span="3">
	  	<div class="grid-content">
	  		
	  	</div>
	  </el-col>
	  <el-col :span="3">
	  	<div class="grid-content">
	  		
	  	</div>
	  </el-col>
	  <el-col :span="3">
	  	<div class="grid-content">
	  		
	  	</div>
	  </el-col>
	  <el-col :span="3">
	  	<div class="grid-content">
	  		
	  	</div>
	  </el-col>
	  <el-col :span="3">
	  	<div class="grid-content">
	  		
	  	</div>
	  </el-col>
	</el-row>
</template>

<script type="text/javascript">
	import BusinessCard from 'components/container/BusinessCard.vue'
	import ArticleList from 'components/code/ArticleList.vue'
	export default{
		data(){
			return {
				checked: true,
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
	.default-language-color{
		position: relative;
	    top: 1px;
	    display: inline-block;
	    width: 12px;
	    height: 12px;
	    border-radius: 50%;
	    background: #e4e4e4;
	    line-height: 12px;
	}
	.default-language-color span{
		background: #ccc;
		border-radius: 50%;
		width: 6px;
	    height: 6px;
	    margin: 3px;
	    display: inline-block;
	}
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