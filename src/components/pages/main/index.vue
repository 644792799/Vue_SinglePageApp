<template>
	<div class="row index">
		<div class="col-md-10">
			<div class="input-group">
			  <input type="text" class="form-control" placeholder="查找代码片" aria-describedby="basic-addon2">
			  <span class="input-group-addon" id="basic-addon2"><i class="glyphicon glyphicon-search"></i></span>
			</div>
			<hr>
			<articleList :articlesdata="articlesdata"></articleList>
		</div>
		<div class="col-md-3">
			
		</div>
	</div>
</template>

<script type="text/javascript">
	import ArticleList from 'components/comps/article/ArticleList.vue'
	export default{
		data(){
			return {
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
			"articleList": ArticleList
		}
	}
</script>

<style type="text/css">
	.index hr{
		margin: 15px auto!important;
	}
	.index .form-control{
		height: 45px;
	}
</style>