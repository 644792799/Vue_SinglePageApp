<template>
	<div class="index">
		<el-row>
			<el-col :span="15" :offset="1">
			    <div style="margin-top: 15px;margin-bottom:15px;">
			    	<div class="filtercontainer">
			    		<span style="line-height:56px;font-size:18px;color:#586069;"><i class="icon-terminal" style="font-weight:600;"></i>&nbsp;发现代码</span>
			    		<el-button :class="icoclass" @click="toggleIcoClass()"></el-button>
			    		<el-form :inline="true" :model="formInline" class="demo-form-inline">
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
					  		<articleList :articlesdata="articlesdata" :isfullmode="isfullmode"></articleList>
					  	</div>
			    	</div>
			    </div>
			</el-col>
			<el-col :span="6" :offset="1" class="right-container">
				<div style="text-align:right;position:relative;border-bottom:1px solid #d4d9df;">
					<router-link to="/editor">
						<el-button style="margin: 10px 5px">添加代码片<i class="el-icon-plus el-icon--right"></i></el-button>
					</router-link>
				</div>
				<div style="position:relative;">
					<categoryCard :categoriesdata="categories"></categoryCard>
				</div>
				<!-- <div style="position:relative;">
					<codefilter></codefilter>
				</div> -->
				<!-- <div style="position:relative;background: #fbfcfc;">
					<SmsLine gradfrom="left"></SmsLine>
					<div class="subtitle">热搜词</div>
				</div> -->
			</el-col>
		</el-row>
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
						date: '2017-05-05 10:05'
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
						date: '2017-04-05 12:05'
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
						date: '2017-04-03 09:05'
					}
				],
				categories: [
					{
						name: 'JAVA',
						count: 155,
						isactive: false
					},
					{
						name: 'C#',
						count: 2546,
						isactive: false
					},
					{
						name: 'C++',
						count: 2546,
						isactive: false
					},
					{
						name: 'C',
						count: 2546,
						isactive: false
					},
					{
						name: 'PYTHON',
						count: 2546,
						isactive: false
					},
					{
						name: 'JAVASCRIPT',
						count: 155,
						isactive: false
					},
					{
						name: 'CSS',
						count: 2546,
						isactive: false
					},
					{
						name: 'HTML',
						count: 2546,
						isactive: false
					},
					{
						name: 'VUE',
						count: 2546,
						isactive: false
					},
					{
						name: 'REACT',
						count: 2546,
						isactive: false
					}
				],
				input5: '',
      			select: '',
      			activeName: 'second',
      			formInline: {
		          type: 'All',
		          language: 'All',
		          language2: 'All',
		          order: 'new'
		        },
		        icoclass: "icon-list",
		        isfullmode: true
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
	      },
	      toggleIcoClass: function(){
	      	if(this.icoclass == "icon-list"){
	      		this.icoclass = "icon-th-large";
	      		this.isfullmode = false;
	      	}else{
	      		this.icoclass = "icon-list";
	      		this.isfullmode = true;
	      	}
	      }
	    }
	}
</script>

<style type="text/css">
	.index .filtercontainer{
		position: relative;
		*text-align: right;
		display: flex;
    	justify-content: space-between;
    	flex-direction: row;
    	align-items: center;
	}
	.index .el-button--default:hover{
		border-color: var(--btn-border-color-primary, #20a0ff);
		color: var(--btn-hover-color-default, #ea7069);
	}
	.index .el-button--default:focus{
		color: var(--default-color, #1f2d3d);
	    border: 1px solid var(--border-color, #bfcbd9);
	}
	.index .el-form-item{
		width: 150px;
		vertical-align: middle;
		margin: 10px 5px;
	}
	.index .right-container{
		background: #fff;
    	box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.el-select .el-input {
    	width: 75px;
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