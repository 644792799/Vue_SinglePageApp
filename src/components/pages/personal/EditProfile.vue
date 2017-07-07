<template>
	<div class="setting">
		<div>
			<div class="setting-nav">
				<div class="setting-nav-title">用户设置</div>
				<div class="setting-nav-item">
					<ul>
						<li v-for="ele in navdatas" :class="ele.active" @click="NavItemClick(ele)">
							<div style="display:flex;">
								<div class="icocontainer">
									<i :class="ele.ico">&nbsp;</i>
								</div>
								<div>{{ele.txt}}</div>
							</div>
							<div v-if="ele.active == 'active'">
								<i class="icon-chevron-right"></i>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="setting-detail">
			<div v-if="detailActiveIndex == 0">
				<basicsetting></basicsetting>
			</div>
			<div v-if="detailActiveIndex == 1">
				<personalsetting></personalsetting>
			</div>
			<div v-if="detailActiveIndex == 2">
				<accountsetting></accountsetting>
			</div>
			<div v-if="detailActiveIndex == 3">
				33333
			</div>
			<div v-if="detailActiveIndex == 4">
				33333
			</div>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	import BasicSetting from './settings/BasicSetting.vue'
	import PersonalSetting from './settings/PersonalSetting.vue'
	import AccountSetting from './settings/AccountSetting.vue'
	export default{
		data(){
			return{
				author: "cjay",
				detailActiveIndex: 0,
				navdatas: [
					{
						txt: '基本设置',
						ico: 'icon-laptop',
						active: 'active'
					},
					{
						txt: '个人资料',
						ico: 'icon-profile',
						active: ''
					},
					{
						txt: '账号密码',
						ico: 'icon-lock2',
						active: ''
					},
					{
						txt: '打赏设置',
						ico: 'icon-rmb',
						active: ''
					},
					{
						txt: '代码风格',
						ico: 'icon-dashboard',
						active: ''
					}
				]
			}
		},
		methods: {
			NavItemClick(ele){
				for (var i = 0; i < this.navdatas.length; i++) {
					if(this.navdatas[i].ico === ele.ico){
						this.navdatas[i].active = "active";
						this.detailActiveIndex = i;
					}else{
						this.navdatas[i].active = "";
					}
				}
			}
		},
		mounted: function(){
			//console.log(this.$route.params.user_id);
		},
	    components: {
	      "basicsetting": BasicSetting,
	      "personalsetting": PersonalSetting,
	      'accountsetting': AccountSetting
	    }
	}
</script>
<style type="text/css">
	.setting{
		display: flex;
		flex-direction: row;
		padding: 0 4.16667%;
		padding-top: 50px;
	}
	.setting .active{
		border-left: 2px solid #ea7069;
	}
	.setting .setting-nav{
		width: 200px;
		*height: 100px;
		margin-top: 25px;
		background: #Fff;
		border-radius: 3px;
		border: 1px solid var(--border-color, #d4d9df);
	}
	.setting .setting-nav .setting-nav-title{
		height: 35px;
		background: var(--bg-color, #fbfcfc);
		display: flex;
		align-items: center;
		padding-left: 10px;
		font-weight: 600;
		font-size: 16px;
	}
	.setting .setting-nav .setting-nav-item ul{
    	list-style: none;
    	padding-left: 0;
    	margin: 0;
	}
	.setting .setting-nav .setting-nav-item ul li{
		padding: 5px 10px;
		line-height: 1.78;
		border-top: 1px solid var(--border-color, #d4d9df);
		display: flex;
		flex-direction: row;
		cursor: pointer;
		*transition: all .15s ease-in-out;
		justify-content: space-between;
	}
	.setting .setting-nav .setting-nav-item ul li:hover{
		background: var(--bg-color, #fbfcfc);
	}
	.setting .setting-nav .setting-nav-item ul li .icocontainer{
		width: 25px;
	}
	.setting .setting-detail{
		flex: 1;
		margin-top: 25px;
		margin-left: 15px;
		padding: 10px; 
		background: #Fff;
		border-radius: 3px;
		border: 1px solid var(--border-color, #d4d9df);
	}
	.setting .setting-detail>div{

	}
</style>