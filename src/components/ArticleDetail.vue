<template>
	<div>
		<div class="col-md-9">
			<div class="article-title"><h4>这是标题</h4></div>
			<pre><code class="javascript">
$(document).ready(function() {
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});
			</code></pre>
		</div>
		<div class="col-md-3 article-stats">
			<div class="">作者:张三 + 小头像 </div>
			<div class="">文章发布时间</div>
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
</style>