<template>
	<div class="header">
		<div class="nav">
			<a href="#" class="logo"><img src="/static/img/github.png"></a>
			<a v-for="menu in menus" :class="menu.clas" @click="toggleClas(menu)">
		  		<router-link :to="menu.to">{{menu.name}}</router-link>
		  	</a>
			<a class="btn-2 btn pull-right">登陆/注册</a>

			<el-dropdown>
			  <span class="el-dropdown-link">
			    下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>黄金糕</el-dropdown-item>
			    <el-dropdown-item>狮子头</el-dropdown-item>
			    <el-dropdown-item>螺蛳粉</el-dropdown-item>
			    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
			    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
	data(){
		return {}
	},
	props: ['menus'],
	methods: {
		toggleClas: function(obj){
			for(var i = 0 ; i < this.menus.length ; i++){
				if(this.menus[i] == obj){
					this.menus[i].clas = "active";
				}else{
					this.menus[i].clas = "";
				}
			}
		}
	}
}
</script>

<style type="text/css">
	.header{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 50px;
		width: 100%;
		z-index: 100;
		position: fixed;
		background-color: #F9FAFB;
	}

	.header .nav{
		padding: 5px 30px;
		width: 100%;
	}

	.header .nav a{
		margin-right: 15px;
		color: #A5A7A8;
		font-size: 14px;
	}

	.header .nav .active a{
		color: #4E5359;
		font-weight: bold;
	}

	.logo{
		margin: 5px;
	}

	.logo img{
		height: 30px;
		width: 30px;
	}
</style>