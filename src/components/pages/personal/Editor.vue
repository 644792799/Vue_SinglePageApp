<template>
	<div class="editor">
		<el-row>
			<el-col :span="16" :offset="1">
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
					    	<el-input type="textarea" v-model="form.desc"></el-input>
					  	</el-form-item>
					  	<el-form-item>
					  		<el-checkbox v-model="isprivate">私有</el-checkbox>
					  	</el-form-item>
					  	<el-form-item>
						    <el-button type="primary">添加</el-button>
						    <el-button>重置</el-button>
					  	</el-form-item>
					</el-form>
				</div>
			</el-col>
			<el-col :span="6" class="right-container">

			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
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
	        isprivate: false
	      }
	    },
	    components: {
	      editor:require('vue2-ace-editor'),
	    },
	    methods:{
	        editorInit:function () {
	            require('vue2-ace-editor/node_modules/brace/mode/html');
	            require('vue2-ace-editor/node_modules/brace/mode/javascript');
	            require('vue2-ace-editor/node_modules/brace/mode/less');
	            require('vue2-ace-editor/node_modules/brace/theme/github');
	        }
	    }
	  }
</script>
<style type="text/css">
	.form-container{
		margin-top: 50px;
	}
</style>