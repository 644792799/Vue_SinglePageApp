
<template>
  <div id="" class="">
  	<div class="col-md-3 leftmenu">
    	<ul class="nav nav-pills nav-stacked" role="tablist" >
		  <li role="presentation"  v-for="menu in menus" :class="menu.clas" @click="toggleClas(menu)">
		  	<router-link :to="menu.to">{{menu.name}}</router-link>
		  </li>
		</ul>
		
  	</div>
  	
  	<div class="col-md-9 content">
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
const menu = [{
	name: '组件一',
	to: '/first',
	clas: 'active'
},{
	name: '组件二',
	to: '/second',
	clas: ''
},{
	name: '组件四',
	to: '/commonstyle',
	clas: ''
},{
	name: '组件五',
	to: '/',
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
	}
}
</script>
<style type="text/css">
	html, body{
		height: 100%;
	}
	.leftmenu{
		border-right:1px solid #eee;
		*height:5000px;
		overflow-y:auto;
	}
	.content{
		overflow-y: scroll;
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