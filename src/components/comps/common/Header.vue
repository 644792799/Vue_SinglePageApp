<template>
	<div class="header">
		<div class="nav">
			<div>
				<router-link to="/index" class="icon-steps"></router-link>
				<el-input placeholder="查找代码片" v-model="searchCondition" style="width:380px;" icon="search" @click="search()">
			</el-input>
			</div>
			<div>
				<div class="notice-container">
					<button class="notice icon-bell3"></button>
					<button class="notice icon-envelope-o"></button>
					<button class="notice icon-sign-in" @click="sign"></button>
				</div>
				<el-dropdown class="">
				  	<span class="el-dropdown-link">
				    	<img src="/static/img/头像示例2.jpg" class="el-dropdown-img">
				    	&nbsp;用户名<i class="el-icon-arrow-down el-icon--right"></i>
				  	</span>
				    <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item>
					    	<span  @click="tomyspace()">
					    		<i class="icon-profile">&nbsp;</i>我的空间
					    	</span>
					    	<!-- <router-link to="/user/1"><i class="icon-profile">&nbsp;</i>我的空间</router-link> -->
					    </el-dropdown-item>
					    <el-dropdown-item>
					    	<span  @click="tosetting()">
					    		<i class="icon-gear">&nbsp;</i>个人设置
					    	</span>
					    </el-dropdown-item>
					    <el-dropdown-item><i class="icon-sign-out">&nbsp;</i>退出</el-dropdown-item>
				    </el-dropdown-menu>
				</el-dropdown>
				<div class="plus-container">
					<router-link to="/user/1/snipt/1/editsnipt">
						<i class="icon-plus2"></i>
					</router-link>
				</div>
			</div>
			<!-- <span v-for="menu in menus" :class="menu.clas" @click="toggleClas(menu)">
		  		<router-link :to="menu.to"><i :class="menu.ico">&nbsp;</i>{{menu.name}}</router-link>
		  	</span> -->
		</div>
		<el-dialog v-model="dialogVisible" size="tiny" :show-close="false">
		  <sign></sign>
		</el-dialog>
	</div>
</template>

<script type="text/javascript">
	import SignIn from '../../pages/Sign/SignIn.vue'
	import SignUp from '../../pages/Sign/SignUp.vue'
	import Sign from '../../pages/Sign/Sign.vue'
	export default{
	data(){
		return {
			dialogVisible: false,
			issignin: false,
			select: "3",
			searchCondition: ""
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
		sign(){
			this.dialogVisible = true;
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
		},
		tomyspace(){
			//console.log(3333);
			this.$router.push({path:'/user/1'});
		},
		tosetting(){
			this.$router.push({path:'/setting'});
		}
	},
	components: {
		"signin": SignIn,
		"signup": SignUp,
		'sign': Sign
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
		z-index: 4;
		position: fixed;
		background-color: var(--nav-bg-color, #41484d);
		border-bottom: 1px solid #eaeefb;
		transition: height .6s ease-in-out;
	}
	.header .el-dialog--tiny {
    	width: 500px;
	}
	.header .el-dialog__header{
		display: none;
	}
	.header .el-dialog__body{
		padding: 0;
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
	    *height: 50px;
	    cursor: pointer;
	    font-size: 18px!important;
	}
	.header .plus-container{
		width: 50px;
	    height: 50px;
	    background: var(--btn-bg-color-primary, #ea7069);
	    display: flex;
	    align-items: center;
	    justify-content: center;
	}
	.header .plus-container a{
		*margin-right: 0!important;
		*width: 50px;
		*line-height: 50px;
		*background: var(--btn-bg-color-primary, #ea7069);
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
		height: 50px;
		text-align: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.header .nav .el-input__inner{
		border-color: #4e5359;
	    background: #41484d;
	    color: white;
	}
	.header .nav>div{
		display: flex;
	    justify-content: center;
	    align-items: center;
	    transition: all .15s ease-in-out;
	}
	.header .nav a, .header .nav span, .header .notice{
		color: var(--nav-color, #fff);
		font-size: 15px;
		*float: left;
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
		padding-right: 35px;
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