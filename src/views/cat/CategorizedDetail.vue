<template>
	<div class="categorized-detail">
		<div class="sub-nav">
			<div class="breadcrumb-container">
		  		<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>分类</el-breadcrumb-item>
				</el-breadcrumb>
		  	</div>
		</div>
		<div class="flex-row-layout">
			<div class="left">

			</div>
			<div>
				<div class="right">

				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    data () {
	      return {}
	    },
	    components: {
	    },
	    mounted () {
	      // hljs.initHighlightingOnLoad();
	      // $(function () {
	      //   $('pre code').each(function (i, block) {
	      //     hljs.highlightBlock(block)
	      //   })
	      // })
	    }
	  }
</script>
<style type="text/css">
	.categorized-detail{
		display: flex;
		flex-direction: column;
	}
	.categorized-detail .sub-nav{
		background: var(--bg-color, #fbfcfc);
		padding: 0 50px;
		display: flex;
    	align-items: center;
		*border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.categorized-detail .flex-row-layout{
		padding: 0 50px;
	}
	.categorized-detail .left{
		flex: 1;
	}
	.categorized-detail .right{
		width: 300px;
	    margin-top: 25px;
	    margin-left: 45px;
	    *padding: 10px;
	    *background: #Fff;
	    border-radius: 3px;
	    *border: 1px solid var(--border-color, #d4d9df);
	    *box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
</style>