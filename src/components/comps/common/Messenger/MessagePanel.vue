<template>
	<div class="messagepanel">
		<div class="userimg">
			<img src="/static/img/头像示例2.jpg">
		</div>
		<div class="message">
			<div class="messagedetail">
				道中落，母亲出生不久就随父母和其他亲戚举家南迁，据说当时还余了些小钱在“红庙”地区开小旅馆为生，能供母亲
			</div>
			<div class="messageaction"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
	.messagepanel{
		display: flex;
		flex-direction: row;
		padding: 15px 0;
	}
	.messagepanel .userimg{
		z-index: 1;
	}
	.messagepanel .userimg img{
		width: 50px;
		height: 50px;
		border-radius: 25px;
	}
	.messagepanel .message{
		position: relative;
	    background-color: #fff;
	    border: 1px solid #d1d5da;
	    border-radius: 3px;
	    margin-left: 10px;
	    flex: 1;
	    z-index: 1;
	}
	.messagepanel .message::before, .messagepanel .message::after{
    	position: absolute;
	    top: 11px;
	    right: 100%;
	    left: -16px;
	    display: block;
	    width: 0;
	    height: 0;
	    pointer-events: none;
	    content: " ";
	    border-color: transparent;
	    border-style: solid solid outset;
	}
	.messagepanel .message::before{
		border-width: 8px;
    	border-right-color: #d1d5da;
	}
	.messagepanel .message::after{
		margin-top: 1px;
	    margin-left: 2px;
	    border-width: 7px;
	    border-right-color: #fff;
	}
	.messagepanel .message .messagedetail{
		*width: 100%;
	    padding: 15px;
	    overflow: visible;
	    font-size: 14px;
	}
</style>