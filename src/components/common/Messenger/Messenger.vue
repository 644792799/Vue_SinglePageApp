<template>
	<div class="messenger">
		<div class="messagefilter">
			<div class="stats">10 评论</div>
			<div class="operation">
				<div class="user">
					<span>只看 </span> 
					<el-select v-model="seluser" size="small" filterable placeholder="请选择">
					    <el-option
					      v-for="item in seluseroptions"
					      :key="item.uid"
					      :label="item.uname"
					      :value="item.uid">
					    </el-option>
				    </el-select>
				</div>
				<div class="sort">
					<el-radio-group v-model="radsort" size="small">
				      <el-radio-button label="默认排序"></el-radio-button>
				      <el-radio-button label="时间排序"></el-radio-button>
				    </el-radio-group>
				</div>
			</div>
		</div>
		<messagepanel v-for="i in 3"></messagepanel>
		<div class="discuss">
		  	<SmsMarkdown :options="markdownOption"></SmsMarkdown>	
		</div>
		<!-- <div class="msg-header">
			<div class="msg-header-left">
				<i class="icon-commenting-o"></i>
				<b style="margin-left:5px;">评论</b>
			</div>
		</div>
		<div class="msg-content">
			<div class="msg-content-left">
				<div style="
				    overflow-y: scroll;
				    overflow-x: hidden;
				    width: 198px;
				    height: 100%;
				">
					<SmsUserCardHor shape="circle" v-for="i in 18" img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498551826199&di=dd1413b07fcebf87e28b12316d4f14e7&imgtype=0&src=http%3A%2F%2Fk2.jsqq.net%2Fuploads%2Fallimg%2F1705%2F7_170524143440_5.jpg">
						<div class="title">
							<h6>小哥哥</h6>
						</div>
					</SmsUserCardHor>
				</div>
			</div>
			<div class="msg-content-right">
				<div></div>
				<div></div>
			</div>
		</div>
		<div class="msg-footer">
			
		</div> -->
	</div>
</template>
<script type="text/javascript">
	import MessagePanel from 'components/common/Messenger/MessagePanel.vue'
	export default{
		data(){
			return{
				radsort: '默认排序',
				seluser: '',
				seluseroptions:[
					{
						uid: 1,
						uname: '小哥哥'
					},
					{
						uid: 2,
						uname: '大哥哥'
					}
				],
				markdownOption:{
					showSubmit: true
				}
			}
		},
		methods: {},
		components: {
			"messagepanel": MessagePanel
		}
	}
</script>
<style type="text/css">
	.messenger{
		padding-top: 15px;
		z-index: 1;
	}
	.messenger::before{
		position: absolute;
	    top: 0;
	    bottom: 0;
	    left: 20px;
	    display: block;
	    width: 2px;
	    content: "";
	    background-color: #e6ebf1;
	    z-index: -1;
	}
	.messenger .discuss{
		background-color: #fbfcfc;
    	border-top: 2px solid #e6ebf1;
    	padding: 15px 0;
    	z-index: 1;
	}

	.messenger .messagefilter{
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		border-bottom: 2px solid #e6ebf1;
		margin-left: 20px;
	}

	.messenger .messagefilter .stats{
		font-weight: 600;
		color: var(--title-color, #4E5359);
		padding-left: 20px;
	}

	.messenger .messagefilter .operation{
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.messenger .messagefilter .operation>div{
		margin-left: 15px;
	}

	.messenger .messagefilter .operation .user>span{
		font-size: 12px;
		margin-right: 5px;
	}

	.messenger .messagefilter .operation .user .el-select{
		width: 85px;
	}

	.messenger .messagefilter .operation .user .el-select .el-input{
		width: 100%;
	}
</style>