<template>
	<div class="myarticle">
		<el-row>
			<el-col :span="15" :offset="1">
				<div class="userinfo-container">
					<div class="userimg-container">
						<img src="/static/img/头像示例2.jpg" style="height:150px;width:150px;">
					</div>
					<div class="info"  >
						<div class="top">
							<div class="left">
								<h3>CJAY</h3>
								<i class="icon-calendar">&nbsp;</i>
								<span>2017年4月17日加入</span>
							</div>
							<div class="right">
								<span><i class="icon-organization"></i>&nbsp;尚未加入任何公司/组织</span>
							</div>
						</div>
						<div class="bottom">
							<div class="left">
								<div>
									<i class="icon-envelop">&nbsp;</i><span>644792799@qq.com</span>
								</div>
								<div>
									<i class="icon-location">&nbsp;</i><span>四川.成都</span>
								</div>
								<div>
									<i class="icon-link">&nbsp;</i><span>wwww.snipt.cn</span>
								</div>
							</div>
							<div class="right">
								<el-button-group>
									<el-button class="button-follow" size="">添加关注</el-button>
									<el-button class="button-follow-count icon-user-plus3" size=""></el-button>
								</el-button-group>
							</div>
						</div>
					</div>
				</div>
				<div class="contribution-container">
					<contribution></contribution>
				</div>
				<div style="margin-top:10px;">
					<el-tabs >
					  <el-tab-pane style="min-height:300px;">
					  	<span slot="label"><i class="icon-embed2"></i> 代码片</span>
					  	<div class="filtercontainer">
							<el-form :inline="true" :model="formInline" class="demo-form-inline">
							  <el-form-item>&nbsp;</el-form-item>
							  <el-form-item label="类型" class="pull-right">
							    <el-select v-model="formInline.type" placeholder="类型选择">
							      <el-option label="全部" value="All"></el-option>
							      <el-option label="公有" value="public"></el-option>
							      <el-option label="私有" value="private"></el-option>
							      <el-option label="FORK" value="fork"></el-option>
							    </el-select>
							  </el-form-item>
							  <el-form-item label="语言" class="pull-right">
							    <el-select v-model="formInline.language" placeholder="语言选择">
							      <el-option label="全部" value="All"></el-option>
							      <el-option label="JAVA" value="JAVA"></el-option>
							      <el-option label="JAVASCRIPT" value="JAVASCRIPT"></el-option>
							      <el-option label="C#" value="C#"></el-option>
							    </el-select>
							  </el-form-item>
							</el-form>
							<SmsLine gradfrom="center"></SmsLine>
					  	</div>
					  </el-tab-pane>
					  <el-tab-pane style="min-height:300px;">
					  	<span slot="label"><i class="icon-star"></i> 收藏</span>
					  	<div class="filtercontainer">
							<el-form :inline="true" :model="formInline" class="demo-form-inline">
							  <el-form-item label="语言">
							    <el-select v-model="formInline.language2" placeholder="语言选择">
							      <el-option label="全部" value="All"></el-option>
							      <el-option label="JAVA" value="JAVA"></el-option>
							      <el-option label="JAVASCRIPT" value="JAVASCRIPT"></el-option>
							      <el-option label="C#" value="C#"></el-option>
							    </el-select>
							  </el-form-item>
							  <el-form-item label="排序">
							    <el-select v-model="formInline.star" placeholder="排序选择">
							      <el-option label="最近收藏" value="recent"></el-option>
							      <el-option label="最近更新" value="active"></el-option>
							      <el-option label="收藏最多" value="most"></el-option>
							    </el-select>
							  </el-form-item>
							</el-form>
							<SmsLine gradfrom="center"></SmsLine>
					  	</div>
					  </el-tab-pane>
					  <el-tab-pane style="min-height:300px;">
					  	<span slot="label"><i class="icon-user-check"></i> 关注</span>
					  </el-tab-pane>
					  <el-tab-pane style="min-height:300px;">
					  	<span slot="label"><i class="icon-users"></i> 粉丝</span>
					  </el-tab-pane>
					</el-tabs>
				</div>
			</el-col>
			<el-col :span="6" :offset="1" class="right-container">
				<div class="visit-container">
					<el-row>
						<el-col :span="12">
							<div>
								<p>2540</p>
								<p>粉丝</p>
							</div>
							<div>
								<p>1850</p>
								<p>查看</p>
							</div>
						</el-col>
						<el-col :span="12">
							<div>
								<p>2</p>
								<p>关注</p>
							</div>
							<div>
								<p>325</p>
								<p>本月查看</p>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import Contribution from 'components/comps/common/Contribution.vue'
	export default{
		data(){
			return{
				author: "cjay",
				formInline: {
		          type: 'All',
		          language: 'All',
		          language2: 'All',
		          star: 'recent'
		        }
			}
		},
		mounted: function(){
			console.log(this.$route.params.user_id);
		},
	    components: {
	      "contribution": Contribution
	    }
	}
