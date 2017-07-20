<template>
	<div class="editor">
		<!-- <el-row>
			<el-col :span="15" :offset="1"> -->
			<div class="left">
				<div class="form-container">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="标题" required>
							<el-col :span="11">
								<el-input v-model="form.name" placeholder="请用一句简短的话描述您即将添加的代码片"></el-input>
							</el-col>
					    </el-form-item>
					    <!-- <el-form-item label="语言" required>
							<el-select class="select-language" v-model="languageSelectVal" filterable placeholder="请选择" @change="languageChange">
							    <el-option
							      v-for="item in options"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
						  	</el-select>
					    </el-form-item> -->
					    <el-form-item label="代码" required style="position:relative;" :class="aceeditorfullscreenclass">
					    	<div :class="editorToolBarClass">
					    		
					    	</div>
					    	<div class="codeToolBar">
					    		<div class="acesetting">
					    			<div @click="toggleAceEditorToolBar">
					    				<i class="icon-gears"></i>
					    			</div>
					    			<div @click="toggleAceEditorFullScreen">
					    				<i :class="aceeditorfullscreenicoclass"></i>
					    			</div>
					    		</div>
					    		<el-select class="select-language" v-model="languageSelectVal" filterable placeholder="请选择语言" @change="languageChange">
								    <el-option
								      v-for="item in options"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
							  	</el-select>
					    	</div>
					    	<editor v-model="content" @init="editorInit" :lang="languageSelectVal" theme="github" width="inherit" height="300" :style="aceeditorstyle"></editor>
					    	<div class="statusBar icon-edit2" id="statusBar">
					    		<div class="pull-right ace_status-right">{{languageSelectVal}}</div>
					    	</div>
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
			</div>	
			<!-- </el-col>
			<el-col :span="6" :offset="1" class=""> -->
			<div>
				<div class="right">
					<div class="tag-container">
						<el-form :label-position="labelPosition" label-width="80px" :model="form">
							<el-form-item label="标签">
							    <el-tag
							      type="gray" 
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
				</div>	
			</div>
			<!-- </el-col>
		</el-row> -->
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
	        edit: '',
	        aceeditorstyle: 'margin-left:0px;',
	        editorToolBarClass: 'editorToolBar editorHide',
	        editorToolBarOpen: false,
	        aceeditorfullscreenclass: '',
	        aceeditorfullscreenicoclass: 'icon-expand'
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
			        wrap: "free",
			        showPrintMargin: false
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
		    },
		    toggleAceEditorToolBar() {
		    	if(this.editorToolBarOpen){
		    		this.editorToolBarClass= 'editorToolBar editorHide';
		    		this.aceeditorstyle = "margin-left: 0px;";
		    		this.editorToolBarOpen = false;
		    	}else{
		    		this.editorToolBarClass= 'editorToolBar';
		    		this.aceeditorstyle = "margin-left: 201px;";
		    		this.editorToolBarOpen = true;
		    	}
		    },
		    toggleAceEditorFullScreen() {
		    	if(this.aceeditorfullscreenclass == ''){
		    		this.aceeditorfullscreenclass = 'aceeditor-fullscreen';
		    		this.aceeditorfullscreenicoclass = 'icon-compress';
		    	}else{
		    		this.aceeditorfullscreenclass = '';
		    		this.aceeditorfullscreenicoclass = 'icon-expand';
		    	}
		    }
	    }
	  }
</script>
<style type="text/css">
	.editor{
		display: flex;
		flex-direction: row;
		padding: 0 4.16667%;
		padding-top: 50px;
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
		*border-radius: 4px;
		*border-bottom-left-radius: 0;
    	*border-bottom-right-radius: 0;
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
		*padding: 5px 5px;
		font-size: 12px;
		border: 1px solid var(--ace-theme-github-border-color, #d4d9df);
		border-top: 0;
		padding-left: 5px;
		line-height: 19px;
		border-bottom-left-radius: 4px;
    	border-bottom-right-radius: 4px;
    	background: var(--bg-color, #fbfcfc);
	}
	.editor .ace_status-indicator{
		font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
		margin-left: 3px;
		padding: 3px 5px 2px 5px;
	}
	.editor .ace_status-right{
		line-height: 19px;
	    border-left: 1px solid var(--ace-theme-github-border-color, #d4d9df);
	    padding: 0 10px 0 10px;
	    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
	    text-transform: uppercase;
	}
	.editor .codeToolBar{
		border: 1px solid var(--ace-theme-github-border-color, #d4d9df);
		border-bottom: 0;
		*padding-left: 5px;
		line-height: 19px;
		border-top-left-radius: 4px;
    	border-top-right-radius: 4px;

    	display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	    background: var(--bg-color, #fbfcfc);
	}
	.editor .codeToolBar .acesetting{
		*width: 40px;
	    height: 36px;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    cursor: pointer;
	    font-size: 17px;
	}
	.editor .codeToolBar .acesetting>div{
		width: 40px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.editor .codeToolBar .acesetting i{
		*margin: 0 10px;
	}
	.editor .codeToolBar .acesetting:hover{
		*background: var(--acegutter-bg-color, #fbfcfc);
    	*color: var(--acegutter-color, #AAA);
	}
	.editor .codeToolBar input{
		border: 0;
	    border-radius: 0;
	    *border-right: 1px solid var(--border-color);
	    background: var(--bg-color, #fbfcfc);
	}
	.editor .editorToolBar{
		position: absolute;
	    top: 37px;
	    bottom: 20px;
	    left: 0px;
	    width: 200px;
	    *z-index: 100;
	    background: var(--bg-color, #fff);
	    overflow-x: hidden;
	    overflow-y: auto;
	    border: 1px solid var(--ace-theme-github-border-color, #d4d9df);
	    transition: all .2s cubic-bezier(.645,.045,.355,1);
	}
	.editor .editorHide{
		width: 0px!important;
		border-right: 0!important;
		box-shadow: none!important;
	}
	.editor .ace_editor, .editor .el-form-item__content{
		transition: all .2s cubic-bezier(.645,.045,.355,1);
	}

	.editor .aceeditor-fullscreen .el-form-item__content{
		display: flex;
		flex-direction: column;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 100;
		margin: 0!important;
	}
	.editor .aceeditor-fullscreen .el-form-item__content .ace_editor{
		flex: 1;
	}
</style>