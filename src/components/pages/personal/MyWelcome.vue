<template>
	<div class="mywelcome">
		<div class="flex-row-layout">
			<div class="left">
				<div style="margin-top: 25px; margin-bottom: 15px;">
					<el-tabs v-model="activeDynamic" type="border-card" @tab-click="selectFocusTab">
					    <el-tab-pane label="关注动态" name="dynamic">
					    	动态
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
								    			<a href="#">Vue_SingleApp</a>
								    		</li>
								    		<li class="text-center loadmore">
								    			<a href="#">加载更多...</a>
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

	.mywelcome .left .el-tabs{
		min-height: 500px;
	}

	.mywelcome .left .el-tabs__content{
		box-shadow: none!important;
	}

	.mywelcome .left .el-tabs--border-card{
		box-shadow: none!important;
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
		padding: 10px 10px;
		font-size: 14px;
		font-weight: 600;
		display: flex;
    	align-items: center;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul>li i{
		margin-right: 5px;
		font-size: 16px;
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
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab ul>li a:hover{
		color: var(--link-hover-color, #20a0ff)!important;
		text-decoration: underline!important;
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