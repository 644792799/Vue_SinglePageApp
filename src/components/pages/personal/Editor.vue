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
					    		<div>
					    			<div>主题</div>
					    			<el-select class="select-theme" v-model="themeSelectVal" filterable placeholder="请选择主题" @change="themeChange">
									    <el-option
									      v-for="item in themes"
									      :label="item"
									      :value="item">
									    </el-option>
								  	</el-select>
								  	<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>字体</div>
					    			<div>
					    				<el-input-number v-model="fontsize" :step="1" :min="10" :max="24" size="small" @change="fontsizeChange"></el-input-number>
					    			</div>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>行号</div>
					    			<el-switch
									  v-model="editoroptions.showgutter"
									  on-text=""
									  off-text="" @change="showGutterChange">
									</el-switch>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>自动换行</div>
					    			<el-switch
									  v-model="editoroptions.softwrap"
									  on-text=""
									  off-text="" @change="softwrapChange">
									</el-switch>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>整行选择</div>
					    			<el-switch
									  v-model="editoroptions.fulllineselect"
									  on-text=""
									  off-text="" @change="fulllineselectChange">
									</el-switch>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>当前行高亮</div>
					    			<el-switch
									  v-model="editoroptions.activelinehighlight"
									  on-text=""
									  off-text="" @change="activelineselectChange">
									</el-switch>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>打印线</div>
					    			<el-switch
									  v-model="editoroptions.showprintmargin"
									  on-text=""
									  off-text="" @change="printMarginChange">
									</el-switch>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>控制符</div>
					    			<el-switch
									  v-model="editoroptions.showinvisible"
									  on-text=""
									  off-text="" @change="showInvisibleChange">
									</el-switch>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>TAB宽度</div>
					    			<el-radio-group v-model="editoroptions.tabsize" @change="tabSizeChange" size="small">
									    <el-radio-button label="2"></el-radio-button>
									    <el-radio-button label="3"></el-radio-button>
									    <el-radio-button label="4"></el-radio-button>
									    <el-radio-button label="5"></el-radio-button>
									</el-radio-group>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>使用软TAB</div>
					    			<el-switch
									  v-model="editoroptions.usesofttab"
									  on-text=""
									  off-text="" @change="usesofttabChange">
									</el-switch>
					    			<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    		<div>
					    			<div>快捷键</div>
					    			<el-select class="select-keybindding" v-model="editoroptions.keybinding" filterable placeholder="请选择光标样式" @change="keyBindingChange">
									    <el-option
									      v-for="item in editoroptions.keybindingdata"
									      :label="item"
									      :value="item">
									    </el-option>
								  	</el-select>
								  	<SmsLine gradfrom='all'></SmsLine>
					    		</div>
					    	</div>
					    	<div class="codeToolBar">
					    		<div class="acesetting">
					    			<div @click="toggleAceEditorToolBar">
					    				<i class="icon-gears"></i>
					    			</div>
					    			<!-- <div @click="toggleAceEditorFullScreen">
					    				<i :class="aceeditorfullscreenicoclass"></i>
					    			</div> -->
					    		</div>
					    		<div class="acesettingright">
					    			<div>
					    				<span>文件名</span>
										<el-input v-model="filename" class="ipt-filename" placeholder="如：Xxx.java"></el-input>
									</div>
									<div>
										<span>语言</span>
								    	<el-select class="select-language" v-model="languageSelectVal" filterable placeholder="请选择语言" @change="languageChange">
											    <el-option
											      v-for="item in options"
											      :label="item.label"
											      :value="item.value">
											    </el-option>
										 </el-select>
									</div>

								  	<div @click="toggleAceEditorFullScreen">
					    				<i :class="aceeditorfullscreenicoclass"></i>
					    			</div>
							  	</div>
					    	</div>
					    	<div class="aceeditorTabContainer">
					    		<ul class="aceeditorTabs">
					    			<li v-for="d in aceeditorTabData" :class="d.isactive==true?'active':''" @click="aceeditorTabClick(d)">
					    				<a href="#">{{d.filename}}</a>
					    			</li>
					    		</ul>
					    		<!-- <div :class="d.isactive==true?'aceeditorTab active':'aceeditorTab'" v-for="d in aceeditorTabData" @click="aceeditorTabClick(d)">
					    			<div class="aceeditorTabBox">
					    				<div>{{d.filename}}</div>
					    			</div>
					    		</div> -->
					    	</div>
					    	<editor id="aceeditor" v-model="content" @init="editorInit" :lang="languageSelectVal" theme="github" width="inherit" :height="aceeditorheight" :style="aceeditorstyle" @input="editorInput"></editor>
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
		</div>	
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
		    themes: [
		    	'ambiance','chrome','eclipse','github','tomorrow','twilight','xcode'
		    ],
		    themeSelectVal: '',    
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
	        aceeditorfullscreenicoclass: 'icon-expand',
	        aceeditorheight: 300,
	        fontsize: 12,
	        editoroptions: {
	        	fulllineselect: true,
	        	activelinehighlight: true,
	        	showprintmargin: false,
	        	tabsize: 4,
	        	keybinding: '',
	        	keybindingdata: ['ace', 'vim', 'emacs', 'custom'],
	        	keybindings: {},
	        	softwrap: true,
	        	showinvisible: false,
	        	showgutter: true,
	        	usesofttab: true
	        },
	        filename:'',
	        aceeditorTabData: [
	        	{
	        		filename: "a.java",
	        		isactive: true,
	        		token: 1,
	        		content: 'function test(){alert(111);}'
	        	},
	        	{
	        		filename: "b.java",
	        		isactive: false,
	        		token: 2,
	        		content: 'function test(){alert(222);}'
	        	},
	        	{
	        		filename: "c.java",
	        		isactive: false,
	        		token: 3,
	        		content: 'function test(){alert(333);}'
	        	}
	        ]
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
			//console.log(111111);
			var ema = require('vue2-ace-editor/node_modules/brace/keybinding/emacs');
    		var vim = require('vue2-ace-editor/node_modules/brace/keybinding/vim');
    		var HashHandler = ace.acequire("ace/keyboard/hash_handler").HashHandler;
    		this.editoroptions.keybindings = {
			    ace: null, // Null = use "default" keymapping
			    vim: 'ace/keyboard/vim',
			    emacs: "ace/keyboard/emacs",
			    custom: new HashHandler({
			        "gotoright":      "Tab",
			        "indent":         "]",
			        "outdent":        "[",
			        "gotolinestart":  "^",
			        "gotolineend":    "$"
			    })
			};
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
			this.edit.resize();
		},
	    methods:{
	    	aceeditorTabClick(e){
	    		var that = this;
	    		this.aceeditorTabData.forEach(function(d, index, arr){
	    			if(d.token == e.token){
	    				d.isactive = true;
	    				that.content = d.content;
	    			}else{
	    				d.isactive = false;
	    			}
	    		});
	    	},
	    	languageChange(){
	    		require('vue2-ace-editor/node_modules/brace/mode/' + this.languageSelectVal);
	    		this.edit.getSession().setMode('ace/mode/' + this.languageSelectVal);
	    		//console.log(this.content.toString());
	    	},
	    	themeChange(){
	    		require('vue2-ace-editor/node_modules/brace/theme/'+this.themeSelectVal);
	    		this.edit.setTheme('ace/theme/' + this.themeSelectVal);
	    	},
	    	fontsizeChange(){
	    		//document.getElementById('aceeditor').style.fontSize=this.fontsize + 'px';
	    		this.edit.setFontSize(this.fontsize);
	    	},
	    	fulllineselectChange(){
	    		this.edit.setOption("selectionStyle", this.editoroptions.fulllineselect ? "line" : "text");
	    	},
	    	activelineselectChange(){
	    		this.edit.setHighlightActiveLine(this.editoroptions.activelinehighlight);
	    	},
	    	printMarginChange(){
	    		this.edit.setShowPrintMargin(this.editoroptions.showprintmargin);
	    	},
	    	tabSizeChange(){
	    		this.edit.getSession().setTabSize(this.editoroptions.tabsize);
	    	},
	    	keyBindingChange(){
	    		//console.log(this.editoroptions.keybinding);
	    		this.edit.setKeyboardHandler(this.editoroptions.keybindings[this.editoroptions.keybinding]);
	    	},
	    	softwrapChange(){
	    		if(this.editoroptions.softwrap){
	    			this.edit.setOption("wrap", "80");
	    		}else{
	    			this.edit.setOption("wrap", "off");
	    		}
	    	},
	    	showInvisibleChange(){
	    		this.edit.setShowInvisibles(this.editoroptions.showinvisible);
	    	},
	    	showGutterChange(){
	    		this.edit.renderer.setShowGutter(this.editoroptions.showgutter);
	    	},
	    	usesofttabChange(){
	    		this.edit.session.setUseSoftTabs(this.editoroptions.usesofttab);
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
	        editorInput: function(content){
	        	this.aceeditorTabData.forEach(function(d, index, arr){
	    			if(d.isactive){
	    				d.content = content;
	    			}
	    			return;
	    		});
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
		    		this.aceeditorstyle = "margin-left: 251px;";
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
	.editor .ace-github .ace_gutter {
	    background: var(--acegutter-bg-color, #fbfcfc);
	    color: var(--acegutter-color, #AAA);
	    z-index: 2;
	}
	.editor .ace_editor{
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
		width: 120px;
	}
	.editor .select-language .el-input{
		width: 100%;
	}
	.editor .ipt-filename{
		width: 110px;
	}
	.editor .select-theme, .editor .select-keybindding{
		width: 150px;
	}
	.editor .select-theme .el-input, 
	.editor .select-keybindding .el-input{
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
	    background: var(--banner-color, #eef1f6);
	}
	.editor .codeToolBar .acesetting{
		*width: 40px;
	    height: 36px;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    cursor: pointer;
	    font-size: 14px;
	    color: #586069;
	}
	.editor .codeToolBar .acesettingright{
		height: 36px;
		display: flex;
	    align-items: center;
	    justify-content: center;
	    cursor: pointer;
	    font-size: 14px;
	    color: #586069;
	}
	.editor .codeToolBar .acesettingright>div:last-child{
		width: 40px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.editor .codeToolBar .acesetting>div{
		width: 40px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.editor .codeToolBar .acesetting>div:hover,
	.editor .codeToolBar .acesettingright>div:last-child:hover{
		color: var(--color-red, #ea7069);
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
	    background: var(--banner-color, #eef1f6);
	}
	.editor .editorToolBar{
		position: absolute;
	    top: 73px;
	    bottom: 20px;
	    left: 0px;
	    width: 250px;
	    *z-index: 100;
	    background: var(--bg-color, #fff);
	    overflow-x: hidden;
	    overflow-y: auto;
	    border: 1px solid var(--ace-theme-github-border-color, #d4d9df);
	    transition: all .2s cubic-bezier(.645,.045,.355,1);
	}
	.editor .editorToolBar>div{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 2px 10px;
    	background: #fff;
    	font-size: 12px;
    	position: relative;
   	}
	.editor .editorToolBar .el-select input{
		border: 0;
    	border-radius: 0;
	}
	.editor .editorToolBar .el-input-number{
		display: flex!important;
	}
	.editor .editorHide{
		width: 0px!important;
		border-right: 0!important;
		box-shadow: none!important;
	}
	.editor .ace_editor, .editor .el-form-item__content{
		transition: all .2s cubic-bezier(.645,.045,.355,1);
	}
	.editor .ace_editor{
		clear: both;
	}
	.editor .ace_editor .ace_gutter{
		z-index: 3!important;
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
	.editor .el-input__inner:focus{
		outline: 0;
    	border-color: #bfcbd9;
	}

	.editor .aceeditorTabContainer{
		margin: 0;
		padding: 0;
		max-height: 35px;
		background: var(--bg-color, #fbfcfc);
		border: 1px solid var(--ace-theme-github-border-color, #d4d9df);
    	border-bottom: 0;
    	overflow: hidden;
	}
	.editor .aceeditorTabContainer .clearfix:before,
	.editor .aceeditorTabContainer .clearfix:after{
		content: ""; 
		display: table;
	}
	.editor .aceeditorTabContainer .clearfix:after{
		clear: both;
	}
	.editor .aceeditorTabContainer .clearfix{
		zoom: 1;
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs{
		margin: 0;
	  	list-style-type : none;
	  	line-height : 35px;
	  	max-height: 35px;
	  	overflow: hidden;
	  	display: inline-block;
	  	padding-right: 20px
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs > li{
		float : left;
	  	margin : 5px -10px 0;
	  	border-top-right-radius: 25px 170px;
	  	border-top-left-radius: 20px 90px;
	  	padding : 0 30px 0 25px;
	  	height: 170px;
	  	background: var(--banner-color, #eef1f6);
	  	position : relative;
	  	*box-shadow: 0 10px 20px rgba(0,0,0,.5);
	  	max-width : 200px;
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs > li:before,
	.editor .aceeditorTabContainer ul.aceeditorTabs > li:after{
		content : '';
	  	background : transparent;
	  	height: 20px;
	  	width: 20px;
	  	border-radius: 100%;
	  	border-width: 10px;
	  	top: 0px;
	  	border-style : solid;
	  	position : absolute;
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs > li:before{
		border-color : transparent var(--banner-color, #eef1f6) transparent transparent;
	  	-webkit-transform : rotate(48deg);
	  	left: -23px;
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs > li:after{
		border-color : transparent transparent transparent var(--banner-color, #eef1f6);
  		-webkit-transform : rotate(-48deg);
  		right: -17px;
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs > li > a{
		display: inline-block;
	  	max-width:100%;
	  	overflow: hidden;
	  	text-overflow: ellipsis;
	  	text-decoration: none;
	  	color: #222;
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs > li.active{
		z-index: 3;
		background: #d4d9df;
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs > li.active:before{
		border-color : transparent #d4d9df transparent transparent;
	}
	.editor .aceeditorTabContainer ul.aceeditorTabs > li.active:after{
		border-color : transparent transparent transparent #d4d9df;
	}
	/*.editor .aceeditorTabs .aceeditorTab{
		width: 110px;
	  	height: 30px;
	  	overflow: hidden;
	  	float: left;
	  	margin: 0 -20px 0 0;
	  	cursor: default;
	}
	.editor .aceeditorTabs .aceeditorTab.active{
		z-index: 3;
		position: relative;
		padding-bottom: 1px;
	}
	.editor .aceeditorTabs .aceeditorTab.active .aceeditorTabBox{
		background: var(--banner-color, #eef1f6);
		box-shadow: 0 0 2px 0 #fff inset;
	}
	.editor .aceeditorTabs .aceeditorTab .aceeditorTabBox{
		height: 35px;
	  	background: #fbfcfc;
	  	text-align: center;
	  	border-radius: 4px;
	  	border: 1px solid #ccc;
	  	margin: 0 10px 0;
	  	box-shadow: 0 0 2px  #fff inset;
	  	-webkit-transform: perspective(100px) rotateX(30deg);
	  	-moz-transform: perspective(100px) rotateX(30deg);
	}*/
</style>