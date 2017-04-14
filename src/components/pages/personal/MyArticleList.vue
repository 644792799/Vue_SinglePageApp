<template>
	<div class="myarticle">
		<el-row>
			<el-col :span="16" :offset="1">
				<div style="display: flex;flex-direction: row;border-bottom:1px solid #d4d9df;">
					<div class="userimg-container">
						<img src="/static/img/头像示例2.jpg" style="height:120px;width:120px;">
					</div>
					<div class="info"  >
						<div class="top" style="display: flex;flex-direction: row;border-bottom:1px solid #d4d9df;">
							<div class="left">
								<h3>CJAY</h3>
								1212
							</div>
							<div class="right">
								<h3>WORK</h3>
							</div>
						</div>
						<div class="bottom" style="display: flex;flex-direction: row;">
							<div class="left">
								<div>
									<i class="el-icon-message"></i>644792799@qq.com
								</div>
								<div>
									<i class="el-icon-star-off"> </i>
								</div>
							</div>
							<div class="right">
								<el-button type="warning" size="small" :plain="true">添加关注</el-button>
							</div>
						</div>
					</div>
				</div>
				<div style="margin-top:10px;">
					<el-tabs >
					  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
					  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
					  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
					  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
					</el-tabs>
				</div>
			</el-col>
			<el-col :span="6" class="right-container">
				
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				author: "cjay"
			}
		}
	}
</script>
<style type="text/css">
	.myarticle .userimg-container{
		height: 120px;
		width: 120px;
		padding: 20px 20px 15px 0;
	}
	.myarticle .userimg-container img{
		border-radius: 4px;
	}
	.myarticle .info{
		width: 100%;
		padding: 20px 0 15px 0;
	}
	.myarticle .info .top{
		padding-bottom: 10px;
	}
	.myarticle .info .top .left{
		width: 150px;
		font-size: 12px;
	}
	.myarticle .info .top .left h3{
		margin-bottom: 3px!important;
	}
	.myarticle .info .bottom{
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.myarticle .info .bottom .left{
		width: 150px;
		font-size: 12px;
	}
	.myarticle .info .bottom .left div{
		line-height: 20px;
		font-weight: 600;
	}
	.myarticle .info .bottom .left h3{
		margin-bottom: 3px!important;
	}
	.myarticle .info .top .right{
		width: 150px;
	}
</style>