
<template>
  <div class="main vistor" v-if="login == false && vistor == false">
  	<signin :vistor="vistor"></signin>
  	<button @click="toexplore()">ddd</button>
  </div>
  <div id="" class="main" v-else>
  	<SmsBackToTop></SmsBackToTop>
  	<navbar :menus="menus"></navbar>
  	<router-view class="content"></router-view>
  	<footerbar></footerbar>
  </div>
  
</template>

<script>
import Header from './components/comps/common/Header.vue'
import Footer from './components/comps/common/Footer.vue'
import SignIn from './components/pages/Sign/SignIn.vue'
// {
// 	name: '主页',
// 	to: '/first',
// 	clas: 'active',
// 	ico: 'icon-home2'
// },

const menu = [
{
	name: '主页',
	to: '/index',
	clas: '',
	ico: 'icon-home4'
},
{
	name: '发现',
	to: '/index',
	clas: '',
	ico: 'icon-globe3'
},{
	name: '关于',
	to: '/commonstyle',
	clas: '',
	ico: 'icon-info2'
}];
export default{
	data(){
		return {
			menus: menu,
			login: false,
			vistor: false
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
		}
	}, 
	components: {
		"navbar": Header,
		"footerbar": Footer,
		"signin": SignIn
	}
}
</script>
<style type="text/css">
	html, body, .main{
		*height: 100%;
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
	.content{
		*overflow-y: auto;
		*height: 100%;
		padding-top:50px;
		margin: 0 auto;
		max-width: 1500px;
		min-width: 1140px;
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