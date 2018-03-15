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
				<div class="contribution-container">
					<!-- <contribution></contribution> -->
					<calheatmap></calheatmap>
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
							  <el-form-item label="类型" class="">
							    <el-select v-model="formInline.type" placeholder="类型选择">
							      <el-option label="全部" value="All"></el-option>
							      <el-option label="公有" value="public"></el-option>
							      <el-option label="私有" value="private"></el-option>
							      <el-option label="FORK" value="fork"></el-option>
							    </el-select>
							  </el-form-item>
							  <el-form-item label="语言" class="">
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
						<div class="user-info">
							<div class="info-base">
								<div class="left">
									<img src="/static/img/头像示例2.jpg">
								</div>
								<div class="right">
									<div class="top">
										<div><b>小哥哥</b></div>
										<div>2017-12-01加入</div>
									</div>
									<div class="middle">
										<div><b>39</b>码片</div>
										<div><b>1.3k</b>关注</div>
										<div><b>3.3k</b>粉丝</div>
									</div>
									<div class="bottom">
										<el-button type="primary" size="small">添加关注</el-button>
									</div>
								</div>
							</div>
							<div class="info-split">
								<SmsLine gradfrom="all"></SmsLine>
							</div>
							<div class="info-other">
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
							<div class="info-split">
								<SmsLine gradfrom="all"></SmsLine>
							</div>
							<div class="info-selfdescript">
								该用户很懒，没有留下任何东西
							</div>
						</div>
					</SmsCard>
					<SmsCard header="擅长的语言" ico="icon-lightbulb-o">
						<div class="user-skills">
							<el-tag type="gray" v-for="tag in skillTag">{{tag}}</el-tag>
						</div>
						<div>
							<radar></radar>
						</div>
					</SmsCard>
					<SmsCard header="最近访问用户" ico="icon-user" class="visit-users">
						<div class="img-list">
							<ul>
					  			<li v-for="i in 14">
					  				<a href="javascript:void(0);">
					  					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498551826199&di=dd1413b07fcebf87e28b12316d4f14e7&imgtype=0&src=http%3A%2F%2Fk2.jsqq.net%2Fuploads%2Fallimg%2F1705%2F7_170524143440_5.jpg" title="小哥哥">
					  					<!-- <div style="font-size: 12px;    padding-top: 3px;">小哥哥</div> -->
					  				</a>
					  			</li>
					  		</ul>
						</div>
					</SmsCard>
					<SmsCard header="七日访问趋势" ico="icon-activity">
						<bar></bar>
					</SmsCard>
				</div>	
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Contribution from 'components/chart/Contribution.vue'
	import CalHeatmap from 'components/chart/CalHeatmap.vue'
	import Radar from 'components/chart/Radar.vue'
	import Bar from 'components/chart/BarChart.vue'
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
		        },
		        skillTag:[
		        	"HTML",
		        	"BEM",
		        	"CSS3",
		        	"SASS",
		        	"MQ",
		        	"SVG",
		        	"JQUERY",
		        	"GULP",
		        	"PYTHON",
		        	"JAVA"
		        ]
			}
		},
		mounted: function(){
			//console.log(this.$route.params.user_id);
			//this.drawHeatMap();
		},
	    components: {
	      "contribution": Contribution,
	      'calheatmap': CalHeatmap,
	      'radar': Radar,
	      'bar': Bar
	    },
	    methods: {
	    	drawHeatMap(){
	    		console.log(this.$echarts);
	    	}
	    }
	}
</script>
<style type="text/css">
	.myarticle{
		display: flex;
		flex-direction: column;
		*padding: 0 4.16667%;
		*padding-top: 50px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
	    color: var(--content-color, #4e5359);
	}

	.myarticle .myarticle-right .visit-users .sms-card__body{
		padding: 5px 5px;
	}
	
	.myarticle .contribution-container{
		overflow: auto;
    	*margin-top: 10px;
		border: 1px solid rgb(212, 217, 223);
	    padding: 0px 0px 10px 0;
	    border-radius: 2px;
	    background: #fff;
	}
	.myarticle .user-info .info-selfdescript{
		font-size: 14px;
		margin: 5px 10px;
	}
	.myarticle .user-info .info-other{
		font-size: 14px;
		margin: 5px 10px;
	}
	.myarticle .user-info .info-other>div{
		padding: 5px 0;
	}
	.myarticle .user-info .info-other>div span:first-child{
		font-weight: 600;
		margin-right: 10px;
	}
	.myarticle .user-info .info-other>div i{
		font-size: 18px;
		margin-right: 10px;
	}
	.myarticle .user-info .info-split{
		position: relative;
		height: 25px;
	}
	.myarticle .user-info .info-split .sms-line{
		margin: 15px 0 10px 0;
	}
	.myarticle .user-info .info-base{
		display: flex;
		flex-direction: row;
	}

	.myarticle .user-info .info-base .left{
		width: 75px;
		overflow: hidden;
	}

	.myarticle .user-info .info-base .left img{
		width: 75px;
		height: 75px;
		border-radius: 50%;
	}

	.myarticle .user-info .info-base .right{
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-left: 15px;
	}

	.myarticle .user-info .info-base .right .top div:last-child{
		font-size: 14px;
		color: var(--sub-title-color, #939c99);
		margin-top: 5px;
	}

	.myarticle .user-info .info-base .right .middle{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10px 10px 10px 0;
		font-size: 14px;
	}

	.myarticle .user-skills{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.myarticle .user-skills span{
		margin: 0px 5px 5px 5px; 
		cursor: pointer;
	}
	/*.myarticle .visit-container{
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
	}*/
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
		*width: 150px;
		vertical-align: middle;
		margin: 10px 5px;
	}
	.myarticle .filter{
		margin: 10px 10px;
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