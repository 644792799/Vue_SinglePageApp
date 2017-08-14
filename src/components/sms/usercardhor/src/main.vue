<template>
<div class="sms-usercard-hor">
	<div class="sms-usercard-hor-img-trianglecontainer " v-if="shape=='triangle'">
		<img :src="img"/>
		<div class="triangle"></div>
	</div>
	<div class="sms-usercard-hor-img-circlecontainer" v-if="shape=='circle'">
		<img :src="img"/>
	</div>
	<div class="sms-usercard-hor-info">
		<slot></slot>
	</div>
</div>
</template>
<script type="text/javascript">
  export default {
    name: 'SmsUserCardHor',
    props: ['img', 'shape']
  };
</script>
<style type="text/css">
.sms-usercard-hor{
	--img-width: 40px;
	--img-radius: 20px;
}
.sms-usercard-hor:hover{
	background: #fbfcfc;
}
.sms-usercard-hor{
	box-shadow: var(--left-box-shadow, #d5d9de -0.5px 0.5px 4px 0px);
    display: flex;
    flex-direction: row;
	background: #fff;
	align-items: center;
	transition: background .2s cubic-bezier(.645,.045,.355,1);
	cursor: pointer;
}
.sms-usercard-hor .sms-usercard-hor-img-trianglecontainer,
.sms-usercard-hor .sms-usercard-hor-img-circlecontainer{
	height: var(--img-width, 50px);
	width: var(--img-width, 50px);
	*background: #fff;
	position: relative;
}
.sms-usercard-hor .sms-usercard-hor-img-circlecontainer{
	display: flex;
	align-items: center;
	padding: 5px 8px;
}
.sms-usercard-hor .sms-usercard-hor-img-trianglecontainer img{
	width:100%;
	height:100%;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}
.sms-usercard-hor .sms-usercard-hor-img-circlecontainer img{
	width: 100%;
	height: 100%;
	border-radius: var(--img-radius, 20px);
}
.sms-usercard-hor .sms-usercard-hor-img-trianglecontainer .triangle{
	width: 0;
	height: 0;
	border-right: 10px solid #fff;
	border-top: var(--img-width, 50px) solid transparent;
	position:absolute;
	right : 0;
	top:0;
}
.sms-usercard-hor .sms-usercard-hor-info{
	*background: #fff;
	height:var(--img-width, 50px);
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	display: flex;
	flex-direction: row;
	align-items: center;
}
</style>