</script>
<style type="text/css">
	.myarticle .userinfo-container{
		display: flex;
		flex-direction: row;
	}
	.myarticle .contribution-container{
		overflow: auto;
    	margin-top: 10px;
		border: 1px solid rgb(212, 217, 223);
	    padding: 0px 0px 10px 0;
	    border-radius: 2px;
	    background: #fff;
	}
	.myarticle .visit-container{
		height: 140px;
		color: var(--sub-title-color, #b6b1aa);

		background: #fff;
    	box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.myarticle .visit-container .el-row{
		height: 100%;
	}
	.myarticle .visit-container .el-row .el-col div{
		height: 70px;
		display: flex;
	    flex-direction: column;
	    justify-content: center;
	}
	.myarticle .visit-container .el-row .el-col div p{
		margin: 0;
	}
	.myarticle .visit-container .el-row .el-col div p:first-child {
	    font-size: 20px;
	    font-weight: normal;
	    color: var(--title-color, #1f2f3d);
	}
	.myarticle .visit-container .el-row .el-col div p:last-child {
	    font-size: 12px;
	    font-weight: 400;
	}
	.myarticle .right-container .el-col{
		text-align: center;
	}
	.myarticle .right-container .el-col:first-child{
		border-right: 1px solid var(--border-color, rgb(212, 217, 223));
	}
	.myarticle .order{
		position: relative;
		float: right;
    	line-height: 56px;
    	margin-right: 10px;
	}
	.myarticle .filtercontainer{
		position: relative;
	}
	.myarticle .el-form-item{
		width: 150px;
		vertical-align: middle;
		margin: 10px 5px;
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom:1px solid #d4d9df;
	}
	.myarticle .info .top .left{
		width: 150px;
		font-size: 12px;
	}
	.myarticle .info .top .left h3{
		margin-bottom: 3px!important;
		color: var(--title-color, #1f2f3d)!important;
	}
	.myarticle .info .top .left span{
		color: var(--sub-title-color, #b6b1aa);
		font-weight: 600;
	}
	.myarticle .info .bottom{
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.myarticle .info .bottom .left{
		width: 200px;
		font-size: 12px;
	}
	.myarticle .info .bottom .left span{
		color: var(--sub-title-color, #433326);
	}
	.myarticle .info .bottom .left div{
		line-height: 25px;
		font-weight: 600;
	}
	.myarticle .info .bottom .left h3{
		margin-bottom: 3px!important;
	}
	.myarticle .info .bottom .right{
		display: flex;
	    flex-direction: column;
	    justify-content: center;
	    margin-right: 15px;
	}
	.myarticle .info .bottom .right .el-button-group{
		box-shadow: var(--btn-box-shadow, #d5d9de 3px 0px 7px 0px);
	}
	.myarticle .info .top .right{
		width: 200px;
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
		box-shadow: var(--left-box-shadow, #d5d9de -1px 1px 2px 0px);
	}
	.button-follow, .button-follow-count{
		border: 0!important;
	}
	.button-follow{
		background-color: var(--btn-bg-color-primary, #ea7069)!important;
		color: var(--btn-font-color-primary, #fbfcfc)!important;
	}
	.button-follow:hover{
		z-index: 0!important;
	}
	.button-follow-count{
		font-weight: 600;
	}
	.button-follow-count:hover{
		color: var(--default-color, #1f2d3d)!important;
	}
	 .el-tabs__item.is-active{
		color: var(--default-color, #1f2d3d)!important;
	}
	.el-tabs__item:hover {
	    color: var(--default-color, #1f2d3d)!important;
	}
	 .el-tabs__active-bar{
		background-color: var(--btn-bg-color-primary, #ea7069)!important;
	}
</style>