<template>
	<div class="sms-floattoolbar">
		<div @click="ToggleFullScreen" @keyup.esc="PressEsc" class="sms-floattoolbar-item" :title="fullScreenTitle">
			<i :class="fullScreenIco"></i>
		</div>
		<div @click="BackToTop" class="sms-floattoolbar-item" title="返回顶部">
			<i class="icon-chevron-up"></i>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'SmsBackToTop',
		data(){
			return{
				isFullScreen: false,
				fullScreenIco: "icon-maximize",
				fullScreenTitle: "全屏显示"
			}
		},
		methods: {
			BackToTop:  function(){
				var timer = setInterval(function () {
			        var toTop = document.body.scrollTop || document.documentElement.scrollTop;
			        document.documentElement.scrollTop = document.body.scrollTop = toTop - Math.ceil(toTop / 5);
			        if (toTop == 0) {
			        	clearInterval(timer);
			        };
			    }, 20);
			},
			ToggleFullScreen: function(){
				if(this.isFullScreen){
					exitFullScreen();
					this.isFullScreen = false;
					this.fullScreenIco = "icon-maximize";
					this.fullScreenTitle = "全屏显示";
				}else{
					fullScreen();
					this.isFullScreen = true;
					this.fullScreenIco = "icon-minimize";
					this.fullScreenTitle = "退出全屏";
				}
			},
			PressEsc: function(){
				console.log("PressEsc");
				this.isFullScreen = false;
				this.fullScreenIco = "icon-maximize";
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
	.sms-floattoolbar{
		display: flex;
		flex-direction: column;

		position: fixed;
		bottom: 5px;
		right: 5px;
		z-index: 9999;
	}
	.sms-floattoolbar-item{
		width: 50px;
		height: 50px;
		font-size: 20px;
		cursor: pointer;
		text-align: center;
    	line-height: 50px;
    	background: #d4d9df;
    	opacity: 0.5;
    	border-radius: 25px;
    	margin-bottom: 10px;
	}
	.sms-floattoolbar-item:hover{
		opacity: 1;
	}
</style>