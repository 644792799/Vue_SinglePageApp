<template>
	<div class="mywelcome">
		<div class="flex-row-layout">
			<div class="left">
				<div style="margin-top: 25px; margin-bottom: 15px;">
					<el-tabs v-model="activeDynamic" type="border-card" @tab-click="selectFocusTab">
					    <el-tab-pane label="关注动态" name="dynamic">
					    	<div>
					    		<ul class="focus-dynamic">
					    			<li v-for="i in 15">
					    				<div>
					    					<a href="#">
					    						<img src="/static/img/头像示例2.jpg">
					    					</a>
					    					<a href="#">小哥哥</a>
					    					<span>收藏了</span>
					    					<a href="#">
					    						brigandbabel-plugin-flow-react-proptypes
											</a>
					    				</div>
					    				<div>18 分钟前</div>
					    			</li>
					    		</ul>
					    	</div>
					    </el-tab-pane>
					    <el-tab-pane label="关注分类" name="category">
					    	配置管理
					    </el-tab-pane>
					</el-tabs>
				</div>
			</div>
			<div>
				<div class="right">
					<SmsCard header="你的码片" ico="icon-terminal" legend="52">
						<div class="snipt-filter">
							<div>
								<el-input size="small" v-model="filterText" placeholder="查找码片"></el-input>
							</div>
							<div class="snipt-filter-tab">
							  	<el-tabs v-model="activeSniptCat" @tab-click="selectSniptCat">
								    <el-tab-pane label="全部" name="all">
								    	<ul class="snipt-list all-snipt">
								    		<li v-for="i in 5">
								    			<i class="icon-globe2"></i>
								    			<a href="#" class="link-hover-effect-singleline">Vue_SingleApp</a>
								    		</li>
								    		<li class="text-center loadmore">
								    			<a href="#" class="link-hover-effect-singleline">加载更多...</a>
								    		</li>
								    	</ul>
									</el-tab-pane>
								    <el-tab-pane label="公开" name="public">
								    	
									</el-tab-pane>
								    <el-tab-pane label="私有" name="private">
								    	
								    </el-tab-pane>
								    <el-tab-pane label="派生" name="fork">
								    	
								    </el-tab-pane>
								    <el-tab-pane label="收藏" name="star">
								    	
								    </el-tab-pane>
								</el-tabs>
						  	</div>
						</div>
				  	</SmsCard>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				activeSniptCat: 'all',
				activeDynamic: 'dynamic',
				filterText: ''
			}
		},
		methods:{
			selectSniptCat(tab, event){

			},
			selectFocusTab(tab, event){

			}
		}
	}
</script>

<style type="text/css">
	.mywelcome{
		display: flex;
		flex-direction: column;
	}

	.mywelcome .flex-row-layout{
		padding: 0 50px;
	}

	.mywelcome .left {
	    -ms-flex: 1;
	    flex: 1;
	}

	.mywelcome .left .focus-dynamic{
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.mywelcome .left .focus-dynamic li{
		height: 65px;
		overflow: hidden;
		font-size: 14px;
		color: var(--content-color, #4e5359);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.mywelcome .left .focus-dynamic li+li{
		border-top: 1px solid var(--border-color, #e4e8f1);
	}

	.mywelcome .left .focus-dynamic li>div{
		display: flex;
		align-items: center;
	}

	.mywelcome .left .focus-dynamic li>div span{
		margin: 0 5px;
	}

	.mywelcome .left .focus-dynamic li a{
		font-weight: 600;
		color: var(--content-color, #4e5359);
	}

	.mywelcome .left .focus-dynamic li a:hover{
		color: var(--link-hover-color, #20a0ff)!important;
    	text-decoration: underline!important;
	}

	.mywelcome .left .focus-dynamic li a:first-child{
		margin-right: 16px; 
	}

	.mywelcome .left .focus-dynamic li a:last-child{
		display: inline-block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}

	.mywelcome .left .focus-dynamic li img{
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	.mywelcome .left .el-tabs{
		min-height: 500px;
	}

	.mywelcome .left .el-tabs__content{
		box-shadow: none!important;
	}

	.mywelcome .left .el-tabs--border-card{
		box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5)!important;
		border: 0;
	}

	.mywelcome .right {
	    width: 300px;
	    margin-top: 25px;
	    margin-left: 45px;
	    border-radius: 3px;
	}

	.mywelcome .right .snipt-filter{
		display: flex;
		flex-direction: column;
	}

	.mywelcome .right .sms-card__body{
		padding-bottom: 0;
	}

	.mywelcome .right .snipt-filter .el-tabs__content{
		box-shadow: none;
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab{
		margin: 0 -5px;
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul{
		list-style: none;
		padding: 0;
    	margin: 0;
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul>li{
		padding: 5px 10px;
		font-size: 14px;
		font-weight: 600;
		display: flex;
    	align-items: center;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul>li i{
		margin-right: 5px;
		font-size: 16px;
		color: var(--content-color, #4e5359);
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul>li a{
		color: var(--link-hover-color, #20a0ff)!important;
		display: inline-block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    vertical-align: top;

	    transition: .1s ease-in-out;
	    -webkit-transition: .1s ease-in-out;
	    -moz-transition: .1s ease-in-out;
	    -o-transition: .1s ease-in-out;
	    -ms-transition: .1s ease-in-out;

	    padding: 5px 0px 5px 5px;
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul>li a:hover{
		color: var(--link-hover-color, #20a0ff)!important;
		*text-decoration: underline!important;
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul>li.loadmore{
		font-size: 12px;
		font-weight: normal;
		justify-content: center;
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul>li+li{
		border-top: 1px solid var(--border-color, #e4e8f1);
	}

	.mywelcome .right .snipt-filter>div:first-child{
		padding: 0 5px 0px;
	}
</style>