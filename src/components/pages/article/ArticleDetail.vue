<template>
	<div class="article-detail">
		<div class="col-md-9">
			<div class="article-title"><h4>这是标题</h4></div>
			<div class="article-content">
				<div class="article-cat">JAVA</div>
				<pre><code class="javascript">
$(document).ready(function() {
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});
				</code></pre>
			</div>
			<div class="article-desc">
				<div class="text-center">
					<h4 class="article-desc-title">代码片描述</h4>
				</div>
				我姥姥姓刘，在北京城也算是个大姓，我至今对祖上发生的一切一无所知也无从考据，只知上世纪三四十年代家道中落，母亲出生不久就随父母和其他亲戚举家南迁，据说当时还余了些小钱在“红庙”地区开小旅馆为生，能供母亲读完师范和她两个妹妹长大。
			</div>
		</div>
		<div class="col-md-3 article-stats">
			<div class=""><span class="tag">代码片作者</span>:张三 + 小头像 </div>
			<div class="">文章发布时间+阅读量</div>
			<div class="">语言分类:java</div>
			<div class="">分享</div>
			<div class="">赞</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import $ from 'jquery'
    import hljs from 'pluginspath/highlight/highlight.pack.js'

    export default {
	    data () {
	      return {}
	    },
	    components: {
	      
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
	.article-desc{
		color: #4E5359;
	    word-break: break-word;
	    font-size: 16px;
	    font-weight: 400;
	    line-height: 1.7;
	}
	.article-desc-title{
		font-size: 16px;
		color: #A5A7A8;
		border-bottom: 1px solid #CED0D2;
		display: table;
		margin: 10px auto;
		padding: 2px 0;
	}
	pre{
		background-color: #F9FAFB!important;
		border: 1px solid #CED0D2!important;
	}
	.article-content{
		position: relative;
		max-height: 700px;
	}
	.article-content .article-cat{
		position: absolute;
		top: -12px;
		right: 0px;
		padding: 2px 5px;
		font-size: 14px;
		font-weight: bold;
		border: 1px solid #ccc;
		z-index: 99;
		background-color: #F9FAFB;
		color: #7DD196;
	}
	.article-stats{
		display: flex;
		flex-direction: column;
	}

	.article-stats div{
		height: 40px;
		border-bottom: 1px solid #CED0D2;
		width: 100%;
		align-items: center;
		line-height: 40px;
    	font-size: 14px;
	}

	.article-stats div i{
		font-size: 20px;
	}

	.article-detail .article-title{
		margin-bottom: 12px; 
	}
</style>