<template>
	<div class="editor">
		<div class="sub-nav">
			<div class="breadcrumb-container">
		  		<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ path: '/user/1' }">用户</el-breadcrumb-item>
				  <el-breadcrumb-item>代码片添加</el-breadcrumb-item>
				</el-breadcrumb>
		  	</div>
		</div>
		<div class="flex-row-layout">
			<div class="left">
				<div class="form-container">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="标题" required>
							<el-col :span="24">
								<el-input v-model="form.title" placeholder="请用一句简短的话描述您即将添加的代码片"></el-input>
							</el-col>
					    </el-form-item>
					    <el-form-item label="代码" required style="position:relative;">
					    	<CodeEditor @init="codeEditorInit"></CodeEditor>
					    </el-form-item>
					    <el-form-item label="代码描述">
					    	<SmsMarkdown @input="inputCodeDescript" :mdtext="form.desc" :options="markdownOption"></SmsMarkdown>
					  	</el-form-item>
					  	<el-form-item>
					  		<el-checkbox v-model="form.isprivate">是否私有</el-checkbox>
					  		<el-checkbox v-model="form.allowcomment">允许评论</el-checkbox>
					  	</el-form-item>
					  	<el-form-item>
						    <el-button type="primary" @click="addSnipt">提交码片</el-button>
						    <!-- <el-button>重置</el-button> -->
					  	</el-form-item>
					</el-form>
				</div>
			</div>
			<div>
				<div class="right">
					<div class="tag-container">
						<el-form :label-position="labelPosition" label-width="80px" :model="form">
							<el-form-item label="标签">
							    <el-tag
							      type="gray" 
								  :key="tag"
								  v-for="tag in form.dynamicTags"
								  :closable="true"
								  :close-transition="false"
								  @close="handleClose(tag)"
								>
								{{tag}}
								</el-tag>
								<el-input
								  class="input-new-tag"
								  v-if="inputVisible"
								  v-model="inputValue"
								  ref="saveTagInput"
								  size="mini"
								  @keyup.enter.native="handleInputConfirm"
								  @blur="handleInputConfirm"
								>
								</el-input>
								<el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
							</el-form-item>
							<el-form-item label="属性">
								<articleProp foredit @init="propertiesInit"></articleProp>
							</el-form-item>
						</el-form>
					</div>
				</div>	
			</div>
		</div>	
	</div>
</template>
<script type="text/javascript">
	import ArticleProperties from 'components/code/ArticleProperties.vue'

	export default {
	    data () {
	      return {
	      	form: {
	          title: '',
	          resource: [],
	          desc: '我姥姥姓刘，在北京城也算是个大姓，我至今对祖上发生的一切一无所知也无从考据，只知上世纪三四十年代家道中落',//markdown格式的字符串
	          isprivate: false,
	          allowcomment: true,
	          dynamicTags: ['JAVA', '开源', 'private']
	        },
	        markdownOption:{
	        	showSubmit: false
	        },
	        inputVisible: false,
	        inputValue: '',
	        labelPosition: 'top',
	        codeEditor: null,
	        articleProperties: null
	      }
	    },
	    components: {
	      articleProp: ArticleProperties
	    },
		mounted: function(){
			
		},
		watch: {
			// aceeditorfullscreenclass(curVal, oldVal){
			// 	if(curVal === ''){
			// 		this.aceeditorheight = 300;
			// 	}else{
			// 		this.aceeditorheight = window.document.getElementById("aceeditor").clientHeight;
			// 		console.log(this.aceeditorheight);
			// 	}
			// }
		},
		updated: function(val){
			//console.log(this.edit.getOptions());
			//this.edit.resize();
		},
	    methods:{
	    	inputCodeDescript(editorVal){
	    		//console.log(editorVal);
	    		this.form.desc = editorVal;
	    	},
	        handleClose(tag) {
		        this.form.dynamicTags.splice(this.form.dynamicTags.indexOf(tag), 1);
		    },
		    showInput() {
		        this.inputVisible = true;
		        this.$nextTick(_ => {
		          this.$refs.saveTagInput.$refs.input.focus();
		        });
		    },
		    handleInputConfirm() {
		        let inputValue = this.inputValue;
		        if (inputValue) {
		          this.form.dynamicTags.push(inputValue);
		        }
		        this.inputVisible = false;
		        this.inputValue = '';
		    },
		    codeEditorInit(codeEditorInstance){
		    	//console.log(codeEditorInstance.aceeditorTabData);
		    	this.codeEditor = codeEditorInstance;
		    },
		    propertiesInit(propertiesInstance){
		    	//console.log(propertiesInstance.showDatas);
		    	this.articleProperties = propertiesInstance;
		    },
		    addSnipt(){
		    	this.form.resource = this.codeEditor.aceeditorTabData;
		    	this.form.properties = this.articleProperties.showDatas;
		    	console.log(this.form);
		    }
	    }
	  }
</script>
<style type="text/css">
	.editor{
		display: flex;
		flex-direction: column;
		*padding: 0 4.16667%;
		*padding-top: 50px;
	}
	.editor .sub-nav{
		background: var(--bg-color, #fbfcfc);
		padding: 0 50px;
		display: flex;
    	align-items: center;
		*border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.editor .flex-row-layout{
		padding: 0 50px;
	}
	.editor .left{
		flex: 1;
	}
	.editor .right{
		width: 300px;
	    *margin-top: 25px;
	    margin-left: 45px;
	    padding: 10px;
	    padding-top: 0;
	    *background: #Fff;
	    border-radius: 3px;
	    *border: 1px solid var(--border-color, #d4d9df);
	    *box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.editor .form-container{
		margin-top: 50px;
	}
	.editor .el-button--primary{
		background: var(--btn-bg-color-primary, #20a0ff);
    	border-color: var(--btn-border-color-primary, #20a0ff);
    	color: var(--btn-font-color-primary, #fff);
	}
	.editor .el-button--primary:hover{
		background: var(--btn-hover-bg-color-primary, #4db3ff);
		border-color: var(--btn-hover-border-color-primary, #4db3ff);
		color: #fff;
	}
	.editor .form-container .el-button--default:hover{
		border-color: var(--btn-border-color-primary, #20a0ff);
		color: var(--btn-hover-color-default, #ea7069);
	}
	.editor .is-checked .el-checkbox__inner{
		background-color: var(--chk-checked-bg-color, #20a0ff)!important;
    	border-color: var(--chk-hover-checked-bg-color, #ea7069)!important;
	}
	.editor .el-checkbox__inner:hover{
		border-color: var(--chk-hover-border-color, #ea7069)!important;
	}
	.editor .tag-container{
		margin-top: 50px;
	}
	.editor .tag-container .el-tag+.el-tag {
    	margin-left: 10px;
	}
	.editor .el-input__inner:focus{
		outline: 0;
    	border-color: #bfcbd9;
	}
</style>