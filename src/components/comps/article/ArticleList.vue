<template>
	<div class="articles-list">
		<div style="position:relative;padding:10px;">
			<b>xxxxx</b>
			<div class="gradient-line"></div>
		</div>
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
		*background: #F9FAFB;
	    *border: 1px solid #EFEAE8;
	    padding: 10px 5px;
	    *border: 1px solid #eaeefb;
	    *border-radius: 4px;
	    transition: .2s;
	    background: #fff;
	    *box-shadow: 0 0 1px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
	    min-height: 400px;
	}
</style>