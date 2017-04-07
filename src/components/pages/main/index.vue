<template>
	<div>
		<el-row>
			<el-col :span="16" :offset="1">
			  	<div style="margin-top: 15px;" class="grid-content">
				  <el-input placeholder="查找代码片" v-model="input5" size="large">
				    <el-select v-model="select" slot="prepend" placeholder="请选择">
				      <el-option label="标题" value="1"></el-option>
				      <el-option label="內容" value="2"></el-option>
				      <el-option label="综合" value="3"></el-option>
				    </el-select>
				    <el-button slot="append" icon="search"></el-button>
				  </el-input>
				</div>
				<hr class="hr-hor">
				<div class="grid-content">
			  		<articleList :articlesdata="articlesdata"></articleList>
			  	</div>
			</el-col>
			<el-col :span="6" :offset="1">
				<div style="margin-top: 15px;" class="grid-content">
					<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <span style="line-height: 36px;">卡片名称</span>
					    <el-button style="float: right;" type="primary">操作按钮</el-button>
					  </div>
					  <div v-for="o in 4" class="text item">
					    {{'列表内容 ' + o }}
					  </div>
					</el-card>
					</div>
			</el-col>
		</el-row>
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
				],
				input5: '',
      			select: ''
			}
		},
		components: {
			"articleList": ArticleList
		}
	}
</script>

<style type="text/css">
	.el-select .el-input {
    	width: 110px;
  	}
</style>