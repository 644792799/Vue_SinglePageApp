<template>
	<div class="messagepanel">
		<div class="userimg">
			<img src="/static/img/头像示例2.jpg">
		</div>
		<div style="flex:1;">
			<div :class="messageclass">
				<div class="messagedetail">
					道中落，母亲出生不久就随父母和其他亲戚举家南迁，据说当时还余了些小钱在“红庙”地区开小旅馆为生，能供母亲
				</div>
				<div class="messageaction">
					<div class="usermessage">
						<div class="username">小哥哥</div>
						<div class="dot">.</div>
						<div class="time">2017年7月4日</div>
					</div>
					<div class="info">
						<el-tooltip class="item" effect="dark" content="赞" placement="top">
							<i class="icon-thumbs-up2"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="踩" placement="top">
							<i class="icon-thumbs-down2"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="回复" placement="top">
							<i class="icon-comment-square" @click="toggleReplay"></i>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="举报" placement="top">
							<i class="icon-flag2"></i>
						</el-tooltip>
					</div>
				</div>
			</div>
			<div :class="replayclass">
				<div class="replaymessagepanel" v-for="i in 3">
					<div class="replayuserimg">
						<img src="/static/img/头像示例2.jpg">
					</div>
					<div class="replaymessage">
						<div class="replayusername">
							<a href="">用户名</a>南迁，据说当时还余了些小钱在“红庙”地区开小旅
						</div>
						<div class="replaytime">
							15分钟前
						</div>
					</div>
				</div>
				<div class="replayedit">
					<div class="replayedituserimg">
						<img src="/static/img/头像示例2.jpg">
					</div>
					<div class="replayeditmessage">
						<!-- <textarea></textarea> -->
					</div>
					<div class="replayeditsubmit">
						<el-button type="primary">添加</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    name: '',
	    props: [],
	    data(){
			return {
				replayclass: 'messagereplay h0',
				messageclass: 'message'
			}
		},
		methods: {
			toggleReplay: function(){
				if(this.replayclass == "messagereplay"){
					this.replayclass = "messagereplay h0";
					this.messageclass = "message";
				}else{
					this.replayclass = "messagereplay";
					this.messageclass = "message messagewidthreplay";
				}
			}
		}
	  };
