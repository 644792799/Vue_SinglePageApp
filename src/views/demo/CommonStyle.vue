<template>
	<div class="common">
		<SmsUserCardVer v-for="i in 8" img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498551826199&di=dd1413b07fcebf87e28b12316d4f14e7&imgtype=0&src=http%3A%2F%2Fk2.jsqq.net%2Fuploads%2Fallimg%2F1705%2F7_170524143440_5.jpg">
			<div class="title">
				<h3>Cjay</h3>
			</div>
		</SmsUserCardVer>

		<SmsUserCardHor shape="triangle" v-for="i in 8" img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498551826199&di=dd1413b07fcebf87e28b12316d4f14e7&imgtype=0&src=http%3A%2F%2Fk2.jsqq.net%2Fuploads%2Fallimg%2F1705%2F7_170524143440_5.jpg">
			<div class="title">
				<h5>小哥哥</h5>
			</div>
		</SmsUserCardHor>
	</div>
</template>

<style type="text/css">
.common{
	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.common .sms-usercard-hor{
	width: 230px;
}
.common .sms-usercard-ver, .common .sms-usercard-hor{
	margin-left: 10px;
	margin-top: 10px;
}
.common .sms-usercard-ver .title h3{
	margin: 0;
}
</style>