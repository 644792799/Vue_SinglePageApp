<template>
	<div class="markdownhelp"><SmsPreview :mktext="mdtext"></SmsPreview></div>
</template>
<script type="text/javascript">
	export default {
	    data () {
	      return {
	      	mdtext: ''
	      }
	    },
	    components: {
	    },
	    mounted () {
	      var self = this;
	      var xhr = this.createXhr();
	      xhr.open('get', '/static/md/test.md');
	      xhr.onreadystatechange = function() {
	            if (xhr.readyState == 4) {
	                //状态接收完毕时，弹出内容字符串
	                self.mdtext = xhr.responseText;
	                //console.log(self.mdtext);
	            }
	       }
	       xhr.send(null);
	    },
	    methods: {
	    	createXhr : function(){
			    try{
			        return new XMLHttpRequest();
			    }catch(e){
			 
			    }
			    try{
			        return new ActiveXObject('Microsoft.XMLHTTP');
			    }catch(e){
			 
			    }
			    //alert("Ajax对象由于浏览器罕用而创建失败");
			}
	    }
	  }
</script>
<style type="text/css">
	
</style>