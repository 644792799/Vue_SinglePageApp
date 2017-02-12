<template>
	<div class="articles-item">
		<a href="" class="articles-thumbnail">
			<span>
				<img :src="art.avator"/>
			</span>
		</a>
		<div class="articles-item-header">
			<div class="articles-item-title">
				<h4>{{art.title}}</h4>
			</div>
			<div class="articles-item-categories">
				<a href="" class="articles-item-category" v-for="cat in art.category">{{cat}}</a>
			</div>
		</div>
		<div class="articles-item-footer">
			<div class="articles-item-meta">
				
			</div>
		</div>
	</div>
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
	    padding: 15px 10px;
	    border: none;
	    background: none;
	    border-bottom: 1px solid #EFEAE8;
	}

	.articles-item:last-child{
		border-bottom: none;
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
	}

	.articles-item-title{
		flex-grow: 1;
		margin-bottom: 5px;
	}

	.articles-item-categories{
		display: flex;
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
		background: #f36c3d;
	    color: #fff;
	    border-color: #f36c3d;
	    text-decoration: none;
	}
</style>