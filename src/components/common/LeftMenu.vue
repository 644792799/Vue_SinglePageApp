<template>
	<div class="leftmenu">
		<div class="addcode">
			<router-link to="/user/1/snipt/1/addsnipt">
				<el-button style="margin: 10px 5px">添加代码片<i class="el-icon-plus el-icon--right"></i></el-button>
			</router-link>
			<SmsLine gradfrom="center"></SmsLine>
		</div>
		<div class="menu">
			<ul>
				<li v-for="menu in menus" :class="menu.clas" @click="leftMenuClick(menu)">
					<i :class="menu.ico"></i> {{menu.name}}
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
			}
		},
		props: ['menus'],
		methods: {
			leftMenuClick(menu){
				this.$router.push({path:menu.to});

				for(var i = 0 ; i < this.menus.length ; i++){
				if(this.menus[i] == menu){
					this.menus[i].clas = "active";
				}else{
					this.menus[i].clas = "";
				}
			}
			}
		}
	};
</script>
<style type="text/css">
	.leftmenu{
		position: fixed;
		left: 0;
		bottom: 0;
		top: 50px;
		width: 250px;
		background: white;
		overflow: hidden;
		overflow-y: auto;
		z-index: 4;
		*padding: 10px 0;
		box-shadow: #e4e8f1 1px 0px 18px 0px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		*transition: height .6s ease-in-out;  
	}
	.leftmenu .addcode{
		position: relative;
		height: 58px;
    	width: 100%;
    	display: flex;
    	justify-content: center;
	}
	.leftmenu .addcode button{
		background: #ea7069;
	    border: 0;
	    color: white;
	}
	.leftmenu .menu{

	}
	.leftmenu .menu .active{
		color: var(--nav-hover-color, #ea7069);
		background: #fbfcfc;
		border-left: 5px solid var(--nav-hover-border-color, #ea7069);
	}
	.leftmenu .menu ul{
		list-style: none;
		padding: 0;
	}
	.leftmenu .menu ul li{
		padding: 10px 0 10px 40px;
		font-size: 18px;
		font-weight: 400;
		cursor: pointer;
		transition: border-color .25s ease-in-out;
		border-left: 5px solid white;
	}
	.leftmenu .menu ul li:hover{
		border-left: 5px solid var(--nav-hover-border-color, #ea7069);
		color: var(--nav-hover-color, #ea7069);
		background: #fbfcfc;
	}
	.leftmenu .menu ul li i{
		margin-right: 5px;
	}
</style>