<template>
  <div class="sms-markdown">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="编辑" name="edit" class="edit">
          <textarea v-model="preMark" id="txtarea"></textarea>
      </el-tab-pane>
      <el-tab-pane label="预览" name="review" class="review">
          <div v-html="postMark"></div>
      </el-tab-pane>
    </el-tabs>
    <div class="sms-markdown-tools" id="sms-markdown-tools">
      <span class="icon-link2"></span>
      <span class="icon-mention"></span>
      <span class="icon-quote"></span>
      <span class="icon-embed2" @click="code"></span>
      <span class="icon-question"></span>
    </div>
  </div>
</template>

<script>
  import deal from '../deal.js'
  import CodeMirror from 'codemirror'
  import SimpleScrollbars from 'codemirror/addon/scroll/simplescrollbars.js'
  import 'codemirror/addon/mode/overlay.js'
  import 'codemirror/mode/xml/xml.js'
  import 'codemirror/mode/markdown/markdown.js'
  import 'codemirror/mode/gfm/gfm.js'
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/mode/css/css.js'
  import 'codemirror/mode/htmlmixed/htmlmixed.js'
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/addon/scroll/simplescrollbars.css'
  import '../smsmarkdown.min.css'
  var marked = require('marked');
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: true,
    smartLists: true,
    smartypants: true
  });
  export default {
    name: 'SmsMarkdown',
    data(){
      return{
        preMark: exText,
        activeName: 'edit',
        postMark: '',
        editor: undefined
      }
    },
    mounted(){
        var self = this;
        var myTextarea = document.getElementById("txtarea");
         this.editor = CodeMirror.fromTextArea(myTextarea, {
            mode: 'text/x-markdown',
            lineNumbers: false,
            theme: "default",
            lineWrapping: true,
            scrollbarStyle: "simple"
          });
         this.editor.on("change", function(instance,changeObj){
            var editorVal = self.editor.getValue();
            self.preMark = editorVal;
         });
    },
    computed: {
      // postMark: function() {
      //   return marked(this.preMark)
      // }
    },
    methods: {
      handleClick(tab, event) {
        var mdtools = document.getElementById("sms-markdown-tools");
        if(this.activeName == "review"){
          this.addClass(mdtools, "hide");
          this.postMark = "等待预览......";
          var self=this; 
          setTimeout(function(){
            self.postMark = marked(self.preMark);;
          }, 1000);
        }else if(this.activeName == "edit"){
          this.removeClass(mdtools, "hide");
        }
      },
      hasClass(elem, cls) {
        cls = cls || '';
        if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
      },
      addClass(elem, cls) {
        if (!this.hasClass(elem, cls)) {
          elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
        }
      },
      removeClass(elem, cls) {
        if (this.hasClass(elem, cls)) {
          var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
          while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
      },
      code(e){
        //e.preventDefault();
        var selectstr = this.editor.getSelection();
        this.editor.replaceSelection("`" + selectstr + "`");
      }
    }
  };

  import Vue from 'vue'
  var exText = "CodeMirror Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"

</script>
<style type="text/css">
  .sms-markdown{
    display: block;
    position: relative;
    border: 1px solid #d4d9df;
    border-radius: 4px;
  }
  .sms-markdown .CodeMirror{
    font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  }
  .sms-markdown .sms-markdown-tools{
    position: absolute;
    top: 0;
    right: 15px;
    line-height: 42px;
  }
  .sms-markdown .sms-markdown-tools span {
    font-size: 20px;
    line-height: 42px;
    margin-left: 8px;
    color: #586069;
    cursor: pointer;
  }
  .sms-markdown .edit{
    *padding: 8px;
    *padding-right: 24px;
    background: #fff;
    
  }
  .sms-markdown .review{
    min-height: 100px;
    padding: 8px;
    word-wrap:break-word ;
  }
  .sms-markdown .edit, .sms-markdown .review{
    display: block;
    position: relative;
  }
  .sms-markdown .edit textarea{
    display: block;
    width: 100%;
    min-height: 100px;
    max-height: 500px;
    resize: vertical;
    padding: 8px;
    border: 0;
    overflow: auto;
    background-color: #fbfcfc;
    border: 1px solid #d4d9df;
    border-radius: 4px;
  }
   .sms-markdown .edit textarea:focus{
      background-color: #fff;
   }
  .sms-markdown .el-tabs__content {
    box-shadow: none!important;
  }
  .sms-markdown .el-tab-pane{
    line-height: 1!important;
  }
</style>