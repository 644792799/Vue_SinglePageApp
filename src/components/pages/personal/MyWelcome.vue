<template>
	<div class="mywelcome">
		<div class="flex-row-layout">
			<div class="left">
				<div style="margin-top: 25px; margin-bottom: 15px;">
					<el-tabs v-model="activeDynamic" type="border-card" @tab-click="selectFocusTab">
					    <el-tab-pane label="关注动态" name="dynamic">动态</el-tab-pane>
					    <el-tab-pane label="关注分类" name="category">配置管理</el-tab-pane>
					</el-tabs>
				</div>
			</div>
			<div>
				<div class="right">
					<SmsCard header="你的码片" ico="icon-terminal">
						<div class="snipt-filter">
							<div>
								<el-input size="small" v-model="filterText" placeholder="查找码片"></el-input>
							</div>
							<div class="snipt-filter-tab">
							  	<el-tabs v-model="activeSniptCat" @tab-click="selectSniptCat">
								    <el-tab-pane label="全部" name="all">全部</el-tab-pane>
								    <el-tab-pane label="公开" name="public">公开</el-tab-pane>
								    <el-tab-pane label="私有" name="private">私有</el-tab-pane>
								    <el-tab-pane label="派生" name="fork">派生</el-tab-pane>
								    <el-tab-pane label="收藏" name="star">收藏</el-tab-pane>
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

	.mywelcome .right .snipt-filter .el-tabs__content{
		box-shadow: none;
		padding: 10px 10px;
	}

	.mywelcome .right .snipt-filter .snipt-filter-tab{
		margin: 0 -5px;
	}

	.mywelcome .right .snipt-filter>div:first-child{
		padding: 0 5px 0px;
	}
</style>