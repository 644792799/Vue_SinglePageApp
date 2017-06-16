<template>
	<div class="code-filter">
		<div class="filter-title">
			条件查找
			<SmsLine gradfrom="left"></SmsLine>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'CodeFilter',
		data(){
			return {}
		}
	}
</script>
<style type="text/css">
.code-filter{
	line-height: 1.5;
}
.code-filter .filter-title{
	font-size: 14px;
	font-weight: 600;
	display: inline-block !important;
	position: relative;
	width: 100%;
	padding-left: 15px;
	padding-top: 15px;
	background: var(--bg-color, #fbfcfc);
}
</style>