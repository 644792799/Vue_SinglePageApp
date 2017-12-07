<template>
	<div class="sms-preview" v-html="mkhtml"></div>
</template>
<script type="text/javascript">
	import './css/smsmarkdownpreview.css'
	import hljs from 'pluginspath/highlight/highlight.pack.js'
	var marked = require('marked');
	marked.setOptions({
	    renderer: new marked.Renderer(),
	    gfm: true,
	    tables: true,
	    breaks: true,
	    pedantic: true,
	    sanitize: true,
	    smartLists: true,
	    smartypants: true,
	    highlight: function (code) {
	      return hljs.highlightAuto(code).value;
	    }
  	});
	export default {
		name: 'SmsPreview',
		props: ['mktext'],
		data(){
			return {
				mkhtml: ''
			}
		},
		mounted() {

		},
		methods: {
			mktextChange(){
				if(this.mktext){
					this.mkhtml = marked(this.mktext);
				}else{
					this.mkhtml = "";
				}
			}
		},
		watch:{
			'mktext' : 'mktextChange'
		}
	}
</script>
<style type="text/css">

</style>