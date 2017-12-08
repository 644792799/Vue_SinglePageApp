
<template>
<!--   <div class="main vistor" v-if="login == false && vistor == false">
  	<signin :vistor="vistor"></signin>
  	<button @click="toexplore()">ddd</button>
  </div> -->
  <div id="" :class="mainclass">
  	<SmsBackToTop></SmsBackToTop>
  	<navbar></navbar>
  	<div class="content">
  		<leftmenu :menus="menus"></leftmenu>
  		<router-view class="routercontent" v-if="vistor == true"></router-view>
  		<welcome v-if="vistor == false">
			<el-button type="primary" @click="toexplore()">发现</el-button>
		</welcome>
  	</div>
  	<footerbar></footerbar>
  </div>
  
</template>

<script>
import Header from './components/comps/common/Header.vue'
import LeftMenu from './components/comps/common/LeftMenu.vue'
import Footer from './components/comps/common/Footer.vue'
import SignIn from './components/pages/Sign/SignIn.vue'
import Sign from './components/pages/Sign/Sign.vue'
import Welcome from './components/pages/main/Welcome.vue'

const menu = [
{
	name: '主页',
	to: '/index',
	clas: '',
	ico: 'icon-home4'
},
{
	name: '发现',
	to: '/explore',
	clas: '',
	ico: 'icon-globe3'
},
{
	name: '分类',
	to: '/categorized',
	clas: '',
	ico: 'icon-hash'
},
{
	name: '欢迎',
	to: '/mywelcome',
	clas: '',
	ico: 'icon-th-large'
},{
	name: '帮助',
	to: '/help',
	clas: '',
	ico: 'icon-book3'
},{
	name: '关于',
	to: '/about',
	clas: '',
	ico: 'icon-info2'
}];
export default{
	data(){
		return {
			menus: menu,
			login: false,
			vistor: false,
			mainclass: "main welcomecontainer"
		}
	},
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
		toexplore: function(){
			this.vistor = true;
			this.mainclass = "main";
		}
	}, 
	components: {
		"navbar": Header,
		"leftmenu": LeftMenu,
		"footerbar": Footer,
		"signin": SignIn,
		"sign": Sign,
		"welcome": Welcome
	}
}
</script>
<style type="text/css">
	html, body, .main{
		*height: 100%;
		*min-height: 100%;
	}
	.welcomecontainer, .welcomecontainer .content{
		height: 100%!important;
		overflow: hidden;
	}
	.welcomecontainer .content{
		padding-top: 0!important;
	}
	.welcomecontainer .header{
		height: 0!important;
		width: 0!important;
    	overflow: hidden!important;
	}
	.welcomecontainer .footer{
		height: 0!important;
		margin: 0!important;
		padding: 0!important;
		overflow: hidden!important;
	}
	.welcomecontainer .leftmenu{
		height: 0!important;
		width: 0!important;
	}
	.vistor{
		height: 100%;
		background: #fbfcfc;
		color: #fff;
		display:flex;
        justify-content:center;
        align-items:center;
	}
	.main {
		*max-width: 1140px;
	}
	.main .content{
		*overflow-y: auto;
		*height: 100%;
		padding-top:50px;
		margin: 0 auto;
		*max-width: 1500px;
		min-width: 1270px;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	.main .routercontent{
		flex: 1;
		margin-left: 250px;
		position: relative;
		*padding: 0 50px;
	}
	.nav-pills > li > a {
    	border-radius: 0px!important;
	}
	.fix-ver {
		display: block;
	    height: 100%;
	    width: 1px;
	    background: #eee;
	    position: fixed;
	    top: 0;
	    left: 25%;
	    margin: 0;
	}
	.col-md-3{
		padding-right: 0!important;
	}
</style>