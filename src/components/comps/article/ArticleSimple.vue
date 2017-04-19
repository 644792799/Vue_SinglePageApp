<!--  -->
<template>
	<SmsCard class="articles-item" bodyStyle="display:flex;">
		<SmsLine gradfrom="center"></SmsLine>
		<a href="" class="articles-thumbnail">
			<span>
				<img :src="art.avator"/>
			</span>
		</a>
		<div class="articles-item-header">
			<div class="articles-item-title">
				<a :href="art.url">{{art.title}}</a>
			</div>
			<div class="articles-item-categories">
				<span>
					<a href="">cjay</a>&nbsp;
				</span>
				<span>在&nbsp;2015.02.03&nbsp;</span>
				<span>
					发布于
					<a href="">java</a>
					分类下
				</span>
				<!-- <a href="" class="articles-item-category" v-for="cat in art.category">{{cat}}</a> -->
			</div>
		</div>
		<div class="articles-item-footer">
			<div class="articles-item-meta">
				
			</div>
		</div>
	</SmsCard>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {}
		},
		props: ['art']
	}
</script>

<style type="text/css">
	.articles-item{
		display: flex;
	    align-items: center;
	    padding: 10px 10px;
	    *margin-bottom: 15px;
	    border: none;
	    background-color: #fff;
	    *border-left: 2px solid #20a0ff;
	    *box-shadow: 0px 1px 15px #e6e7e8;
	    position: relative;
	}

	.articles-item:hover{
		*background-color: #f5f6f8;
		opacity: 0.85;
		*border-left: 2px solid #5D5794;
	}

	.articles-item:last-child{
		border-bottom: none;
		margin-bottom: 0;
	}

	.articles-item-header{
		flex-grow: 1;
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
		width: 55px;
		display: block;
	    border-radius: 55px;	
	}

	.articles-item-title{
		flex-grow: 1;
		margin-bottom: 5px;
	}

	.articles-item-title a{
		font-size: 18px;
		color: #4E5359;
	}

	.articles-item-title a:link{
		color: #4E5359;
	}

	.articles-item-title a:visited{
		*color: #A5A7A8;
	}

	a:link, a:hover, a:active, a:visited {
    	text-decoration: none!important;
	}

	.articles-item-title a:hover{
		*color: #5D5794!important;
	}

	.articles-item-categories{
		display: flex;
		font-size: 12px;
		opacity: 0.5;
	}

	.articles-item-categories a{
		color: #66b5cb;
		opacity: 1;
	}

	.articles-item-meta{
		display: flex;
	}

	.articles-item-category{
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
	}
</style>