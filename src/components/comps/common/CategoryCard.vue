<template>
	<div class="cat-card">
		<div class="cat-title">TOP 10编程语言<SmsLine gradfrom="left"></SmsLine></div>
		<div>
			<ul class="cat-list">
				<li v-for="cat in categoriesdata" :class="cat.isactive == null || cat.isactive == false?'':'active'">
					<a href="javascript:void(0);" @click="catSelect(cat.name)">
						<span>{{cat.name}}</span>
						<!-- <SmsPoint :label="cat.name"></SmsPoint> -->
						<span class="count" v-if="cat.isactive == null || cat.isactive == false">{{cat.count}}</span>
						<span class="count" v-else >
							X
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {}
		},
		props: ['categoriesdata'],
		mounted: function(){
			//console.log(this.categoriesdata)
		},
		methods: {
			catSelect: function(catName){
				for(var c in this.categoriesdata){
					if(this.categoriesdata[c].name == catName){
						if(this.categoriesdata[c].isactive){
							this.categoriesdata[c].isactive = false;
						}else{
							this.categoriesdata[c].isactive = true;
						}
					}else{
						this.categoriesdata[c].isactive = false;
					}
				}
			},
			catUnSelect: function(catName){
				for(var k in this.categoriesdata){
					if(this.categoriesdata[k].name == catName){
						this.categoriesdata[k].isactive = null;
						console.log(this.categoriesdata[k].isactive);
						break;
					}
				}
			}
		}
	}
</script>
<style type="text/css">
	.cat-title{
		font-size: 14px;
    	font-weight: 600;
    	display: inline-block !important;
    	position: relative;
    	width: 100%;
    	padding-left: 15px;
    	padding-top: 15px;
    	background: var(--bg-color, #fbfcfc);
	}
	.cat-card{
		*padding-top: 15px;
		*padding-left: 15px;
    	line-height: 1.5;
    	border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.cat-list{
		list-style-type: none;
		padding-left: 0;
	    margin-top: 0;
	    margin-bottom: 0;
	    font-size: 14px;
	}
	.cat-list .active{
		background: var(--bg-color, #fbfcfc);
		border-top: 1px solid var(--border-color,#d4d9df);
		border-bottom: 1px solid var(--border-color,#d4d9df);
	}
	.cat-list .active a{
		*color: var(--default-color, #4E5359);
	}
	.cat-list li:first-child{
		border-top: 0;
	}
	.cat-list li:last-child{
		border-bottom: 0;
	}
	.cat-list li{
		padding-left: 15px;
		border-radius: 0px;
	}
	.cat-list li:hover{
		text-decoration: none;
    	background-color: #eaecef;
    	border-radius: 0px;
	}
	.cat-list a{
		padding: 4px 10px;
	    margin: 0 0 2px;
	    font-size: 12px;

	    position: relative;
	    display: block;
	    overflow: hidden;
	    color: #586069;
	    text-decoration: none;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    cursor: pointer;
	}
	.cat-list .count{
		float: right;
    	font-weight: 600;
	}
</style>