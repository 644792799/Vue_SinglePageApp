<template>
	<div class="search">
		<!-- <el-row>
			<el-col :span="15" :offset="1"> -->
			<div class="left">
			    <div style="margin-top: 15px;margin-bottom:15px;">
			    	<div class="search-container">
			    		<el-input v-model="searchinput" size="large" placeholder="请输入查询内容"></el-input>
			    	</div>
			    	<div class="filtercontainer">
			    		<span style="line-height:56px;font-size:18px;color:#586069;"><i class="icon-terminal" style="font-weight:600;"></i>&nbsp;查找代码</span>
			    		<el-form :inline="true" :model="formInline" class="demo-form-inline pull-right">
						  <el-form-item label="排序">
						    <el-select v-model="formInline.order" placeholder="类型选择">
						      <el-option label="最新发布" value="new"></el-option>
						      <el-option label="收藏最多" value="star"></el-option>
						      <el-option label="FORK最多" value="fork"></el-option>
						      <el-option label="评分最高" value="vote"></el-option>
						    </el-select>
						  </el-form-item>
						</el-form>
						<SmsLine gradfrom="left"></SmsLine>
			    	</div>
			    	<div>
			    		<div class="grid-content">
					  		<articleList :articlesdata="articlesdata"></articleList>
					  	</div>
			    	</div>
			    </div>
			</div>    
			<!-- </el-col>
			<el-col :span="6" :offset="1" class="right-container"> -->
			<div>
				<div class="right">
					<div style="text-align:right;position:relative;border-bottom:1px solid #d4d9df;">
						<router-link to="/user/1/snipt/1/addsnipt">
							<el-button style="margin: 10px 5px">添加代码片<i class="el-icon-plus el-icon--right"></i></el-button>
						</router-link>
					</div>
					<!-- <div style="position:relative;">
						<categoryCard :categoriesdata="categories"></categoryCard>
					</div> -->
					<div style="position:relative;">
						<codefilter></codefilter>
					</div>
					<!-- <div style="position:relative;background: #fbfcfc;">
						<SmsLine gradfrom="left"></SmsLine>
						<div class="subtitle">热搜词</div>
					</div> -->
				</div>	
			</div>
			<!-- </el-col>
		</el-row> -->
	</div>

</template>

<script type="text/javascript">
	import ArticleList from 'components/comps/article/ArticleList.vue'
	import CategoryCard from 'components/comps/common/CategoryCard.vue'
	import CodeFilter from 'components/comps/common/CodeFilter.vue'
	
	export default{
		data(){
			return {
				articlesdata: [
					{
						avator: '/static/img/头像示例2.jpg',
						title: '基础知识汇总',
						category: ['类别1','类别2'],
						url: '/#/article',
						cat: 'java',
						view: 56,
						star: 24,
						fork: 71,
						date: '2017-05-05 10:05',
						username: '小哥哥'
					},
					{
						avator: 'https://www.gravatar.com/avatar/644792799?d=http://tva4.sinaimg.cn/crop.0.0.599.599.50/62e42164gw1ev348sehr3j20go0go3zm.jpg',
						title: 'test2',
						category: ['类别3','类别4','类别5','类别6'],
						url: '/#/article',
						cat: 'css',
						view: 72,
						star: 30,
						fork: 66,
						date: '2017-04-05 12:05',
						username: '小哥哥'
					},
					{
						avator: '/static/img/头像示例.jpg',
						title: '基础知识汇总2',
						category: ['类别1','类别2'],
						url: '/#/article',
						cat: 'javascript',
						view: 100,
						star: 80,
						fork: 98,
						date: '2017-04-03 09:05',
						username: '小哥哥'
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
					},
					{
						name: 'JAVASCRIPT',
						count: 155
					},
					{
						name: 'CSS',
						count: 2546
					},
					{
						name: 'HTML',
						count: 2546
					},
					{
						name: 'VUE',
						count: 2546
					},
					{
						name: 'REACT',
						count: 2546
					}
				],
				input5: '',
				searchinput: '',
      			select: '',
      			activeName: 'second',
      			formInline: {
		          type: 'All',
		          language: 'All',
		          language2: 'All',
		          order: 'new'
		        }
			}
		},
		components: {
			"articleList": ArticleList,
			"categoryCard": CategoryCard,
			"codefilter": CodeFilter
		},
		methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      }
	    }
	}
</script>

<style type="text/css">
	.search{
		display: flex;
		flex-direction: row;
		*padding: 0 4.16667%;
		*padding-top: 50px;
	}
	.search .left{
		flex: 1;
	}
	.search .right{
		width: 300px;
	    margin-top: 25px;
	    margin-left: 45px;
	    *padding: 10px;
	    background: #Fff;
	    border-radius: 3px;
	    border: 1px solid var(--border-color, #d4d9df);
	    box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.search .filtercontainer{
		position: relative;
		*text-align: right;
	}
	.search .el-button--default:hover{
		border-color: var(--btn-border-color-primary, #20a0ff);
		color: var(--btn-hover-color-default, #ea7069);
	}
	.search .search-container .el-input input{
		border: 0;
	    border-bottom: 1px solid var(--border-color, #d4d9df);
	    background: var(--bg-color, #fbfcfc);
	    border-radius: 0;
	}
	.search .el-form-item{
		width: 150px;
		vertical-align: middle;
		margin: 10px 5px;
	}
	.search .right-container{
		background: #fff;
    	box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.search .el-select .el-input {
    	width: 75px;
  	}
  	.search .el-tabs__header{
  		margin: 0 0 0!important;
  		border-bottom: 1px solid #d4d9df!important;
  	}
  	.search.el-tabs__content{
		box-shadow: #d5d9de -1px 1px 2px 0px;
	}
	.search .subtitle{
		font-size: 14px;
    	font-weight: 600;
    	display: inline-block !important;
    	padding-top: 15px;
		padding-left: 15px;
    	line-height: 1.5;
	}
	.search .sms-card{
		box-shadow: none;
		margin-bottom: 0;
	}
</style>