<template>
	<div class="article-properties">
		<div class="prop-add">
			<span>
				<el-select 
					v-model="kval"
					filterable  
					allow-create 
					placeholder="y" 
					@change="propertyChange">
					<el-option 
						v-for="prop in propDatas" 
						:value="prop.key" 
						:label="prop.key">
					</el-option>
				</el-select>
			</span>
			<span>
				<el-select 
					v-model="vval"  
					filterable  
					allow-create 
					placeholder="y">
					<el-option 
						v-for="val in currentValue" 
						:value="val" 
						:label="val"></el-option>
				</el-select>
			</span>
			<span>
				<el-button class="button-new-tag" size="small" @click="">+</el-button>
			</span>
		</div>
		<div class="prop-show">
			<div v-for="data in showDatas" class="prop-show-ele">
				<span class="ps-key">
					<b>{{data.key}}</b>
				</span>
				<span class="ps-val">
					{{data.value}}
				</span>
				<span>
					<el-button class="button-new-tag" size="small" @click="">-</el-button>
				</span>
			</div>
			
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	    data () {
	      return {
	      	propDatas: [
	      		{
	      			key: "Language",
	      			value: [
	      				"Java","Javascript","Csharp","C++","Vue"
	      			]
	      		},
	      		{
	      			key: ".NETFramework",
	      			value: [
	      				"4.5","4.0","3.5","3.0","2.0"
	      			]
	      		}
	      	],
	      	currentValue: [],
	      	vval: [],
	      	kval: [],
	      	showDatas: [
	      		{
	      			key: 'Language',
	      			value: 'Java'
	      		},
	      		{
	      			key: 'License',
	      			value: 'MIT'
	      		}
	      	]
	      }
	  	},
	  	props: [],
	  	methods:{
	  		propertyChange: function(e){
	  			this.currentValue = [];
	  			this.vval = [];
	  			var currentKey = this.kval;
	  			for (var i = 0; i < this.propDatas.length; i++) {
	  				if(this.propDatas[i].key == currentKey){
	  					this.currentValue = this.propDatas[i].value;
	  					break;
	  				}
	  			}
	  			//this.vval = [];
	  		},
	  		addProp: function(){

	  		},
	  		deleteProp: function(){
	  			
	  		}
	  	}
	}
</script>
<style type="text/css">
	.article-properties .el-select .el-input {
    	width: 100%;
	}
	.article-properties .el-select {
    	width: 80px;
    	margin-bottom: 10px;
	}
	.article-properties .prop-add button{
		*width: 25px;
	}
	.article-properties .prop-show .ps-key{
		width: 80px;
		text-align: right;
		display:-moz-inline-box;
		display:inline-block;
		position: relative;
		background: #20a0ff;
		padding-right: 2px;
	}
	.article-properties .prop-show .ps-val{
		width: 80px;
		text-align: left;
		display:-moz-inline-box;
		display:inline-block;
		position: relative;
		background: #20a0ff;
		padding-left: 2px;
	}

	.article-properties .prop-show .prop-show-ele{
		margin-bottom: 3px;
	}
</style>