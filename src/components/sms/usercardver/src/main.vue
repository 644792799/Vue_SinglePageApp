<template>
<div class="sms-usercard-ver">
	<div class="sms-usercard-ver-img-container">
		<img :src="img"/>
		<div class="triangle"></div>
	</div>
	<div class="sms-usercard-ver-info">
		<slot></slot>
	</div>
</div>
</template>
<script type="text/javascript">
  export default {
    name: 'SmsUserCardVer',
    props: ['img']
  };
</script>
<style type="text/css">
.sms-usercard-ver{
	width:120px;
	box-shadow: var(--left-box-shadow, #d5d9de -0.5px 0.5px 4px 0px);
}
.sms-usercard-ver .sms-usercard-ver-img-container{
	height: 120px;
	background: #fff;
	position: relative;
}
.sms-usercard-ver .sms-usercard-ver-img-container img{
	width:100%;
	height:100%;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}
.sms-usercard-ver .sms-usercard-ver-img-container .triangle{
	width: 0;
	height: 0;
	border-bottom: 20px solid #fff;
	border-left: 120px solid transparent;
	position:absolute;
	bottom : 0
}
.sms-usercard-ver .sms-usercard-ver-info{
	background: #fff;
	height:80px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
}
</style>