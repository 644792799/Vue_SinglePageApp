<template>
	<div class="header">
		<div class="nav">
			<a href="#" class="logo"><img src="/static/img/github.png"></a>
			<a v-for="menu in menus" :class="menu.clas" @click="toggleClas(menu)">
		  		<router-link :to="menu.to">{{menu.name}}</router-link>
		  	</a>
			<a>
				<router-link to="/signIn">登录</router-link>
				<router-link to="#"><b>.</b></router-link>
				<router-link to="/signUp">注册</router-link>
			</a>

			<el-dropdown class="pull-right">
			  	<span class="el-dropdown-link">
			    	<img src="/static/img/头像示例2.jpg" class="el-dropdown-img">
			    	<el-badge is-dot class="item">&nbsp;用户名</el-badge><i class="el-icon-arrow-down el-icon--right"></i>
			  	</span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>
			    	<router-link to="/myarticle">我的空间</router-link>
			    </el-dropdown-item>
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
	.el-dropdown{
		*line-height: 50px;
	}
	.el-dropdown-img{
		width: 25px;
		height: 25px;
		vertical-align: middle;
		border-radius: 12.5px;
	}
	.header{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 50px;
		width: 100%;
		z-index: 100;
		position: fixed;
		background-color: #41484d;
		border-bottom: 1px solid #eaeefb;
	}

	.header .nav{
		padding: 5px 30px;
		width: 100%;
		line-height: 40px;
	}

	.header .nav a{
		margin-right: 15px;
		color: #fff;
		font-size: 14px;
		float: left;
	}

	.header .el-dropdown{
		color: #FBFCFC!important;
	}

	.header .nav .active a{
		color: #fbfcfc;
		font-weight: bold;
	}

	.logo{
		margin: 5px;
	}

	.logo img{
		height: 25px;
		width: 25px;
	}
</style>