<template>
	<div class="myarticle">
		<el-row>
			<el-col :span="16" :offset="1">
				<div style="display: flex;flex-direction: row;border-bottom:1px solid #d4d9df;">
					<div class="userimg-container">
						<img src="/static/img/头像示例2.jpg" style="height:150px;width:150px;">
					</div>
					<div class="info"  >
						<div class="top" style="display: flex;flex-direction: row;border-bottom:1px solid #d4d9df;">
							<div class="left">
								<h3>CJAY</h3>
								2017年4月17日加入
							</div>
							<div class="right">
								<span><i class="icon-organization"></i>&nbsp;尚未加入任何公司/组织</span>
							</div>
						</div>
						<div class="bottom" style="display: flex;flex-direction: row;">
							<div class="left">
								<div>
									<i class="icon-envelop">&nbsp;</i>644792799@qq.com
								</div>
								<div>
									<i class="icon-location">&nbsp;</i>四川.成都
								</div>
								<div>
									<i class="icon-link">&nbsp;</i>wwww.snipt.cn
								</div>
							</div>
							<div class="right">
								<el-button-group>
									<el-button class="button-follow" size="small">添加关注</el-button>
									<el-button class="button-follow-count" size="small">12</el-button>
								</el-button-group>
							</div>
						</div>
					</div>
				</div>
				<div style="margin-top:10px;">
					<el-tabs >
					  <el-tab-pane label="代码片" style="min-height:300px;">
					  	<div class="filtercontainer">
					  		<el-button-group class="filter">
							  <el-button :disabled="true">全部</el-button>
							  <el-button>公有</el-button>
							  <el-button>私有</el-button>
							  <el-button>收藏</el-button>
							  <el-button>FORK</el-button>
							</el-button-group>
							<div class="order">
								<el-button type="text">发布时间</el-button>
								<el-button type="text" :disabled="true">更新时间</el-button>
							</div>
							<SmsLine gradfrom="center"></SmsLine>
					  	</div>
					  </el-tab-pane>
					  <el-tab-pane label="关注" style="min-height:300px;"></el-tab-pane>
					  <el-tab-pane label="粉丝" style="min-height:300px;"></el-tab-pane>
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
	.myarticle .order{
		position: relative;
		float: right;
    	line-height: 56px;
    	margin-right: 10px;
	}
	.myarticle .filtercontainer{
		position: relative;
	}
	.myarticle .filter{
		margin: 10px 10px;
	}
	.myarticle .userimg-container{
		height: 150px;
		width: 150px;
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
		*padding-bottom: 10px;
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
		width: 200px;
		font-size: 12px;
		color: #b6b1aa;
	}
	.myarticle .info .bottom .left div{
		line-height: 25px;
		font-weight: 600;
	}
	.myarticle .info .bottom .left h3{
		margin-bottom: 3px!important;
	}
	.myarticle .info .bottom .right .el-button-group{
		box-shadow: #d5d9de 3px 0px 7px 0px;
	}
	.myarticle .info .top .right{
		width: 200px;
		*font-size: 30px;
    	line-height: 66px;
	}
	.myarticle .info .top .right span{
		font-size: 15px;
		margin-left: 10px; 
	}
	.myarticle .info .top .right i{
		font-size: 20px;
	}
	.myarticle .el-tabs__content{
		background: #fff;
	}
	.button-follow, .button-follow-count{
		border: 0!important;
	}
	.button-follow{
		background-color: #ea7069!important;
		color: #fbfcfc!important;
	}
	.button-follow:hover{
		z-index: 0!important;
	}
	.button-follow-count{
		font-weight: 600;
	}
	.button-follow-count:hover{
		color: #1f2d3d!important;
		border-color: #f7ba2a!important;
	}
	 .el-tabs__item.is-active{
		color: #1f2d3d!important;
	}
	 .el-tabs__active-bar{
		background-color: #ea7069!important;
	}
</style>