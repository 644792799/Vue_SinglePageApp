<template>
	<div class="categorized">
		<div class="sub-nav">
			<div class="breadcrumb-container">
		  		<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>分类</el-breadcrumb-item>
				</el-breadcrumb>
		  	</div>
		</div>
		<div class="flex-row-layout">

		</div>
	</div>
</template>
<script type="text/javascript">
	
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
</style>