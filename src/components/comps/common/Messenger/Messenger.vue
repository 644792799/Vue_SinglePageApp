<template>
	<div class="messenger">
		<div class="msg-header">
			<div class="msg-header-left">
				<i class="icon-commenting-o"></i>
				<b style="margin-left:5px;">评论</b>
			</div>
		</div>
		<div class="msg-content">
			<div class="msg-content-left">
				<div style="
				    overflow-y: scroll;
				    overflow-x: hidden;
				    width: 198px;
				    height: 100%;
				">
					<SmsUserCardHor shape="circle" v-for="i in 18" img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498551826199&di=dd1413b07fcebf87e28b12316d4f14e7&imgtype=0&src=http%3A%2F%2Fk2.jsqq.net%2Fuploads%2Fallimg%2F1705%2F7_170524143440_5.jpg">
						<div class="title">
							<h6>小哥哥</h6>
						</div>
					</SmsUserCardHor>
				</div>
			</div>
			<div class="msg-content-right">
				<div></div>
				<div><!-- <SmsMarkdown></SmsMarkdown> --></div>
			</div>
		</div>
		<div class="msg-footer">
			
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
	.messenger{
		box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
	}
	.messenger .msg-header{
		height: 40px;
		background: #fff;
		display: flex;
		align-items: center;
		box-shadow: #eef1f6 0 0.5px 12px 0px;
	    margin-bottom: 3px;
	}
	.messenger .msg-header .msg-header-left{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.messenger .msg-header i{
		font-size: 25px;
		color: #ea7069;
		margin-left: 5px;
	}
	.msg-content{
		display: flex;
		max-height: 500px;
	}
	.msg-content .msg-content-left{
		width: 180px;
		margin-right: 2px;
		overflow: hidden;
	}
	.msg-content .msg-content-right{
		*width: 100%;
		background: #fff;
		flex: 1;
	}
	.messenger .msg-content .sms-usercard-hor{
		box-shadow: none;
	}
</style>