<template>
	<div class="editor">
		<el-row>
			<el-col :span="15" :offset="1">
				<div class="form-container">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="标题" required>
							<el-col :span="11">
								<el-input v-model="form.name"></el-input>
							</el-col>
					    </el-form-item>
					    <el-form-item label="语言" required>
							<el-select v-model="value8" filterable placeholder="请选择">
							    <el-option
							      v-for="item in options"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
						  	</el-select>
					    </el-form-item>
					    <el-form-item label="代码" required>
					    	<editor v-model="content" @init="editorInit();" lang="javascript" theme="github" width="100%" height="300"></editor>
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
							<articleProp></articleProp>
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
		          value: '选项1',
		          label: 'JAVA'
		        }, {
		          value: '选项2',
		          label: 'JAVASCRIPT'
		        }, {
		          value: '选项3',
		          label: 'C#'
		        }, {
		          value: '选项4',
		          label: 'HTML'
		        }, {
		          value: '选项5',
		          label: 'CSS'
		        }],
	        value8: '',
	        isprivate: false,
	        allowcomment: true,
	        dynamicTags: ['JAVA', '开源', 'private'],
	        inputVisible: false,
	        inputValue: '',
	        labelPosition: 'top'
	      }
	    },
	    components: {
	      editor:Editor,//require('vue2-ace-editor'),
	      articleProp: ArticleProperties
	    },
	    methods:{
	        editorInit:function () {
	            require('vue2-ace-editor/node_modules/brace/mode/html');
	            require('vue2-ace-editor/node_modules/brace/mode/javascript');
	            require('vue2-ace-editor/node_modules/brace/mode/less');
	            require('vue2-ace-editor/node_modules/brace/theme/github');

	            //Editor.setTheme("ace/theme/twilight");
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
	.form-container{
		margin-top: 50px;
	}

	.editor .ace-github .ace_gutter {
	    background: #fbfcfc;
	    color: #AAA;
	}
	.editor .ace-github{
		border: 1px solid #d4d9df;
		border-radius: 4px;
	}
	.editor .tag-container{
		margin-top: 50px;
	}
	.editor .tag-container .el-tag+.el-tag {
    	margin-left: 10px;
	}
</style>