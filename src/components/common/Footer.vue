<template>
	<div class="footer">
		<div>
			<span>© {{copyrightdate}} {{copyright}}</span>
			<i class="icon-steps"></i>
		</div>
		<div>
			<a href="javascript:void(0);" @click="feedback" class="">意见&建议</a>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {}
		},
		computed:{
			copyright: function(){
				return this.$store.state.app.copyright;
			},
			copyrightdate: function(){
				return this.$store.state.app.copyrightdate;
			}
		},
		methods: {
			feedback: function(){
				this.$router.push({path:'/feedback'});
				//this.$router.go('/search');
			}
		}
	}
</script>
<style type="text/css">
	.footer{
		height: 50px;
		border-top: 1px solid #eaeefb;
		margin-top: 20px;
		position: relative;
		min-width: 1190px;
		*width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.footer span {
		line-height: 50px;
		padding-left: 255px;
		font-size: 12px;
		color: #586069;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
	.footer .icon-steps{
	    position: relative;
	    margin: 0;
	    font-size: 30px!important;
	    color: #A5A7A8!important;
	    width: 35px;
	    height: 35px;
	    line-height: 35px;
	    text-align: center;
	    top: 8px;
        border-radius: 35px;
	}

	.footer a:link {
	    color: var(--title-color, #4E5359);
	    font-size: 12px;
	}

	.footer a:hover {
	    color: var(--link-hover-color, #20a0ff)!important;
	}
</style>