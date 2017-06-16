<template>
	<div class="header">
		<div class="nav">
			
			<router-link to="/index" class="icon-steps"></router-link>
			<span v-for="menu in menus" :class="menu.clas" @click="toggleClas(menu)">
		  		<router-link :to="menu.to"><i :class="menu.ico">&nbsp;</i>{{menu.name}}</router-link>
		  	</span>
			<div class="pull-right plus-container">
				<router-link to="/editor">
					<i class="icon-plus2"></i>
				</router-link>
			</div>

			<el-dropdown class="pull-right">
			  	<span class="el-dropdown-link">
			    	<img src="/static/img/头像示例2.jpg" class="el-dropdown-img">
			    	&nbsp;用户名<i class="el-icon-arrow-down el-icon--right"></i>
			  	</span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>
			    	<router-link to="/myarticle"><i class="icon-profile">&nbsp;</i>我的空间</router-link>
			    </el-dropdown-item>
			    <el-dropdown-item><i class="icon-exit">&nbsp;</i>退出</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
			
			<div class="pull-right notice-container">
				<button class="notice icon-bell3"></button>
			</div>

			<el-input placeholder="查找代码片" v-model="input5" style="width:400px;float:right;margin: 7px 15px 7px 0;" icon="search" @click="search()">
			</el-input>
		</div>
		<el-dialog :title="issignin?'登录':'注册'" v-model="dialogVisible" size="tiny">
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
			issignin: false,
			select: "3",
			input5: ""
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
		},
		search: function(){
			this.$router.push({path:'/search'});
			//this.$router.go('/search');
		}
	},
	components: {
		"signin": SignIn,
		"signup": SignUp
	}
}
</script>

<style type="text/css">
	.header {
		min-width: 920px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 50px;
		width: 100%;
		z-index: 100;
		position: fixed;
		background-color: var(--nav-bg-color, #41484d);
		border-bottom: 1px solid #eaeefb;
	}
	.header .el-dialog--tiny {
    	width: 300px;
	}
	.header .nav-login{

	}
	.header .nav-login button.el-button.el-button--text {
    	color: var(--color-white, #fff)!important;
	}
	.header .notice{
		background: none;
	    border: 0;
	    font-weight: normal;
	    line-height: 50px;
	    cursor: pointer;
	}
	.header .plus-container a{
		margin-right: 0!important;
		width: 50px;
		background: var(--btn-bg-color-primary, #ea7069);
    	color: var(--font-color-primary, #fff)!important;
	}
	.header .plus-container i{
		font-size: medium;
	}
	.header .notice:focus{
		outline: none;
	}
	.header .icon-home{
		
	}
	.el-dropdown{
		
	}
	.el-dropdown-img{
		width: 25px;
		height: 25px;
		vertical-align: middle;
		border-radius: 12.5px;
	}
	.header .nav{
		width: 100%;
		line-height: 50px;
		text-align: center;
	}
	.header .nav>span{
		overflow: hidden;
		height: 50px;
		transition: all .15s ease-in-out;
	}
	.header .nav>span>a{
		border-bottom: 5px solid var(--nav-hover-border-color, #ea7069);
		padding: 0 10px;
		transition: all .15s ease-in-out;
		height: 50px;
	}
	.header .nav>span>a:hover{
		color: var(--nav-hover-color, #ea7069);
		height: 45px;
	}
	.header .nav a, .header .nav span, .header .notice{
		color: var(--nav-color, #fff);
		font-size: 15px;
		float: left;
	}
	.header .el-dropdown{
		color: var(--bg-color, #FBFCFC)!important;
		font-size: 10px;
	    padding-right: 10px;
	}
	.header .nav .active a{
		color: var(--nav-hover-color, #ea7069);
	}
	.header .notice-container{
		padding-right: 10px;
	}
	.header .icon-steps{
		font-size: 30px!important;
	    line-height: 50px;
	    width: 50px;
	    color: var(--nav-logo-color, #ea7069)!important;
	    margin-right: 15px;
	}
	.logo{
		margin: 5px;
	}

	.logo img{
		height: 25px;
		width: 25px;
	}
</style>