</script>
<style type="text/css">
	.messagepanel{
		display: flex;
		flex-direction: row;
		padding: 15px 0;
		color: var(--title-color, #4E5359);
	}
	.messagepanel .h0{
		height: 0!important;
		*visibility: hidden;
	}
	.messagepanel .userimg{
		*z-index: 1;
	}
	.messagepanel .userimg img{
		width: 40px;
		height: 40px;
		border-radius: 3px;
	}
	.messagepanel .message{
		position: relative;
	    background-color: #fff;
	    border: 1px solid #d1d5da;
	    border-radius: 3px;
	    margin-left: 10px;
	    flex: 1;
	    *z-index: 1;
	}
	.messagepanel .message::before, .messagepanel .message::after{
    	position: absolute;
	    top: 11px;
	    right: 100%;
	    left: -16px;
	    display: block;
	    width: 0;
	    height: 0;
	    pointer-events: none;
	    content: " ";
	    border-color: transparent;
	    border-style: solid solid outset;
	}
	.messagepanel .message::before{
		border-width: 8px;
    	border-right-color: #d1d5da;
	}
	.messagepanel .message::after{
		margin-top: 1px;
	    margin-left: 2px;
	    border-width: 7px;
	    border-right-color: #fff;
	}
	.messagepanel .messagewidthreplay{
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	.messagepanel .messagereplay{
		*width: 95%;
		*height: 100px;
		margin: -2px auto;
		border: 1px solid var(--border-color, #d4d9df);
		border-radius: 3px;
		-webkit-transition: all 0.15s cubic-bezier(0.41, -0.21, 1, 0.76);
	    transition: all 0.15s cubic-bezier(0.41, -0.21, 1, 0.76);
	    display: flex;
	    flex-direction: column;
	    overflow: hidden;
	    margin-left: 10px;
	}
	.messagepanel .messagereplay .replayedit{
		*height: 30px;
		*border-top: 1px solid var(--border-color, #d4d9df);
		padding: 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.messagepanel .messagereplay .replayedit .replayeditmessage{
		background: #fff;
	}
	.messagepanel .messagereplay .replayedit .replayedituserimg{
		*border-right: 1px solid var(--border-color, #d4d9df);
		display: flex;
		align-items: center;
		padding-right: 5px;
	}
	.messagepanel .messagereplay .replayedit .replayedituserimg img{
		width: 30px;
		height: 30px;

	}
	.messagepanel .messagereplay .replayedit .replayeditmessage{
		flex: 1;
	}
	.messagepanel .messagereplay .replayedit .replayeditsubmit{
		*width: 100px;
	}
	.messagepanel .messagereplay .replayedit .replayeditsubmit .el-button--primary{
		background: var(--btn-bg-color-primary, #20a0ff);
    	border-color: var(--btn-border-color-primary, #20a0ff);
    	color: var(--btn-font-color-primary, #fff);
    	border-radius: 0;
	}
	.messagepanel .messagereplay .replayedit .replayeditsubmit .el-button--primary:hover{
		background: var(--btn-hover-bg-color-primary, #4db3ff);
		border-color: var(--btn-hover-border-color-primary, #4db3ff);
	}
	.messagepanel .messagereplay .replaymessagepanel{
		flex: 1;
		padding: 5px;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.messagepanel .messagereplay .replaymessagepanel .replayuserimg img{
		width: 30px;
		height: 30px;
		border-radius: 3px;
	}
	.messagepanel .messagereplay .replaymessagepanel .replaymessage{
		flex: 1;
		margin-left: 10px;
		font-size: 14px;
		line-height: 1.7;
		color: var(--title-color, #4E5359);
	}
	.messagepanel .messagereplay .replaymessagepanel .replaymessage .replaytime{
		color: var(--sub-title-color, #939c99);
		font-size: 12px;
	}
	.messagepanel .messagereplay .replaymessagepanel .replaymessage a{
		color: var(--link-hover-color, #20a0ff);
		margin-right: 5px;
	}
	.messagepanel .message .messagedetail{
		*width: 100%;
	    padding: 15px;
	    overflow: visible;
	    font-size: 14px;
	}
	.messagepanel .message .messageaction{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	    padding: 8px;
	    *padding-top: 0;
	    border-top: 1px solid #d1d5da;
    	background: #e6ebf1;
	}
	.messagepanel .message .messageaction .usermessage{
		font-weight: 600;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.messagepanel .message .messageaction .usermessage>div{
		margin-right: 10px;
	}
	.messagepanel .message .messageaction .usermessage .time{
		font-size: 12px;
		font-weight: 600;
		color: var(--sub-title-color, #939c99);
	}
	.messagepanel .message .messageaction .dot{
		font-weight: 600;
		color: var(--sub-title-color, #939c99);
	}
	.messagepanel .message .messageaction .info .el-tooltip{
		margin-left: 20px;
	}
	.messagepanel .message .messageaction .info i {
	    *margin-left: 20px;
	    font-size: 18px;
	    cursor: pointer;
	    font-weight: 400;
	    *-webkit-transition: -webkit-transform 0.15s cubic-bezier(0.2, 0, 0.13, 2);
	    *transition: transform 0.15s cubic-bezier(0.2, 0, 0.13, 2);
	    *-webkit-transform: scale(1);
	    *transform: scale(1);
	}
	.messagepanel .message .messageaction .info i:hover{
		-webkit-transform: scale(1.2);
    	transform: scale(1.2);
    	font-size: 18px;
	}
</style>