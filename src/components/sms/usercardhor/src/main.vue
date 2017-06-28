<template>
<div class="sms-usercard-hor">
	<div class="sms-usercard-hor-img-container">
		<img :src="img"/>
		<div class="triangle"></div>
	</div>
	<div class="sms-usercard-hor-info">
		<slot></slot>
	</div>
</div>
</template>
<script type="text/javascript">
  export default {
    name: 'SmsUserCardHor',
    props: ['img']
  };
</script>
<style type="text/css">
.sms-usercard-hor{
	box-shadow: var(--left-box-shadow, #d5d9de -0.5px 0.5px 4px 0px);
    display: flex;
    flex-direction: row;
	background: #fff;
}
.sms-usercard-hor .sms-usercard-hor-img-container{
	height: 50px;
	width:50px;
	background: #fff;
	position: relative;
}
.sms-usercard-hor .sms-usercard-hor-img-container img{
	width:100%;
	height:100%;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}
.sms-usercard-hor .sms-usercard-hor-img-container .triangle{
	width: 0;
	height: 0;
	border-right: 10px solid #fff;
	border-top: 50px solid transparent;
	position:absolute;
	right : 0;
	top:0;
}
.sms-usercard-hor .sms-usercard-hor-info{
	background: #fff;
	height:50px;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	display: flex;
	flex-direction: row;
	align-items: center;
}
</style>