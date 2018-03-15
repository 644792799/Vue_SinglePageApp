<template>
	<div class="simple-profilecard">
		<div class="sp-header">
			<div class="userinfo">
				<div class="i-1">
					小哥哥
				</div>
				<div class="i-2">
					注册：2017年1月6日
				</div>
				<div class="i-3">
					该用户很懒，什么都没留下该用户很懒
				</div>
			</div>
			<div class="avator">
				<img src="/static/img/头像示例2.jpg" />
			</div>
		</div>
		<div class="sp-content">
			<div class="c-1">最近发布代码</div>
			<ol class="c-2">
				<li>
				    <a href="">文章1</a>
				</li>
				<li>
				    <a href="">文章2</a>
				</li>
				<li>
				    <a href="">文章3</a>
				</li>
			</ol>
		</div>
		<div class="sp-footer">
			<div class="f-1">
				<b> 8356 </b>人关注
			</div>
			<div class="f-2 button-follow-container">
				<el-button-group>
					<el-button class="button-follow" size="small">添加关注</el-button>
					<el-button class="button-follow-count icon-user-plus3" size="small"></el-button>
				</el-button-group>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	
	export default{
		name: 'SimpleProfileCard',
		data(){
			return {}
		}
	}
</script>
<style type="text/css">
	.el-popover{
		border: 0!important; 
	}
	.el-popover, .el-tabs--border-card{
		box-shadow:0 1px 2px rgba(0,0,0,.25),0 0 1px rgba(0,0,0,.35)!important;
	}
	.simple-profilecard{
		position: relative;
	}
	.simple-profilecard .sp-header{
		display: flex;
		flex-flow: row || nowrap;
		justify-content: space-between;
		*align-items: center;
		position: relative;
		padding-bottom: 7px;
		border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.simple-profilecard .sp-header .userinfo .i-1{
		line-height: 1.2;
		font-size: 20px;
		margin: 0;
		font-weight: 400;
    	font-style: normal;
	}
	.simple-profilecard .sp-header .userinfo .i-2{
		font-size: 13px;
		color: #ea7069;
		margin: 0 auto 5px 0;
	}
	.simple-profilecard .sp-header .userinfo .i-3{
		font-size: 12px;
		color: #939c99;
	}
	.simple-profilecard .sp-header .avator img{
		width: 60px;
		border-radius: 30px;
	}
	.simple-profilecard .sp-content{
		color: #939c99;
		padding-top: 7px;
		padding-bottom: 7px;
		border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.simple-profilecard .sp-content .c-1{

	}
	.simple-profilecard .sp-content .c-2{
		padding-left: 15px;
		margin-top: 3px;
		margin-bottom: 0px;
	}
	.simple-profilecard .sp-content .c-2 a{
		color: var(--default-color, #4e5359);
	}
	.simple-profilecard .sp-content .c-2 a:hover{
		text-decoration: underline!important;
		color: var(--link-hover-color, #20a0ff)!important;
	}
	
	.simple-profilecard .sp-footer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #939c99;
		align-items: center;
		padding-top: 7px;
	}
	.simple-profilecard .sp-footer .f-1{
		line-height: 36px;
		font-size: 13px;
	}
	.simple-profilecard .sp-footer .f-1 b{
		*font-weight: 400;
		color: var(--default-color, #4e5359);
	}
	/*.simple-profilecard .sp-footer .f-2 .el-button-group {
	    box-shadow: var(--btn-box-shadow, #d5d9de 3px 0px 7px 0px);
	}*/
</style>