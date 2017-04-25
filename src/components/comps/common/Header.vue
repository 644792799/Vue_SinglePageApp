<template>
	<div class="header">
		<div class="nav">
			<a href="#" class="logo"><img src="/static/img/github.png"></a>
			<a v-for="menu in menus" :class="menu.clas" @click="toggleClas(menu)">
		  		<router-link :to="menu.to"><i :class="menu.ico">&nbsp;</i>{{menu.name}}</router-link>
		  	</a>
			<a class="nav-login">
				<!-- <router-link to="/signIn" @click="dialogVisible = true">登录</router-link> -->
				<el-button type="text" @click="signIn">登录</el-button>
				<b>.</b>
				<!-- <router-link to="/signUp">注册</router-link> -->
				<el-button type="text" @click="signUp">注册</el-button>
			</a>

			<el-dropdown class="pull-right">
			  	<span class="el-dropdown-link">
			    	<img src="/static/img/头像示例2.jpg" class="el-dropdown-img">
			    	<el-badge is-dot class="item">&nbsp;用户名</el-badge><i class="el-icon-arrow-down el-icon--right"></i>
			  	</span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>
			    	<router-link to="/myarticle"><i class="icon-profile">&nbsp;</i>我的空间</router-link>
			    </el-dropdown-item>
			    <el-dropdown-item><i class="icon-exit">&nbsp;</i>退出</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
			<router-link to="/editor" class="pull-right">
				<button class="pull-right plus">+</button>
			</router-link>
		</div>
		<el-dialog :title="issignin?'登录':'注册'" v-model="dialogVisible" size="tiny">
		  <!-- <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span> -->
		  <signin v-if="issignin"></signin>
		  <signup v-else-if="!issignin"></signup>
		</el-dialog>
	</div>
</template>

<script type="text/javascript">
	import SignIn from '../../pages/Sign/SignIn.vue'
	import SignUp from '../../pages/Sign/SignUp.vue'
	export default{
	data(){
		return {
			dialogVisible: false,
			issignin: false
		}
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
		},
		signIn: function(){
			this.dialogVisible = true;
			this.issignin = true;
		},
		signUp: function(){
			this.dialogVisible = true;
			this.issignin = false;
		}
	},
	components: {
		"signin": SignIn,
		"signup": SignUp
	}
}
</script>

<style type="text/css">
	.header .el-dialog--tiny {
    	width: 300px;
	}
	.header .nav-login{

	}
	.header .nav-login button.el-button.el-button--text {
    	color: #fff!important;
	}
	.header .plus{
		font-size: 35px;
	    background: none;
	    border: 0;
	    color: #fff;
	    font-weight: normal;
	    line-height: 40px;
	    *margin-right: 10px;
	    cursor: pointer;
	}
	.header .plus:focus{
		outline: none;
	}
	.header .plus:hover{
		color: #d4d9df;
	}
	.header .icon-home{
		*line-height: inherit;
		*font-size: 20px!important;
	}
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
		text-align: center;
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
		color: #d4d9df;
		*font-weight: bold;
	}

	.logo{
		margin: 5px;
	}

	.logo img{
		height: 25px;
		width: 25px;
	}
</style>