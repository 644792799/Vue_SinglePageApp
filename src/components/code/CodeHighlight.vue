<template>
	<div class="code-highlight">
		<div class="code-tools" v-if="isSimple != 'true'">
			<div class="code-tools-left">
				<span class="filename">15个实用的jQuery代码片.md</span>
				<span class="linecount">17行</span>
			</div>
			<div class="code-tools-center"></div>
			<div class="code-tools-right">
				<span class="origindata">
					<el-button-group>
						<el-button size="mini">复制代码</el-button>
						<el-button size="mini">原始数据</el-button>
					</el-button-group>
				</span>
			</div>
		</div>
		<div class="code-source">
			<pre lan="javascript" class="lan-mark"><code class="javascript">$(document).ready(function() {
			$('pre code').each(function(i, block) {
				hljs.highlightBlock(block);
			});
		});</code></pre>
		</div>
	</div>
</template>
<script type="text/javascript">
	import $ from 'jquery'
    import hljs from 'pluginspath/highlight/highlight.pack.js'

     export default {
	    data () {
	      return {
	      	
	      }
	    },
	    components: {
	      
	    },
	    mounted () {
	      hljs.initHighlightingOnLoad();
	      $(function () {
	        $('pre code').each(function (i, block) {
	          hljs.highlightBlock(block)
	        })
	      })
	    },
	    methods:{
	    	
	    },
	    props:['isSimple']
	  }
</script>
<style type="text/css">
	/*code tools*/
	.code-highlight .code-tools{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		border-bottom: 1px solid var(--border-color, #eaeefb);
		background: #eef1f6;
		font-size: 12px;
		padding: 0 5px;
		text-shadow: 0 1px 0 #fff;
		color: var(--content-color, #939c99);
	}

	.code-highlight .code-tools span{
		padding: 3px 0;
	}

	.code-highlight .code-tools-left{
		display: flex;
	}

	.code-highlight .code-tools-left span+span{
		border-left: 1px solid #d4d9df;
		margin-left: 10px;
		padding-left: 10px; 
	}


	/*code content*/
	.code-highlight .code-source{
		background-color: var(--code-bg-color, #F9FAFB)!important;
	}

	.code-highlight .code-source pre{
		background-color: var(--code-bg-color, #F9FAFB)!important;
	    border: 0!important;
	    margin: 0;
	    padding: 1em 24px;
	}

	.code-highlight .code-source .hljs{
		background-color: var(--code-bg-color, #F9FAFB)!important;
	}

	.code-highlight .code-source code{
		font-family: var(--code-font-family, Menlo,Monaco,Consolas,Courier,monospace);
	}
</style>