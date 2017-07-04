<template>
	<div class="article-tools">
		<el-popover
		  ref="questionpopover"
		  placement="bottom"
		  width="140"
		  v-model="questionpropvisible">
		  
		  <div style="margin: 0;font-size:15px;color:#586069;padding: 0 5px;line-height:1;">
		  	<div style="display:flex;flex-direction:row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-pencil2"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 编辑</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <div style="display:flex;flex-direction:row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-trashcan"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 删除</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <div style="display:flex;flex-direction:row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-clippy"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 复制</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <div style="display:flex;flex-direction: row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-git-branch"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 派生</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <div style="display:flex;flex-direction: row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-star"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 收藏</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <div style="display:flex;flex-direction: row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-star-o"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 未收藏</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <div style="display:flex;flex-direction: row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-link"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> EMBED</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <div style="display:flex;flex-direction: row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-printer"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 打印</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <!-- <div style="display:flex;flex-direction: row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-enlarge"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 全屏</div>
		    	<SmsLine gradfrom="left"></SmsLine>
		    </div>
		    <div style="display:flex;flex-direction: row;padding:5px 0;position:relative;">
		    	<div style="width:15px;"><i class="icon-shrink"></i></div>
		    	<div style="margin-left:10px;"><b>:</b> 退出全屏</div>
		    </div> -->
		  </div>
		</el-popover>
		<button class="question" :plain="true" @click="help" v-popover:questionpopover><i class="icon-question"></i></button>
		<!-- <button class="enlarge" @click="toggleFullScreen" @keyup.esc="pressEsc"><i :class="fullScreenIco"></i></button> -->
		<button class="printer" @click="print"><i class="icon-printer"></i></button>
		<button class="link"><i class="icon-link"></i></button>
		<button class="star" @click="toggleStar"><i :class="starIco"></i></button>
		<button class="branch"><i class="icon-git-branch"></i></button>
		<button class="copy" @click="copy"><i class="icon-clippy"></i></button>
		<button class="edit clearfix"><i class="icon-pencil2"></i></button>
		
		<el-popover
		  ref="delpopover"
		  placement="bottom"
		  width="140"
		  v-model="delpropvisible">
		  <p>确定删除该代码片吗？</p>
		  <div style="text-align: right; margin: 0">
		    <el-button size="mini" type="text" @click="delpropvisible = false">取消</el-button>
		    <el-button type="primary" size="mini" @click="delpropvisible = false">确定</el-button>
		  </div>
		</el-popover>
		<button class="delete clearfix" v-popover:delpopover><i class="icon-trashcan"></i></button>
	</div>
</template>
<script type="text/javascript">
	import clipboard from 'pluginspath/articletools/clipboard.js'
	import print from 'pluginspath/articletools/print.min.js'
	import 'pluginspath/articletools/print.min.css'
	export default{
		data(){
			return {
				isFullScreen: false,
				fullScreenIco: "icon-enlarge",
				starIco: "icon-star",
				delpropvisible: false,
				questionpropvisible: false
			}
		},
		props: ['code'],
		methods: {
			toggleFullScreen: function(){
				if(this.isFullScreen){
					exitFullScreen();
					this.isFullScreen = false;
					this.fullScreenIco = "icon-enlarge";
				}else{
					fullScreen();
					this.isFullScreen = true;
					this.fullScreenIco = "icon-shrink";
				}
			},
			toggleStar: function(){
				//icon-star-o
				if(this.starIco == "icon-star"){
					this.starIco = "icon-star-o";
				}else{
					this.starIco = "icon-star";
				}
			},
			pressEsc: function(){
				this.isFullScreen = false;
				this.fullScreenIco = "icon-enlarge";
			},
			help(){
				
			},
			open() {
		        this.$message('这是一条消息提示');
		    },
		    copy: function(){
		    	var self = this;
		    	var codestr = this.code + "";
		    	clipboard.copy(codestr).then(
				  function(){self.$message('复制成功');},
				  function(err){console.log("failure", err);}
				);
		    },
		    print: function(){
		    	printJS('article-content', 'html');
		    }
		}
	}

	function fullScreen(){
		var docElm = document.documentElement;
		//W3C  
		if (docElm.requestFullscreen) {  
		    docElm.requestFullscreen();  
		}
		//FireFox  
		else if (docElm.mozRequestFullScreen) {  
		    docElm.mozRequestFullScreen();  
		}
		//Chrome等  
		else if (docElm.webkitRequestFullScreen) {  
		    docElm.webkitRequestFullScreen();  
		}
		//IE11
		else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		}
	}

	function exitFullScreen(){
		if (document.exitFullscreen) {  
		    document.exitFullscreen();  
		}  
		else if (document.mozCancelFullScreen) {  
		    document.mozCancelFullScreen();  
		}  
		else if (document.webkitCancelFullScreen) {  
		    document.webkitCancelFullScreen();  
		}
		else if (document.msExitFullscreen) {
		      document.msExitFullscreen();
		}
	}
</script>
<style type="text/css">
	.article-tools{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.article-tools button{
		float: right;
		width: 30px;
		height: 100%;
		border: 0;
		border-left: 1px solid #d4d9df;
		background: #fff;
		font-size: 15px;
		color: #586069;
	}
	.article-tools button:hover{
		background: #F9FAFB;
	}
	.article-tools button:focus{
		outline: none;
	}
	/*.article-tools .edit, .article-tools .delete{
		float: none;
	    border-left: 0;
	    border-right: 1px solid #d4d9df;
	}*/
	.article-tools .clearfix{
		float: left;
	    border-left: 0;
	    border-right: 1px solid #d4d9df;
	}
	.article-tools .delete{
		color: #ea7069;
	}
	.article-tools .delete:hover{
		background-color: #ea7069;
		color:#fff;
	}
</style>