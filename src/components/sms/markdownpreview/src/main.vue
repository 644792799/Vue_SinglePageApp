<template>
	<div class="sms-preview" v-html="mktext">
		
	</div>
</template>
<script type="text/javascript">
	import './css/smsmarkdownpreview.css'
	export default {
		name: 'SmsPreview',
		props: ['mktext'],
		data(){
			return {

			}
		}
	}
</script>
<style type="text/css">

</style>