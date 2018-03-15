<template>
	<div>
		<div class="notfond">
		  <div class="browser-bar">
		    <span class="close button"></span>
		    <span class="min button"></span>
		    <span class="max button"></span>
		  </div>
		  <div class="text"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import $ from 'jquery';
	import Typed from 'views/404/typed.js'
	export default {
	    data () {
	      return {}
	    },
	    components: {
	      
	    },
	    mounted () {
	    	
	    	$(function(){
	    		window.Typed.new(".text", {
					strings: [
						"您所访问的页面不存在.", 
						"我们对此表示非常的抱歉.",
						"请尝试以下操作",
						"返回 <a href='/'>主页</a> 或者返回 <a onclick='history.back(-1)'>上一页</a>."
					],
					typeSpeed: 50,
					loopCount: 3,
					loop: true,
					showCursor: false
				});
	    	});
	    }
	  }
</script>
<style type="text/css">
	/*body {
	  background: #000;
	  color: #fff;
	  font-family: "Lucida Console", Monaco, monospace;
	  line-height: 1.5;
	}*/

	.notfond a {
	  color: #fff;
	  text-decoration: none;
	  border-bottom: solid 2px;
	  cursor: pointer;
	}

	/*@media (min-width: 640px) {*/
	  /*body {
	    background-image: url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?dpr=2&fit=crop&fm=jpg&h=960&ixlib=rb-0.3.5&q=50&w=1440);
	    background-size: cover;
	    background-repeat: no-repeat;
	    background-position: center;
	    min-height: 100vh;
	  }*/

	  .notfond {
	    width: 500px;
	    height: 300px;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    margin-top: 200px;
	    transform: translate(-50%, -50%);
	    -webkit-transform: translate(-50%, -50%);
	    -ms-transform: translate(-50%, -50%);
	    background-color: #41484d;
	    padding: 45px 20px 20px;
	    box-sizing: border-box;
	    box-shadow: 0 0 25px rgba(0, 0, 0, .5);
	    border-radius: 5px 5px 0 0;
	    color: #fff;
	  }

	  .notfond .browser-bar {
	    background: #f9f9f3;
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    padding: 5px;
	    overflow: hidden;
	    border-radius: 5px 5px 0 0;
	  }

	  .notfond .button {
	    display: inline-block;
	    float: left;
	    border-radius: 50%;
	    width: 15px;
	    height: 15px;
	    margin-right: 5px;
	  }

	  .notfond .close {
	    background: #fc635d;
	  }

	  .notfond .min {
	    background: #fdbc40;
	  }

	  .notfond .max {
	    background: #34c84a;
	  }
/*	}*/
</style>