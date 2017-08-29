<template>
	<div class="categorized">
		<!-- <div class="sub-nav">
			<div class="breadcrumb-container">
		  		<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>分类</el-breadcrumb-item>
				</el-breadcrumb>
		  	</div>
		</div> -->
		<div class="flex-row-layout">
			<div style="margin-top: 15px; margin-bottom: 15px;flex:1;">
				<div class="filtercontainer">
		    		<span style="line-height:56px;font-size:18px;color:#586069;"><i class="icon-terminal" style="font-weight:600;"></i>&nbsp;代码分类</span>
		    		<div class="formcontainer">
		    			<el-checkbox v-model="followed">已关注</el-checkbox> 
			    		<el-form :inline="true" :model="formInline" class="demo-form-inline">
						  <el-form-item label="排序">
						    <el-select v-model="formInline.order" placeholder="类型选择">
						      <el-option label="码片数量" value="snipt"></el-option>
						      <el-option label="关注人数" value="follow"></el-option>
						    </el-select>
						  </el-form-item>
						</el-form>
					</div>
					<SmsLine gradfrom="left"></SmsLine>
		    	</div>
		    	<div class="catcontainer">
		    		<div class="catitem" v-for="i in 10">
		    			<div class="catitem-title">
		    				<div>
		    					java
		    				</div>
		    				<div class="button-follow-container">
		    					<el-button-group>
									<el-button class="button-follow" size="small">添加关注</el-button>
									<el-button class="button-follow-count icon-user-plus3" size="small"></el-button>
								</el-button-group>
		    				</div>
		    			</div>
		    			<div class="catitem-stats">
		    				<div></div>
		    				<div></div>
		    			</div>
		    		</div>
		    	</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    data () {
	      return {
	      	formInline: {
	          order: 'snipt'
	        },
	        followed: false
	      }
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
	.categorized{
		display: flex;
		flex-direction: column;
	}
	.categorized .sub-nav{
		background: var(--bg-color, #fbfcfc);
		padding: 0 50px;
		display: flex;
    	align-items: center;
		*border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.categorized .flex-row-layout{
		padding: 0 50px;
	}
	.categorized .filtercontainer{
		position: relative;
		*text-align: right;
		display: flex;
    	justify-content: space-between;
    	flex-direction: row;
    	align-items: center;
	}
	.categorized .filtercontainer .formcontainer{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.categorized .filtercontainer .formcontainer .el-checkbox{
		margin-right: 10px;
		color: var(--title-color, #4e5359);
	}
	.categorized  .filtercontainer .el-form-item{
		width: 150px;
		vertical-align: middle;
		margin: 10px 5px;
	}
	.categorized .catcontainer{
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.categorized .catcontainer .catitem{
		display: flex;
		flex-direction: row;
		align-items: center;
		*border: 1px solid var(--border-color, #e4e8f1);
		border-radius: 4px;
		box-shadow: var(--left-box-shadow, #d5d9de -0.5px 0.5px 4px 0px);
		margin: 10px 10px 10px 0;
		width: 200px;
		position: relative;
		background: #fff;
	}
	.categorized .catcontainer .catitem .catitem-title{
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		height: 100%;
		border-right: 1px solid var(--border-color, #e4e8f1);
		font-weight: 600;
    	font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
		text-transform: uppercase;
	}
	.categorized .catcontainer .catitem .catitem-title>div{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.categorized .catcontainer .catitem .catitem-title>div:first-child{
		flex: 1;
		font-size: 20px;
		color: var(--title-color, #4e5359);
	}
	.categorized .catcontainer .catitem .catitem-title>div:last-child{
		height: 40px;
	}
	.categorized .catcontainer .catitem .catitem-stats{
		display: flex;
		flex-direction: column;
		width: 80px;
		height: 101px;
		background: #fbfcfc;
	}
	.categorized .catcontainer .catitem .catitem-stats>div{
		height: 50px;
		color: var(--sub-title-color, #939c99);
	}
	.categorized .catcontainer .catitem .catitem-stats>div+ div{
		border-top: 1px solid var(--border-color, #e4e8f1);
	}
</style>