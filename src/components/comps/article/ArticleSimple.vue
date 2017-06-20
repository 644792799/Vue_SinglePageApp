<!--  -->
<template>
	<div class="article-item-container">
		<SmsCard class="articles-item" bodyStyle="display:flex;width:100%;">
			<!-- <SmsLine gradfrom="center"></SmsLine> -->
			<el-popover
			  ref="popoverSimpleFileCard"
			  placement="bottom"
			  width="280"
			  trigger="hover">
			  	<simpleprofilecard></simpleprofilecard>
			</el-popover>
			<a href="javascript:void(0);" @click="touser" class="articles-thumbnail" v-popover:popoverSimpleFileCard>
				<span>
					<img :src="art.avator"/>
				</span>
			</a>
			<div class="articles-item-header">
				<div class="articles-item-title">
					<a href="javascript:void(0);" @click="touser">{{art.username}}</a> <b style="color:#939c99;">/</b> 
					<a href="javascript:void(0);" @click="tosnipt">{{art.title}}</a>

					<a href="javascript:void(0);" @click="tosnipt" class="icon-comment-circle pull-right"> 0 </a>
					<a href="javascript:void(0);" @click="tosnipt" class="icon-star pull-right"> {{art.star}} </a>
					<a href="javascript:void(0);" @click="tosnipt" class="icon-eye3 pull-right"> {{art.view}} </a>
					<a href="javascript:void(0);" @click="tosnipt" class="icon-git-branch pull-right"> {{art.fork}} </a>
				</div>
				<div class="articles-item-categories">
					<span>
						<a href="javascript:void(0);">今天 21:50</a> 发布于 
						<a href="">{{art.cat}}</a> 分类下
					</span>
				</div>
			</div>
			<div class="articles-item-footer">
				<div class="articles-item-meta">
					
				</div>
			</div>
		</SmsCard>
		<div v-if="fullmode != undefined" class="articles-item-detail">
			<SmsLine gradfrom="all" style="top:0"></SmsLine>
			<pre><code class="javascript">$(document).ready(function() {
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});</code></pre>
		</div>
	</div>
</template>

<script type="text/javascript">
	import SimpleProfileCard from 'components/comps/common/SimpleProfileCard.vue'
	import $ from 'jquery'
    import hljs from 'pluginspath/highlight/highlight.pack.js'
	export default{
		data(){
			return {
				
			}
		},
		props: ['art', 'fullmode'],
	    mounted () {
	    	console.log("mounted");
	      if(this.fullmode == undefined)return;
	      hljs.initHighlightingOnLoad();
	      $(function () {
	        $('pre code').each(function (i, block) {
	          hljs.highlightBlock(block)
	        })
	      })
	    },
	    updated: function(){
	    	this.highlightCode();
	    },
	    methods: {
	    	highlightCode: function(){
	    		hljs.initHighlightingOnLoad();
	    		$('pre code').each(function (i, block) {
		          hljs.highlightBlock(block)
		        })
	    	},
	    	touser(){
	    		var path = "/user/" + this.art.userid
	    		this.$router.push({path: path});
	    	},
	    	tosnipt(){
	    		var path = "/user/" + this.art.userid + "/snipt/" + this.art.sniptid;
	    		this.$router.push({path: path});
	    	}
	    },
		components: {
			'simpleprofilecard': SimpleProfileCard
		}
	}
</script>

<style type="text/css">
	.article-item-container{
		margin-bottom: 10px;
		box-shadow: var(--left-box-shadow, #d5d9de -0.5px 0.5px 4px 0px);
		background: #fff;
	}
	.article-item-container .hljs{
		background: var(--code-bg-color, #F9FAFB);
	}
	.article-item-container .sms-card{
		box-shadow: none;
	}
	.article-item-container .articles-item-detail{
		margin-top: 2px;
		position: relative;
	}
	.article-item-container .articles-item-detail pre{
		margin: 0;
	}
	.article-item-container .articles-item-detail code{
		font-family: var(--code-font-family, Menlo,Monaco,Consolas,Courier,monospace);
	}
	.articles-item{
		display: flex;
	    align-items: center;
	    border: none;
	    background-color: #fff;
	    position: relative;
	    border-radius: 2px;
	}

	.articles-item:hover{
		opacity: 0.85;
	}

	.article-item-container:last-child{
		border-bottom: none;
		margin-bottom: 0;
	}

	.articles-item-header{
		flex-grow: 1;
		padding-left: 10px;
	}

	.articles-thumbnail{
		flex-shrink: 0;
	}

	.articles-thumbnail, .articles-item-header{
		margin-right: 5px;
	}

	.articles-thumbnail span{
		display: block;
		position: relative;
	}

	.articles-thumbnail img{
		width: 65px;
		display: block;
	    *border-radius: 55px;	
	}

	.articles-item-title{
		flex-grow: 1;
		margin-bottom: 5px;
		padding-top: 10px;
	}

	.articles-item-title .pull-right{
		font-size: 12px;
	    line-height: 24px;
	    margin-left: 15px;
	}

	.articles-item-title a{
		font-size: 18px;
		color: var(--title-color, #4E5359);
	}

	.articles-item-title a:link{
		color: var(--title-color, #4E5359);
	}

	.articles-item-title a:visited{
		*color: #A5A7A8;
	}

/*	a:link, a:hover, a:active, a:visited {
    	text-decoration: none!important;
	}*/

	.articles-item-title a:hover{
		color: var(--link-hover-color, #20a0ff)!important;
	}

	.articles-item-categories{
		display: flex;
		font-size: 12px;
		*opacity: 0.5;
		height: 26px;
	    line-height: 26px;
	    text-align: center;
	    color: var(--sub-title-color, #939c99);
	}

	.articles-item-categories a{
		color: var(--sub-title-color, #939c99);
		opacity: 1;
		text-transform: uppercase;
	}

	.articles-item-categories a:hover{
		color: var(--link-hover-color, #20a0ff);
	}

	.articles-item-categories>span{
		*border-right: 1px solid #fbfcfc;
		padding-right: 10px;
		padding-left: 10px;
		overflow: hidden;
	}

	.articles-item-categories>span:first-child{
		*border-left: 1px solid #fbfcfc;
		padding-left: 0px;
	}

	.articles-item-meta{
		display: flex;
	}

	/*.articles-item-category{
		background: #F6F2EF;
	    color: #AF9D95;
	    border: none;
	    display: inline-block;
	    font-size: 0.9rem;
	    border-radius: .25rem;
	    margin-right: 5px;
	    padding: 2px 6px;
	    white-space: nowrap;
	}

	.articles-item-category:hover{
		background: #5D5794;
	    color: #fff;
	    border-color: #5D5794;
	    text-decoration: none;
	}*/
</style>