<template>
	<div class="welcome">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {

			}
		}
	}
</script>
<style type="text/css">
/*	html,body {
	  height:100%;
	  overflow: hidden;
	}*/

	@keyframes move {
		0% { 
			background-position: 0 60%, 0 50%;
		}
		100% { 
		  background-position: 0 60%, 100% 50%;
		}
	}

	.welcome {
	  background-color: #263645;
		background-image: url('/static/img/svg/network.svg'), radial-gradient(200px 500px at center, #ff8300 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0));
		background-size: 125%, 50% 100%;
	  background-position: 0 60%, 0 100%;
	  animation: move 5s linear infinite;
	  
	  /* Extra Styles */
	  height: 100%;
	  /*box-shadow: inset 0 0 25px rgba(0,0,0,.5);*/
	  border: 2px solid #263645;
	  border-right: 0;
	  border-left: 0;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
</style>