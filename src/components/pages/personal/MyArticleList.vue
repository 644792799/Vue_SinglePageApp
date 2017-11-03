<template>
	<div class="myarticle">
		<div class="sub-nav">
			<div class="breadcrumb-container">
		  		<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>小哥哥</el-breadcrumb-item>
				</el-breadcrumb>  
		  	</div>
		</div>
		<div class="flex-row-layout">
			<div class="myarticle-left">
				<div class="userinfo-container">
					<div class="userimg-container">
						<img src="/static/img/头像示例2.jpg">
						<div>
							<i class="icon-venus"></i>
						</div>
					</div>
					<div class="info">
						<div class="basicinfo">
							<h3>CJAY</h3>
							<p>该用户很懒，没有留下任何东西</p>
							<div>
								<el-button-group>
									<el-button class="button-follow" size="small">添加关注</el-button>
									<el-button class="button-follow-count icon-user-plus3" size="small"></el-button>
								</el-button-group>
							</div>
						</div>
						<div class="detailinfo">
							<div>
								<span>加入时间</span>
								<span>2017年7月17日</span>
							</div>
							<div>
								<span>所属公司</span>
								<span>UCEN</span>
							</div>
							<div>
								<span>居住城市</span>
								<span>四川.成都</span>
							</div>
							<div>
								<span>个人网站</span>
								<span>www.snipt.com</span>
							</div>
							<div>
								<i class="icon-weibo" style="color: rgb(234, 111, 90);"></i>
								<i class="icon-wechat" style="color: rgb(66, 192, 46);"></i>
								<i class="icon-qq" style="color: rgb(49, 148, 208);"></i>
								<i class="icon-github2"></i>
								<i class="icon-google" style="color: rgb(49, 148, 208);"></i>
							</div>
						</div>
						<!-- <div class="top">
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
						</div> -->
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
							  <el-form-item>
							  	<el-input
								    placeholder="请输入内容"
								    icon="search"
								    v-model="formInline.iptSearchMyCode">
								</el-input>
							  </el-form-item>
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
			</div>	
			<div>
				<div class="myarticle-right">
					<SmsCard>
					<div class="visit-container">
						<div>
							<div>
								<p>2540</p>
								<p>粉丝</p>
							</div>
							<div>
								<p>1850</p>
								<p>查看</p>
							</div>
						</div>
						<div>
							<div>
								<p>2</p>
								<p>关注</p>
							</div>
							<div>
								<p>325</p>
								<p>本月查看</p>
							</div>
						</div>
					</div>
					</SmsCard>
					<SmsCard header="擅长的语言" ico="icon-lightbulb-o">
						
					</SmsCard>
					<SmsCard header="最活跃粉丝" ico="icon-user">
						
					</SmsCard>
					<SmsCard header="最近访问用户" ico="icon-user">
						
					</SmsCard>
				</div>	
			</div>
		</div>
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
		          star: 'recent',
		          iptSearchMyCode: ''
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
	.myarticle{
		display: flex;
		flex-direction: column;
		*padding: 0 4.16667%;
		*padding-top: 50px;
	}
	.myarticle .sub-nav{
		background: var(--bg-color, #fbfcfc);
		padding: 0 50px;
		display: flex;
    	align-items: center;
		*border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.myarticle .flex-row-layout{
		padding: 0 50px;
	}
	.myarticle .breadcrumb-container{
		margin: 15px 0;
		position: relative;
	}
	.myarticle .myarticle-left{
		flex: 1;
		margin-top: 25px;
	}
	.myarticle .myarticle-right{
		width: 300px;
	    margin-top: 25px;
	    margin-left: 45px;
	    padding: 10px;
	    padding-top: 0;
	    *background: #Fff;
	    *border-radius: 3px;
	    *border: 1px solid var(--border-color, #d4d9df);
	    *box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.myarticle .userinfo-container{
		display: flex;
		flex-direction: row;
		background: #fff;
    	box-shadow: var(--left-box-shadow, #d5d9de -1px 1px 2px 0px);
	}
	.myarticle .userinfo-container .userimg-container{
		position: relative;
	}
	.myarticle .userinfo-container .userimg-container>div{
		position: absolute;
		right: 30px;
		bottom: 30px;
		width: 16px;
		height: 16px;
		border-radius: 9px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		box-shadow: 1px 2px 4px 0px #d4d9df;
		padding: 2px;
	}
	.myarticle .userinfo-container .userimg-container>div i{
		font-size: 13px;
		font-weight: 600;
		color: #ea7069;/*#20a0ff*/
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
		display: flex;
		flex-direction: row;
		background: #fff;
	}
	.myarticle .visit-container>div{
		width: 50%;
	}
	.myarticle .visit-container>div div{
		height: 70px;
		display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	}
	.myarticle .visit-container div p{
		margin: 0;
	}
	.myarticle .visit-container>div div:first-child{
		border-bottom: 1px solid #e6ebf1;
	}
	.myarticle .visit-container>div div p:first-child {
	    font-size: 20px;
	    font-weight: normal;
	    color: var(--title-color, #1f2f3d);
	}
	.myarticle .visit-container>div div p:last-child {
	    font-size: 12px;
	    font-weight: 400;
	}
	.myarticle .visit-container>div:first-child{
		border-right: 2px solid #e6ebf1;
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
		/*height: 150px;
		width: 150px;*/
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.myarticle .userimg-container img{
		border-radius: 4px;
		height: 100px;
		width: 100px;
		border-radius: 75px;
	}
	.myarticle .info{
		flex: 1; 
		padding: 20px 0 15px 0;
		display: flex;
		flex-direction: row;
	}
	.myarticle .info .basicinfo{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-right: 2px solid #e6ebf1;
	}
	.myarticle .info .basicinfo h3{
		margin: 10px 0 5px 0;
	}
	.myarticle .info .basicinfo p{
		margin: 0px 0 15px 0;
		font-size: 12px;
		color: var(--sub-title-color, ##939c99);
	}
	.myarticle .info .detailinfo{
		width: 300px;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.myarticle .info .detailinfo>div{
		margin: 5px;
	}
	.myarticle .info .detailinfo>div span:first-child{
		font-weight: 600;
		color: var(--title-color, #4e5359);
		margin-right: 25px;
		margin-left: 10px;
	}
	.myarticle .info .detailinfo>div span:last-child{
		color: var(--sub-title-color, #939c99);
	}
	.myarticle .info .detailinfo>div i{
		font-size: 15px;
		margin-right: 10px;
	}
	.myarticle .info .detailinfo>div i:first-child{
		margin-left: 10px;
	}
	.myarticle .info .el-button-group{
		box-shadow: var(--btn-box-shadow, #d5d9de 3px 0px 7px 0px);
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