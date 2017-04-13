<template>
	<div>
		<el-row>
			<el-col :span="16" :offset="1">
			  	<div style="margin-top: 15px;margin-bottom:15px;" class="grid-content">
				  <el-input placeholder="查找代码片" v-model="input5" size="large">
				    <el-select v-model="select" slot="prepend" placeholder="请选择">
				      <el-option label="标题" value="1"></el-option>
				      <el-option label="內容" value="2"></el-option>
				      <el-option label="综合" value="3"></el-option>
				    </el-select>
				    <el-button slot="append" icon="search"></el-button>
				  </el-input>
				</div>
				<el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="评分最高" name="first">
				    	<div class="grid-content">
					  		<articleList :articlesdata="articlesdata"></articleList>
					  	</div>
				    </el-tab-pane>
				    <el-tab-pane label="最新发布" name="second">
				    	<articleList :articlesdata="articlesdata"></articleList>
				    </el-tab-pane>
				    <el-tab-pane label="收藏最多" name="third">
				    	<articleList :articlesdata="articlesdata"></articleList>
				    </el-tab-pane>
				    <el-tab-pane label="FORK最多" name="fourth">
				    	<articleList :articlesdata="articlesdata"></articleList>
				    </el-tab-pane>
			    </el-tabs>
			    <div style="text-align:center;margin-top:20px;">
			    	<div class="block">
					    <el-pagination
					      @size-change="handleSizeChange"
					      @current-change="handleCurrentChange"
					      :current-page="currentPage3"
					      :page-size="100"
					      layout="prev, pager, next, jumper"
					      :total="1000">
					    </el-pagination>
					</div>
			    </div>
				<!-- <hr class="hr-hor"> -->
			</el-col>
			<el-col :span="6" class="right-container">
				<div style="text-align:right;position:relative;">
					<router-link to="/editor">
						<el-button style="margin: 10px 5px">添加代码片<i class="el-icon-plus el-icon--right"></i></el-button>
						</router-link>
					<div class="gradient-line"></div>
				</div>
				<div style="position:relative;">
					<div class="gradient-line"></div>
					<categoryCard :categoriesdata="categories"></categoryCard>
				</div>
				<div style="position:relative;">
					<div class="gradient-line"></div>
					<div class="subtitle">热搜词</div>
				</div>
				<!-- <div style="margin-top: 15px;" class="grid-content">
					<el-card class="">
					  <div slot="header" class="clearfix">
					    <span style="line-height: 36px;">卡片名称</span>
					  </div>
					  <div v-for="o in 4" class="text item">
					    {{'列表内容 ' + o }}
					  </div>
					</el-card>
				</div> -->
			</el-col>
		</el-row>
	</div>

</template>

<script type="text/javascript">
	import ArticleList from 'components/comps/article/ArticleList.vue'
	import CategoryCard from 'components/comps/common/CategoryCard.vue'
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
				categories: [
					{
						name: 'JAVA',
						count: 155
					},
					{
						name: 'C#',
						count: 2546
					},
					{
						name: 'C++',
						count: 2546
					},
					{
						name: 'C',
						count: 2546
					},
					{
						name: 'PYTHON',
						count: 2546
					}
				],
				input5: '',
      			select: '',
      			activeName: 'second',
      			currentPage3: 5
			}
		},
		components: {
			"articleList": ArticleList,
			"categoryCard": CategoryCard
		},
		methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      },
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        this.currentPage = val;
	        console.log(`当前页: ${val}`);
	      }
	    }
	}
</script>

<style type="text/css">
	.el-select .el-input {
    	width: 110px;
  	}
  	.el-tabs__header{
  		margin: 0 0 0!important;
  		border-bottom: 1px solid #d4d9df!important;
  	}
  	.el-tabs__content{
		box-shadow: #d5d9de -1px 1px 2px 0px;
	}
	.subtitle{
		font-size: 14px;
    	font-weight: 600;
    	display: inline-block !important;
    	padding-top: 15px;
		padding-left: 15px;
    	line-height: 1.5;
	}
</style>