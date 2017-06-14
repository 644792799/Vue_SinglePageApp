<template>
	<div class="article-properties">
		<div class="prop-add" v-if="foredit != undefined">
			<span>
				<el-select 
					v-model="kval"
					filterable  
					allow-create 
					placeholder="请选择" 
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
					placeholder="请选择">
					<el-option 
						v-for="val in currentValue" 
						:value="val" 
						:label="val"></el-option>
				</el-select>
			</span>
			<span>
				<el-button class="button-new-tag" size="small" @click="addProp">+</el-button>
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
				<span class="ps-del" v-if="foredit != undefined">
					<el-button class="button-new-tag" size="small" @click="deleteProp(data.key, data.value)">-</el-button>
				</span>
			</div>
			<div v-if="showDatas.length == 0" class="">
				<b>该代码片还未添加任何属性</b>
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
	  	props: ["foredit"],
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
	  			if(!this.isNullOrUndefined(this.vval) && !this.isNullOrUndefined(this.kval) ){
	  				var newprop = {
	  					key: this.kval,
	  					value: this.vval
	  				};
	  				console.log(newprop);
	  				this.showDatas.push(newprop);
	  			}
	  		},
	  		deleteProp: function(key, val){
	  			console.log(key  + ":" + val);
	  			var index = -999;
	  			for (var i = 0; i < this.showDatas.length; i++) {
	  				if(this.showDatas[i].key == key && this.showDatas[i].value == val){
	  					index = i;
	  					break;
	  				}
	  			}
	  			if(index != -999){
	  				this.showDatas.splice(index, 1);
	  			}
	  		},
	  		isNullOrUndefined: function(val){
	  			return val == undefined || val == null || val.length == 0 || this.trim(val) == "";
	  		},
	  		trim: function(str){ 
	  				console.log(str);
		　　     return str.replace(/(^\s*)|(\s*$)/g, "");
		　　 }
	  	}
	}
</script>
<style type="text/css">
	.article-properties .el-select .el-input {
    	width: 100%;
	}
	.article-properties .el-select {
    	width: 100px;
    	margin-bottom: 10px;
	}
	.article-properties .prop-add button{
		
	}
	.article-properties .prop-show{
		color: var(--default-color, #4E5359);
	}
	.article-properties .prop-show .prop-show-ele:hover .ps-key{
		border-color: var(--hover-border-color, #ea7069);
		border-left: 5px solid var(--hover-border-color, #ea7069);
		width: 92px;
	}
	.article-properties .prop-show .prop-show-ele:hover .ps-val{
		border-color: var(--hover-border-color, #ea7069);
	}
	.article-properties .prop-show .ps-key{
		width: 92px;
		text-align: right;
		display:-moz-inline-box;
		display:inline-block;
		position: relative;
		background: #fff;
		padding-right: 2px;
		border: 1px solid var(--border-color, #d4d9df);
		transition: all .25s ease-in-out;
		border-left: 5px solid var(--border-color, #d4d9df);
	}
	.article-properties .prop-show .ps-val{
		width: 96px;
		text-align: left;
		display:-moz-inline-box;
		display:inline-block;
		position: relative;
		background: #fff;
		padding-left: 2px;
		border: 1px solid var(--border-color, #d4d9df);
		transition: all .25s ease-in-out;
	}
	.article-properties .prop-show .ps-del button:hover{
		border: 1px solid var(--hover-border-color, #d4d9df);
		color: var(--hover-border-color, #d4d9df);
	}
	.article-properties .prop-show .prop-show-ele{
		margin-bottom: 3px;
	}
</style>