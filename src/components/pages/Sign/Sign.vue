<template>
	<div class="sign">
		<div class="sign-in"></div>
		<div class="arc">&nbsp;</div>
		<div class="sign-up"></div>	
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
	.sign{
		position:relative;
		display:flex;
		flex-direction:row;
		height:440px;
		overflow:hidden;
		align-items:center;
		border-radius: 3px;
	}
	.sign .sign-in{
		height: 440px;
		width:180px;
		background:#f2f2f2;
	}
	.sign .sign-up{
		width:320px;
		height:440px;
		background:#fff;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}
	.sign .arc{
		position:absolute;
		left:-325px;
		height:600px;
		width:600px;
		border-right:1px solid #d5d5d5;
		border-top-right-radius: 300px;
	  	border-bottom-right-radius: 300px;
		background:#f2f2f2;
		box-shadow:inset -1px 0px 5px 0px #d5d5d5;
	}
</style>