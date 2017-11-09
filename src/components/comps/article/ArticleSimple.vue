<!--  -->
<template>
	<div class="article-item-container">
		<SmsCard class="articles-item" bodyStyle="display:flex;width:100%;">
			<!-- <SmsLine gradfrom="center"></SmsLine> -->
			<el-popover
			  ref="popoverSimpleFileCard"
			  placement="left"
			  width="200"
			  trigger="hover">
			  	<simpleprofilecard></simpleprofilecard>
			</el-popover>
			<a href="javascript:void(0);" @click="touser" class="articles-thumbnail" v-popover:popoverSimpleFileCard>
				<span>
					<img :src="art.avator" onload="" onerror="this.src='/static/img/头像示例2.jpg'" />
				</span>
			</a>
			<div class="articles-item-header">
				<div class="articles-item-title">
					<a href="javascript:void(0);" @click="touser">{{art.username}}</a> <b style="color:#939c99;">/</b> 
					<a href="javascript:void(0);" @click="tosnipt">{{art.title}}</a>

					<a href="javascript:void(0);" @click="tosnipt" class="icon-file2 pull-right"> 1 </a>
					<a href="javascript:void(0);" @click="tosnipt" class="icon-bookmark pull-right"> {{art.star}} </a>
					<!-- <a href="javascript:void(0);" @click="tosnipt" class="icon-eye3 pull-right"> {{art.view}} </a> -->
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
			<SmsLine gradfrom="all" style="top:-1px"></SmsLine>
			<!-- <pre><code class="javascript">$(document).ready(function() {
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});</code></pre> -->
			<highlightcode isSimple="true"></highlightcode>
			<a href="javascript:void(0);" @click="tosnipt">
				<div style="
					    height: 100%;
					    position: relative;
					    align-items: center;
					    justify-content: center;
					    display:none;
					">
					<svg t="1510122319466" class="icon" style="width: 1.33301em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 32px;" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1889"><path d="M1279.253769 938.716415 85.283585 938.716415l0-852.835846 1193.970184 0M1364.537353 0.596985 0 0.596985l0 1023.403015 1364.537353 0L1364.537353 0.596985 1364.537353 0.596985z" p-id="1890" fill="#515151"></path><path d="M447.738819 470.12576 387.443325 408.167236 206.5142 594.021487 266.831015 655.980012 387.443325 779.875739 447.738819 717.938536 327.12651 594.021487Z" p-id="1891" fill="#515151"></path><path d="M977.030066 408.167236 916.713251 470.12576 1037.32556 594.021487 916.713251 717.938536 977.030066 779.875739 1097.642375 655.980012 1157.93787 594.021487Z" p-id="1892" fill="#515151"></path><path d="M609.628383 853.710002 532.766553 815.737486 754.589156 342.008495 831.429666 379.981011Z" p-id="1893" fill="#515151"></path><path d="M170.503206 170.865662l85.283585 0 0 85.283585-85.283585 0 0-85.283585Z" p-id="1894" fill="#515151"></path><path d="M341.070376 170.865662l85.283585 0 0 85.283585-85.283585 0 0-85.283585Z" p-id="1895" fill="#515151"></path><path d="M511.637545 170.865662l85.283585 0 0 85.283585-85.283585 0 0-85.283585Z" p-id="1896" fill="#515151"></path></svg>
				</div>
			</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	import SimpleProfileCard from 'components/comps/common/SimpleProfileCard.vue'
	import HighlightCode from 'components/comps/common/CodeHighlight.vue'
	// import $ from 'jquery'
 //    import hljs from 'pluginspath/highlight/highlight.pack.js'
	export default{
		data(){
			return {
				defaultAvator: '/static/img/头像示例2.jpg'
			}
		},
		props: ['art', 'fullmode'],
	    mounted () {
	    	// console.log("mounted");
	     //  if(this.fullmode == undefined)return;
	     //  hljs.initHighlightingOnLoad();
	     //  $(function () {
	     //    $('pre code').each(function (i, block) {
	     //      hljs.highlightBlock(block)
	     //    })
	     //  })
	    },
	    updated: function(){
	    	// this.highlightCode();
	    },
	    methods: {
	    	// highlightCode: function(){
	    	// 	hljs.initHighlightingOnLoad();
	    	// 	$('pre code').each(function (i, block) {
		    //       hljs.highlightBlock(block)
		    //     })
	    	// },
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
			'simpleprofilecard': SimpleProfileCard,
			highlightcode : HighlightCode
		}
	}
</script>

<style type="text/css">
	.article-item-container{
		margin-bottom: 10px;
		box-shadow: var(--left-box-shadow, #d5d9de -0.5px 0.5px 4px 0px);
		background: #fff;
	}
	/*.article-item-container .hljs{
		background: var(--code-bg-color, #F9FAFB);
	}*/
	.article-item-container .sms-card{
		box-shadow: none;
	}
	.article-item-container .articles-item-detail{
		margin-top: 2px;
		position: relative;
	}
	.article-item-container .articles-item-detail a{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		/*transition: .1s ease-in-out;
	    -webkit-transition: .1s ease-in-out;
	    -moz-transition: .1s ease-in-out;
	    -o-transition: .1s ease-in-out;
	    -ms-transition: .1s ease-in-out;*/
	}
	.article-item-container .articles-item-detail a:hover{
		background: #fff;
		opacity: 0.5;
	}
	.article-item-container .articles-item-detail a:hover>div{
		display: flex!important;
	}
	.article-item-container .articles-item-detail svg{
		transition: .2s ease-in-out;
	    -webkit-transition: .2s ease-in-out;
	    -moz-transition: .2s ease-in-out;
	    -o-transition: .2s ease-in-out;
	    -ms-transition: .2s ease-in-out;
	    -webkit-transform: rotateY(0deg);
    	transform: rotateY(0deg);
	}
	.article-item-container .articles-item-detail a:hover>div>svg{
		-webkit-transform: rotateY(360deg);
    	transform: rotateY(360deg);
	}
	/*.article-item-container .articles-item-detail pre{
		margin: 0;
	}
	.article-item-container .articles-item-detail code{
		font-family: var(--code-font-family, Menlo,Monaco,Consolas,Courier,monospace);
	}*/
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