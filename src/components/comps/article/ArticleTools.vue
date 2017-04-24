<template>
	<div class="article-tools">
		<button class="question"><i class="icon-question"></i></button>
		<button class="enlarge" @click="toggleFullScreen" @keyup.esc="pressEsc"><i :class="fullScreenIco"></i></button>
		<button class="printer"><i class="icon-printer"></i></button>
		<button class="link"><i class="icon-link"></i></button>
		<button class="star"><i class="icon-star"></i></button>
		<button class="branch"><i class="icon-git-branch"></i></button>
		<button class="copy"><i class="icon-clippy"></i></button>
		<button class="edit clearfix"><i class="icon-pencil2"></i></button>
		<button class="delete clearfix"><i class="icon-trashcan"></i></button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				isFullScreen: false,
				fullScreenIco: "icon-enlarge"
			}
		},
		props: [],
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
			pressEsc: function(){
				this.isFullScreen = false;
				this.fullScreenIco = "icon-enlarge";
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
		height: 50px;
		background: #fff;
	}
	.article-tools button{
		float: right;
		width: 50px;
		height: 100%;
		border: 0;
		border-left: 1px solid #d4d9df;
		background: #fff;
		font-size: 25px;
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
</style>