<template>
	<div class="code-filter">
		<div class="filter-title">
			条件查找
			<SmsLine gradfrom="left"></SmsLine>
		</div>
		<div class="filter-content">
			<p>语言</p>
			<el-select 
				v-model="lan"
				filterable  
				allow-create 
				placeholder="请选择">
				<el-option 
					v-for="prop in languages" 
					:value="prop" 
					:label="prop">
				</el-option>
			</el-select>

			<p>操作系统</p>
			<el-select 
				v-model="sys"
				filterable  
				placeholder="请选择">
				<el-option 
					v-for="prop in system" 
					:value="prop" 
					:label="prop">
				</el-option>
			</el-select>

			<p>关键字</p>
			<el-input v-model="keyword" placeholder="请输入关键字"></el-input>
			<div class="filter-action">
				<el-button type="primary">查询</el-button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'CodeFilter',
		data(){
			return {
				lan: [],
				sys: [],
				keyword: '',
				languages: ["Java","Javascript","Csharp","C++","Vue"],
				system: ["windows", "mac os x", "linux"]
			}
		}
	}
</script>
<style type="text/css">
.code-filter{
	line-height: 1.5;
}
.code-filter .filter-action{
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}
.code-filter .filter-title{
	font-size: 14px;
	font-weight: 600;
	display: inline-block !important;
	position: relative;
	width: 100%;
	/*padding-left: 15px;
	padding-top: 15px;*/
	padding: 7px 0 7px 15px;
	background: var(--bg-color, #fbfcfc);
	color: var(--title-color, #4e5359);
}
.code-filter .filter-content{
	background: var(--bg-color-white, #fff);
	font-size: 14px;
	font-weight: 400;
	position: relative;
	*padding-left: 15px;
	color: var(--content-color, #4e5359);
}
.filter-content p{
	margin: 5px 0 5px 15px;
}
.filter-content .el-select{
	width: 100%;
}
.filter-content .el-select .el-input{
	width: 100%!important;
}
.filter-content .el-input input{
	border: 0;
}
.filter-content .el-button{
	*float: right;
    margin: 5px;
}
.filter-content .el-button--primary{
	background: var(--btn-bg-color-primary, #20a0ff);
	border-color: var(--btn-border-color-primary, #20a0ff);
	color: var(--btn-font-color-primary, #fff);
}
.filter-content .el-button--primary:hover{
	background: var(--btn-hover-bg-color-primary, #4db3ff);
	border-color: var(--btn-hover-border-color-primary, #4db3ff);
}
</style>