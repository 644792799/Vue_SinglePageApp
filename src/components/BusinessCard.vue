<template>
	<div class="card-user">
		<div class="card-avatar">
			<img :src="userInfo.avatar == undefined || userInfo.avatar == null || userInfo.avatar == '' ? defaultimgurl : userInfo.avatar">
		</div>
		<div class="card-names">
			<span class="card-fullname d-block"><b>{{userInfo.fullname}}</b></span>
			<span class="card-username d-block">{{userInfo.username}}</span>
		</div>
		<div class="card-socialnetwork">
			<ul>
				<li v-for="nw in userInfo.socialnetwork">
					<img :src="nw.imgurl">
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				defaultimgurl: '/static/img/头像示例.jpg'
			}
		},
		props: ['userInfo']
	}
</script>

<style type="text/css">
	.card-user{
		width: 95%;
		height: auto;
		margin: 5px auto 5px auto;
		background: white;
		border: 1px solid #eee;
    	padding: 10px;
	}
	.card-avatar img{
		width: 100%;
		height: auto;
	}
	.card-socialnetwork{
		height: 30px;
	}
	.card-socialnetwork ul{
		list-style: none;
		padding: 0;
	}
	.card-socialnetwork ul li{
		float: left;
		margin-right: 5px;
	}
	.card-socialnetwork ul li img{
		width: 20px;
		height: 20px;
	}
	.card-socialnetwork ul li img:hover{
		*opacity: 20;
		border: 1px solid #eee;
	}
	.card-names{
		margin-top: 10px;
	}
	.card-names .card-username{
		font-size: 20px;
	    font-style: normal;
	    font-weight: 300;
	    line-height: 24px;
	    color: #666;
	    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
	.card-names .card-fullname{
		font-size: 20px;
	}
	.d-block{
		display: block !important;
	}
	.panel-body {
	    padding: 0!important;
	}
</style>