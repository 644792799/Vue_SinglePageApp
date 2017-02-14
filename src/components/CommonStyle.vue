<template>
	<div class="row">
		<div class="col-md-12 h20"></div>
		<div class="col-md-1"></div>
		<div class="col-md-1 p0">
			<div class="bs-c0 w20">bs-c0</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c1 w20">bs-c1</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c2 w20">bs-c2</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c3 w20">bs-c3</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c4 w20">bs-c4</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c5 w20">bs-c5</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c6 w20">bs-c6</div>
		</div>
		<div class="col-md-1 p0">
			<div class="bs-c7 w20">bs-c7</div>
		</div>
		<div class="col-md-12 h20"></div>

		<div class="col-md-12">
			<button class="btn-1 btn">注册</button>
			<button class="btn-2 btn">登陆</button>
		</div>
		<div class="col-md-12 h20"></div>
	</div>
</template>

<style type="text/css">
	.w20{
		height: 20px;
		*width: 50px;
		text-align: center;
	}
	.p0{
		padding: 0!important;
	}
	.w20:hover{
		background-image: none;
	    -webkit-transform: scale(1.5);
	    -moz-transform: scale(1.5);
	    -o-transform: scale(1.5);
	    transform: scale(1.5);
	    box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
	}
	.p0:hover{
		z-index: 9999;
	}
	.h20{
		*height: 20px;
		margin: 5px 0;
		border-bottom: 1px solid #eee;
	}
</style>