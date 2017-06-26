<template>
	<div class="sms-simplelist">
		<div class="sms-simplelist-title">
			{{title}}
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="sms-simplelist-content">
			<ul>
				<li>
					<a href="">关于直播，那些人气主播不会告诉你的事</a>
				</li>
				<li>
					<a href="">关于直播，那些人气主播不会告诉你的事</a>
				</li>
				<li>
					<a href="">关于直播，那些人气主播不会告诉你的事</a>
				</li>
				<li>
					<a href="">关于直播，那些人气主播不会告诉你的事</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    name: 'SmsSimpleList',
	    props: ['listdata', 'title'],
	    data(){
			return {}
		}
	  };
</script>
<style type="text/css">
	.sms-simplelist{
		*background: #fff;
		border-bottom: 1px solid var(--border-color,#d4d9df);
		line-height: 1.5;
	}
	.sms-simplelist .sms-simplelist-title{
		font-size: 14px;
    	font-weight: 600;
    	display: inline-block !important;
    	position: relative;
    	width: 100%;
    	padding-left: 15px;
    	padding-top: 15px;
    	background: var(--bg-color, #fbfcfc);
	}
	.sms-simplelist .sms-simplelist-content ul{
		list-style-type: none;
		padding-left: 25px;
	    margin-top: 0;
	    margin-bottom: 0;
	    font-size: 14px;
	}
	.sms-simplelist .sms-simplelist-content ul li{
		line-height: 2;
	}
	.sms-simplelist .sms-simplelist-content ul li a{
		color: var(--link-hover-color, #20a0ff);
		overflow: hidden; 
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow:ellipsis;
		-webkit-text-overflow:ellipsis;
		-moz-text-overflow:ellipsis;
		max-width: 250px;
	}
	.sms-simplelist .sms-simplelist-content ul li a:hover{
		text-decoration: underline!important;
	}
</style>