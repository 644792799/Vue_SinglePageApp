<template>
	<div class="articles-list">
		<articleSimple v-for="art in articlesdata" :art="art"></articleSimple>
	</div>
</template>

<script type="text/javascript">
	import ArticleSimple from './ArticleSimple.vue'
	export default{
		data(){
			return{
				author: "cjay"
			}
		}, 
		components: {
			"articleSimple": ArticleSimple
		},
		props: ['articlesdata']
	}
</script>

<style type="text/css">
	.articles-list{
		background: #fff;
	    border: 1px solid #EFEAE8;
	    margin: 10px 5px;
	}
</style>