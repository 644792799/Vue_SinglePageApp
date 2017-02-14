
<template>
  <div id="" class="main bs-c1">
  	<navbar :menus="menus"></navbar>
  	<div class="container">
  		<!-- <div class="col-md-3 leftmenu">
	    	<ul class="nav nav-pills nav-stacked" role="tablist" >
			  <li role="presentation"  v-for="menu in menus" :class="menu.clas" @click="toggleClas(menu)">
			  	<router-link :to="menu.to">{{menu.name}}</router-link>
			  </li>
			</ul>
			
	  	</div> -->
	  	
	  	<div class="col-md-12 content">
	  		<router-view></router-view>
	  	</div>
  	</div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

const menu = [{
	name: 'DEMO页',
	to: '/first',
	clas: 'active'
},{
	name: '发现',
	to: '/second',
	clas: ''
},{
	name: '关于',
	to: '/commonstyle',
	clas: ''
},{
	name: '组件五',
	to: '/article',
	clas: ''
}];
export default{
	data(){
		return {
			menus: menu
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
		}
	}, 
	components: {
		"navbar": Header
	}
}
</script>
<style type="text/css">
	html, body, .main{
		height: 100%;
	}
	.container{
		padding-top: 50px;
	}
	.leftmenu{
		border-right:1px solid #eee;
		height:100%;
		overflow-y:auto;
	}
	.content{
		overflow-y: auto;
		height: 100%
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