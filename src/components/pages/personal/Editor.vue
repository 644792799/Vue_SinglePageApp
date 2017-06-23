<template>
	<div class="editor">
		<el-row>
			<el-col :span="15" :offset="1">
				<div class="form-container">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="标题" required>
							<el-col :span="11">
								<el-input v-model="form.name" placeholder="请用一句简短的话描述您即将添加的代码片"></el-input>
							</el-col>
					    </el-form-item>
					    <el-form-item label="语言" required>
							<el-select class="select-language" v-model="languageSelectVal" filterable placeholder="请选择" @change="languageChange">
							    <el-option
							      v-for="item in options"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
						  	</el-select>
					    </el-form-item>
					    <el-form-item label="代码" required>
					    	<editor v-model="content" @init="editorInit" :lang="languageSelectVal" theme="github" width="100%" height="300"></editor>
					    	<div class="statusBar icon-edit2" id="statusBar"></div>
					    </el-form-item>
					    <el-form-item label="代码描述">
					    	<!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
					    	<SmsMarkdown></SmsMarkdown>
					  	</el-form-item>
					  	<el-form-item>
					  		<el-checkbox v-model="isprivate">是否私有</el-checkbox>
					  		<el-checkbox v-model="allowcomment">允许评论</el-checkbox>
					  	</el-form-item>
					  	<el-form-item>
						    <el-button type="primary">添加</el-button>
						    <el-button>重置</el-button>
					  	</el-form-item>
					</el-form>
				</div>
			</el-col>
			<el-col :span="6" :offset="1" class="">
				<div class="tag-container">
					<el-form :label-position="labelPosition" label-width="80px" :model="form">
						<el-form-item label="标签">
						    <el-tag
							  :key="tag"
							  v-for="tag in dynamicTags"
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
							<articleProp foredit></articleProp>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import Editor from 'vue2-ace-editor'
	import ArticleProperties from 'components/comps/article/ArticleProperties.vue'
	export default {
	    data () {
	      return {
	      	isdisable: false,
	      	content: 'function test(){}',
	      	form: {
	          name: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: ''
	        },
	        options: [{
		          value: 'java',
		          label: 'JAVA'
		        }, {
		          value: 'javascript',
		          label: 'JAVASCRIPT'
		        }, {
		          value: 'csharp',
		          label: 'C#'
		        }, {
		          value: 'html',
		          label: 'HTML'
		        }, {
		          value: 'css',
		          label: 'CSS'
		        }],
	        languageSelectVal: '',
	        isprivate: false,
	        allowcomment: true,
	        dynamicTags: ['JAVA', '开源', 'private'],
	        inputVisible: false,
	        inputValue: '',
	        labelPosition: 'top',
	        edit: ''
	      }
	    },
	    components: {
	      editor:Editor,//require('vue2-ace-editor'),
	      articleProp: ArticleProperties
	    },
		mounted: function(){
			require('vue2-ace-editor/node_modules/brace/ext/statusbar');
			var StatusBar = ace.acequire("ace/ext/statusbar").StatusBar;
			var statusBar = new StatusBar(this.edit, document.getElementById("statusBar"));
			//console.log(this.$route.params.user_id + "--" + this.$route.params.snipt_id);
			//console.log(this.edit);
		},
	    methods:{
	    	languageChange(){
	    		require('vue2-ace-editor/node_modules/brace/mode/' + this.languageSelectVal);
	    		this.edit.getSession().setMode('ace/mode/' + this.languageSelectVal);
	    		//console.log(this.content.toString());
	    	},
	        editorInit:function (edit) {
	        	require('vue2-ace-editor/node_modules/brace/ext/language_tools');
	        	require('vue2-ace-editor/node_modules/brace/ext/searchbox');
	        	edit.setOptions({
			        enableBasicAutocompletion: true,
			        enableSnippets: false,
			        enableLiveAutocompletion: true,
			        wrap: "free"
			    });
	        	this.edit = edit;
	            require('vue2-ace-editor/node_modules/brace/theme/github');
	        },
	        handleClose(tag) {
		        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
		          this.dynamicTags.push(inputValue);
		        }
		        this.inputVisible = false;
		        this.inputValue = '';
		      }
	    }
	  }
</script>
<style type="text/css">
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
	.editor .ace-github .ace_gutter {
	    background: var(--acegutter-bg-color, #fbfcfc);
	    color: var(--acegutter-color, #AAA);
	}
	.editor .ace-github{
		border: 1px solid var(--ace-theme-github-border-color, #d4d9df);
		border-radius: 4px;
	}
	.editor .tag-container{
		margin-top: 50px;
	}
	.editor .tag-container .el-tag+.el-tag {
    	margin-left: 10px;
	}
	.editor .select-language{
		width: 150px;
	}
	.editor .select-language .el-input{
		width: 100%;
	}
	.editor .statusBar{
		padding: 5px 2px;
		font-size: 12px;
	}
	.editor .ace_status-indicator{
		font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
		margin-left: 3px;
	}
</style>