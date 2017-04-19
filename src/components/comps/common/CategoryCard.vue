<template>
	<div class="cat-card">
		<div class="cat-title">语言<SmsLine gradfrom="left"></SmsLine></div>
		<div>
			<ul class="cat-list">
				<li v-for="cat in categoriesdata">
					<a href="">
						<span>{{cat.name}}</span>
						<span class="count">{{cat.count}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {}
		},
		props: ['categoriesdata']
	}
</script>
<style type="text/css">
	.cat-title{
		font-size: 14px;
    	font-weight: 600;
    	display: inline-block !important;
    	position: relative;
    	width: 100%;
    	padding-left: 15px;
    	padding-top: 15px;
    	background: #fbfcfc;
	}
	.cat-card{
		*padding-top: 15px;
		*padding-left: 15px;
    	line-height: 1.5;
    	border-bottom: 1px solid #d4d9df;
	}
	.cat-list{
		list-style-type: none;
		padding-left: 0;
	    margin-top: 0;
	    margin-bottom: 0;
	    font-size: 14px;
	}
	.cat-list li{
		padding-left: 15px;
		border-radius: 3px;
	}
	.cat-list li:hover{
		text-decoration: none;
    	background-color: #eaecef;
	}
	.cat-list a{
		padding: 4px 10px;
	    margin: 0 0 2px;
	    font-size: 12px;

	    position: relative;
	    display: block;
	    overflow: hidden;
	    color: #586069;
	    text-decoration: none;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    cursor: pointer;
	}
	.cat-list .count{
		float: right;
    	font-weight: 600;
	}
</style>