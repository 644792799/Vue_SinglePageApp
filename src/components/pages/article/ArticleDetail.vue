<template>
	<div class="article-detail">
		<el-row>
		  <el-col :span="16" :offset="1">
		  	<div class="breadcrumb-container">
		  		<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ path: '/myarticle' }">用户</el-breadcrumb-item>
				  <el-breadcrumb-item>代码片详细</el-breadcrumb-item>
				</el-breadcrumb>
		  	</div>
		  	<div class="grid-content">
		  		<div class="article-title"><h3>这是标题</h3></div>
				<div class="article-content">
					<div class="tools">
						<articletools></articletools>
					</div>
					<div class="source">
						<pre><code class="javascript">$(document).ready(function() {
		$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	});
						</code></pre>
					</div>
					<div class="description">
						<div class="text-center article-desc-container">
							<h4 class="article-desc-title">代码片描述</h4>
							<div class="gradient-line"></div>
						</div>
						我姥姥姓刘，在北京城也算是个大姓，我至今对祖上发生的一切一无所知也无从考据，只知上世纪三四十年代家道中落，母亲出生不久就随父母和其他亲戚举家南迁，据说当时还余了些小钱在“红庙”地区开小旅馆为生，能供母亲读完师范和她两个妹妹长大。
					</div>
					<!-- <div class="article-cat">JAVA</div> -->
					
				</div>
		  	</div>
		  </el-col>
		   <el-col :span="6" class="right-container">
		   		<div class="grid-content article-stats">
		   			<div class=""><span class="tag">代码片作者</span>:张三 + 小头像 </div>
					<div class="">文章发布时间+阅读量</div>
					<div class="">语言分类:java</div>
					<div class="">分享</div>
					<div class="">赞</div>
		   		</div>
		   </el-col>
		</el-row>
	</div>
</template>

<script type="text/javascript">
	import $ from 'jquery'
    import hljs from 'pluginspath/highlight/highlight.pack.js'
    import Tools from 'components/comps/article/ArticleTools.vue'

    export default {
	    data () {
	      return {}
	    },
	    components: {
	      "articletools": Tools
	    },
	    mounted () {
	      hljs.initHighlightingOnLoad();
	      $(function () {
	        $('pre code').each(function (i, block) {
	          hljs.highlightBlock(block)
	        })
	      })
	    }
	  }
</script>

<style type="text/css">
	.breadcrumb-container{
		margin: 15px 0;
		position: relative;
	}
	.article-desc-title{
		font-size: 18px;
		color: #A5A7A8;
		*border-bottom: 1px solid #CED0D2;
		display: table;
		margin: 10px auto;
		padding: 2px 0;
		font-weight: 400;
	}
	.article-desc-container{
		position: relative;
	}
	pre{
		background-color: #F9FAFB!important;
		border: 1px solid #CED0D2!important;
	}
	.article-content{
		position: relative;
		max-height: 700px;
		border: 1px solid #eaeefb;
	    border-radius: 4px;
	    transition: .2s;
	    background: #fff;
	    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
	}
	.article-content pre{
		border: 0!important;
	}
	.article-content .hljs{
		background-color: #F9FAFB!important;
	}
	.article-content .tools{
		background: #fff;
		height: 50px;
		border-bottom: 1px solid #eaeefb;
	}
	.article-content .source{
		padding: 18px 24px;
		background-color: #F9FAFB!important;
	}
	.article-content code {
    	font-family: Menlo,Monaco,Consolas,Courier,monospace;
	}
	.article-content .description{
	    border-top: 1px solid #eaeefb;
	    clear: both;
	    min-height: 300px;
	    transition: height .2s;
	    padding: 24px;

	    color: #4E5359;
	    word-break: break-word;
	    font-size: 16px;
	    font-weight: 400;
	    line-height: 1.7;
	}
	.article-content .article-cat{
		position: absolute;
		top: 5px;
		left: 5px;
		padding: 2px 5px;
		font-size: 14px;
		font-weight: bold;
		*border: 1px solid #ccc;
		z-index: 99;
		background-color: #F9FAFB;
		color: #58B7FF;
	}
	.article-stats{
		display: flex;
		flex-direction: column;
		margin-top: 12px;
	}

	.article-stats div{
		height: 40px;
		border-bottom: 1px solid #eaeefb;
		width: 100%;
		align-items: center;
		line-height: 40px;
    	font-size: 12px;
    	font-weight: 400;
    	padding: 0 0 0 10px;
	}

	.article-stats div i{
		font-size: 20px;
	}

	.article-detail .article-title{
		margin-bottom: 12px; 
	}
</style>