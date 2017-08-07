<template>
  <div :class="editorClass">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="编辑" name="edit" class="edit">
          <textarea v-model="preMark" id="txtarea"></textarea>
      </el-tab-pane>
      <el-tab-pane label="预览" name="review" class="review">
          <!-- <div v-html="postMark"></div> -->
          <SmsPreview :mktext="postMark"></SmsPreview>
      </el-tab-pane>
    </el-tabs>
    <div class="sms-markdown-tools" id="sms-markdown-tools">
      <el-popover 
        popper-class="sms-markdown-emoji" 
        ref="popoverEmoji"
        placement="bottom"
        width="350"
        :popper-options="{boundariesElement: 'sms-markdown-tools'}"
        trigger="click">
        <div v-for="e in emojis" @click="emoji(e)">{{e}}</div>
      </el-popover>
      <span class="icon-smile-o" v-popover:popoverEmoji></span>
      <span class="split"></span>
      <el-dropdown menu-align="start" @command="hx">
        <span class="icon-font">
          <i class="icon-angle-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="h1"><b>H1</b></el-dropdown-item>
          <el-dropdown-item command="h2"><b>H2</b></el-dropdown-item>
          <el-dropdown-item command="h3"><b>H3</b></el-dropdown-item>
          <el-dropdown-item command="h4"><b>H4</b></el-dropdown-item>
          <el-dropdown-item command="h5"><b>H5</b></el-dropdown-item>
          <el-dropdown-item command="h6"><b>H6</b></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="icon-bold" @click="bold"></span>
      <span class="icon-italic" @click="italic"></span>
      <span class="split"></span>
      <span class="icon-link2" @click="link"></span>
      <!-- <span class="icon-mention"></span> -->
      <span class="icon-quote" @click="quote"></span>
      <span class="icon-embed2" @click="code"></span>
      <span class="icon-terminal3" @click="codeblock"></span>
      <span class="split"></span>
      <span class="icon-list-ul" @click="listul"></span>
      <span class="icon-list-ol" @click="listol"></span>
      <span class="icon-minus" @click="hr"></span>
      <span class="split"></span>
      <span :class="fullscreenIcoClass" @click="togglefullscreen"></span>
    </div>
  </div>
</template>

<script>
  //import deal from '../deal.js'
  import CodeMirror from 'codemirror'
  import SimpleScrollbars from 'codemirror/addon/scroll/simplescrollbars.js'
  import hljs from 'pluginspath/highlight/highlight.pack.js'
  //import 'codemirror/mode/markdown/markdown.js'
  import 'codemirror/mode/gfm/gfm.js'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/addon/scroll/simplescrollbars.css'
  //import './css/smsmarkdown.min.css'
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
    name: 'SmsMarkdown',
    data(){
      return{
        preMark: exText,
        activeName: 'edit',
        postMark: '',
        cm: undefined,
        fullscreenIcoClass: 'icon-expand',
        editorClass: 'sms-markdown',
        editorFullscreen: false,
        emojis:[
          '😀', '😁', '😂', '🤣', '😃', '😄', '😐', '😆', '😅', '😭', 
          '🙂', '😊', '😉', '😎', '🤓', '😍', '😘', '😗', '😙', '😚',
          '🤗', '😇', '😛', '😜', '😋', '😝', '🤔', '😒', '😑', '😶',
          '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😩', '😫', '😪',
          '😴', '😌', '🙃', '😔', '🙁', '😲', '😕', '😖', '😞', '😟',
          '😦','😢','😧','😬','😨','😱','😓','😰','😷','🤒',
          '🤧','🤕','😵','🤢','🤤','😳','🤥','😤','😠','🤑',
          '🤠','🤡','😡','😈','👿','👹','👺','💀','👻','👽',
          '👾','🤖','💩','😺','😸','😹','😻','😼','😽','🙀',
          '😿','😾','🐱','👤','🐱','🐱','💻','🐱','🐉','🐱',
          '👓','🐱','🚀','🙈','🙉','🙊','🐵','🐶','🐺','🐱',
          '🦁','🐯','🦊','🐮','🐷','🐗','🐭','🐹','🐰','🐻',
          '🐨','🐼','🐸','🐴','🦄','🐔','🐲','🐽','🐾','🐩',
          '🦌','🦍','🦏','🐒','🐕','🐈','🐅','🐆','🐎','🐂',
          '🐃','🐄','🐖','🐏','🐑','🐐','🐪','🐫','🐘','🐁',
          '🐀','🐇','🦎','🐊','🐢','🐍','🐉','🦈','🐬','🦑',
          '🐳','🐋','🐟','🐠','🦐','🐡','🐙','🐚','🦀','🦅',
          '🦆','🦉','🦃','🐓','🐣','🐤','🐥','🐦','🐧','🦇',
          '🦋','🐌','🐛','🐜','🐝','🐞','🦂','👀','👅','👄',
          '👣','👤','👥','🗣'
        ]
      }
    },
    mounted(){
        var self = this;
        var myTextarea = document.getElementById("txtarea");
         this.cm = CodeMirror.fromTextArea(myTextarea, {
            mode: 'gfm',
            lineNumbers: false,
            theme: "paper",
            lineWrapping: true,
            //scrollbarStyle: 'simple'
          });
         this.cm.on("change", function(instance,changeObj){
            var editorVal = self.cm.getValue();
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
      // code(e){
      //   //e.preventDefault();
      //   var selectstr = this.editor.getSelection();
      //   this.editor.replaceSelection("`" + selectstr + "`");
      // },
      // quote(){
      //   var cm        = this.editor;
      //   var cursor    = cm.getCursor();
      //   var selection = cm.getSelection();

      //   if (cursor.ch !== 0)
      //   {
      //       cm.setCursor(cursor.line, 0);
      //       cm.replaceSelection("> " + selection);
      //       cm.setCursor(cursor.line, cursor.ch + 2);
      //   }
      //   else
      //   {
      //       cm.replaceSelection("> " + selection);
      //   }
      // },
      undo : function() {
          this.cm.undo();
      },
      
      redo : function() {
          this.cm.redo();
      },
      
      bold : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          cm.replaceSelection("**" + selection + "**");

          if(selection === "") {
              cm.setCursor(cursor.line, cursor.ch + 2);
          }
      },
      
      del : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          cm.replaceSelection("~~" + selection + "~~");

          if(selection === "") {
              cm.setCursor(cursor.line, cursor.ch + 2);
          }
      },

      italic : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          cm.replaceSelection("*" + selection + "*");

          if(selection === "") {
              cm.setCursor(cursor.line, cursor.ch + 1);
          }
      },

      quote : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if (cursor.ch !== 0)
          {
              cm.setCursor(cursor.line, 0);
              cm.replaceSelection("> " + selection);
              cm.setCursor(cursor.line, cursor.ch + 2);
          }
          else
          {
              cm.replaceSelection("> " + selection);
          }

          //cm.replaceSelection("> " + selection);
          //cm.setCursor(cursor.line, (selection === "") ? cursor.ch + 2 : cursor.ch + selection.length + 2);
      },
      
      ucfirst : function() {
          var cm         = this.cm;
          var selection  = cm.getSelection();
          var selections = cm.listSelections();

          cm.replaceSelection(editormd.firstUpperCase(selection));
          cm.setSelections(selections);
      },
      
      ucwords : function() {
          var cm         = this.cm;
          var selection  = cm.getSelection();
          var selections = cm.listSelections();

          cm.replaceSelection(editormd.wordsFirstUpperCase(selection));
          cm.setSelections(selections);
      },
      
      uppercase : function() {
          var cm         = this.cm;
          var selection  = cm.getSelection();
          var selections = cm.listSelections();

          cm.replaceSelection(selection.toUpperCase());
          cm.setSelections(selections);
      },
      
      lowercase : function() {
          var cm         = this.cm;
          var cursor     = cm.getCursor();
          var selection  = cm.getSelection();
          var selections = cm.listSelections();
          
          cm.replaceSelection(selection.toLowerCase());
          cm.setSelections(selections);
      },

      hx: function(command){
        switch(command){
          case 'h1':
            this.h1();
          break;
          case 'h2':
            this.h2();
          break;
          case 'h3':
            this.h3();
          break;
          case 'h4':
            this.h4();
          break;
          case 'h5':
            this.h5();
          break;
          case 'h6':
            this.h6();
          break;
        }
      },

      h1 : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if (cursor.ch !== 0)
          {
              cm.setCursor(cursor.line, 0);
              cm.replaceSelection("# " + selection);
              cm.setCursor(cursor.line, cursor.ch + 2);
          }
          else
          {
              cm.replaceSelection("# " + selection);
          }
      },

      h2 : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if (cursor.ch !== 0)
          {
              cm.setCursor(cursor.line, 0);
              cm.replaceSelection("## " + selection);
              cm.setCursor(cursor.line, cursor.ch + 3);
          }
          else
          {
              cm.replaceSelection("## " + selection);
          }
      },

      h3 : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if (cursor.ch !== 0)
          {
              cm.setCursor(cursor.line, 0);
              cm.replaceSelection("### " + selection);
              cm.setCursor(cursor.line, cursor.ch + 4);
          }
          else
          {
              cm.replaceSelection("### " + selection);
          }
      },

      h4 : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if (cursor.ch !== 0)
          {
              cm.setCursor(cursor.line, 0);
              cm.replaceSelection("#### " + selection);
              cm.setCursor(cursor.line, cursor.ch + 5);
          }
          else
          {
              cm.replaceSelection("#### " + selection);
          }
      },

      h5 : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if (cursor.ch !== 0)
          {
              cm.setCursor(cursor.line, 0);
              cm.replaceSelection("##### " + selection);
              cm.setCursor(cursor.line, cursor.ch + 6);
          }
          else
          {
              cm.replaceSelection("##### " + selection);
          }
      },

      h6 : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if (cursor.ch !== 0)
          {
              cm.setCursor(cursor.line, 0);
              cm.replaceSelection("###### " + selection);
              cm.setCursor(cursor.line, cursor.ch + 7);
          }
          else
          {
              cm.replaceSelection("###### " + selection);
          }
      },

      "listul" : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if (selection === "") 
          {
              cm.replaceSelection("- " + selection);
          } 
          else 
          {
              var selectionText = selection.split("\n");

              for (var i = 0, len = selectionText.length; i < len; i++) 
              {
                  selectionText[i] = (selectionText[i] === "") ? "" : "- " + selectionText[i];
              }

              cm.replaceSelection(selectionText.join("\n"));
          }
      },

      "listol" : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          if(selection === "") 
          {
              cm.replaceSelection("1. " + selection);
          }
          else
          {
              var selectionText = selection.split("\n");

              for (var i = 0, len = selectionText.length; i < len; i++) 
              {
                  selectionText[i] = (selectionText[i] === "") ? "" : (i+1) + ". " + selectionText[i];
              }

              cm.replaceSelection(selectionText.join("\n"));
          }
      },

      hr : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          cm.replaceSelection(((cursor.ch !== 0) ? "\n\n" : "\n") + "------------\n\n");
      },

      tex : function() {
          // if (!this.settings.tex)
          // {
          //     alert("settings.tex === false");
          //     return this;
          // }
          
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          cm.replaceSelection("$$" + selection + "$$");

          if(selection === "") {
              cm.setCursor(cursor.line, cursor.ch + 2);
          }
      },

      link : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();
          
          var title = (selection === "") ? "" : " \""+selection+"\"";

          cm.replaceSelection("[" + selection + "]("+title+")");

          if (selection === "") {
              cm.setCursor(cursor.line, cursor.ch + 1);
          }
          // this.executePlugin("linkDialog", "link-dialog/link-dialog");
      },

      "reference-link" : function() {
          // this.executePlugin("referenceLinkDialog", "reference-link-dialog/reference-link-dialog");
      },

      pagebreak : function() {
          if (!this.settings.pageBreak)
          {
              alert("settings.pageBreak === false");
              return this;
          }
          
          var cm        = this.cm;
          var selection = cm.getSelection();

          cm.replaceSelection("\r\n[========]\r\n");
      },

      image : function() {
          // this.executePlugin("imageDialog", "image-dialog/image-dialog");
      },
      
      code : function() {
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();

          cm.replaceSelection("`" + selection + "`");

          if (selection === "") {
              cm.setCursor(cursor.line, cursor.ch + 1);
          }
      },

      codeblock: function(){
          var cm        = this.cm;
          var cursor    = cm.getCursor();
          var selection = cm.getSelection();
          
          cm.replaceSelection(["```", selection, "```"].join("\n"));

          if (selection === "") {
              cm.setCursor(cursor.line, cursor.ch + 3);
          } 
      },

      "code-block" : function() {
          // this.executePlugin("codeBlockDialog", "code-block-dialog/code-block-dialog");            
      },

      "preformatted-text" : function() {
          // this.executePlugin("preformattedTextDialog", "preformatted-text-dialog/preformatted-text-dialog");
      },
      
      table : function() {
          // this.executePlugin("tableDialog", "table-dialog/table-dialog");         
      },
      
      datetime : function() {
          var cm        = this.cm;
          var selection = cm.getSelection();
          var date      = new Date();
          var langName  = this.settings.lang.name;
          var datefmt   = editormd.dateFormat() + " " + editormd.dateFormat((langName === "zh-cn" || langName === "zh-tw") ? "cn-week-day" : "week-day");

          cm.replaceSelection(datefmt);
      },
      
      emoji : function(emoji) {
          var cm        = this.cm;
          //var selection = cm.getSelection();
          //var cursor    = cm.getCursor();
          cm.replaceSelection(emoji);
          // if (selection === "") {
          //     cm.setCursor(cursor.line, cursor.ch + 1);
          // }
          // this.executePlugin("emojiDialog", "emoji-dialog/emoji-dialog");
      },
              
      "html-entities" : function() {
          // this.executePlugin("htmlEntitiesDialog", "html-entities-dialog/html-entities-dialog");
      },
              
      "goto-line" : function() {
          // this.executePlugin("gotoLineDialog", "goto-line-dialog/goto-line-dialog");
      },

      watch : function() {    
          // this[this.settings.watch ? "unwatch" : "watch"]();
      },

      preview : function() {
          // this.previewing();
      },

      togglefullscreen : function() {
          // this.fullscreen();
          if(this.editorFullscreen){
            this.editorClass = 'sms-markdown';
            this.editorFullscreen = false;
            this.fullscreenIcoClass = "icon-expand";
          }else{
            this.editorClass = "sms-markdown sms-markdown-fullscreen";
            this.editorFullscreen = true;
            this.fullscreenIcoClass = "icon-compress";
          }
      },

      clear : function() {
          // this.clear();
      },
      
      search : function() {
          // this.search();
      },

      help : function() {
          // this.executePlugin("helpDialog", "help-dialog/help-dialog");
      },

      info : function() {
          // this.showInfoDialog();
      }
    }
  };

  import Vue from 'vue'
  var exText = "";//"CodeMirror Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"

</script>
<style type="text/css">
  .sms-markdown{
    display: block;
    position: relative;
    border: 1px solid #d4d9df;
    border-radius: 4px;
    transition: all .2s cubic-bezier(.645,.045,.355,1);
  }
  .sms-markdown .CodeMirror{
    *font: 16px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    *font-size: 16px;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif, 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    border: 0;
  }
  .sms-markdown .sms-markdown-tools{
    position: absolute;
    top: 0;
    right: 15px;
    line-height: 42px;
  }
  .sms-markdown-emoji{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 280px;
    overflow-y: auto;
  }
  .sms-markdown-emoji>div{
    width: 35px;
    height: 30px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
  }
  .sms-markdown-emoji>div:hover{
    background: #d4d9df;
  }
  .sms-markdown .sms-markdown-tools span {
    font-size: 14px;
    line-height: 42px;
    margin-left: 8px;
    color: #586069;
    cursor: pointer;
  }
  .sms-markdown .sms-markdown-tools>span:hover, .sms-markdown .sms-markdown-tools>div:hover{
    color: var(--link-hover-color, #20a0ff);
  }
  .sms-markdown .sms-markdown-tools .split{
    border-right: 1px solid  var(--border-color, #d4d9df);
  }
  .sms-markdown .edit{
    *padding: 8px;
    *padding-right: 24px;
    *background: #fff;
  }
  .sms-markdown .review{
    min-height: 100px;
    padding: 8px;
    word-wrap:break-word ;
  }
  .sms-markdown .edit, .sms-markdown .review{
    display: block;
    position: relative;
    background: #fff;
    font-size: 16px;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif, 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
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
   /* line-height: 1.7;*/
  }
  .sms-markdown .CodeMirror-scroll{
    margin-right: 0;
  }

  .sms-markdown-fullscreen{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 101;
    background: #fff;
  }
  .sms-markdown-fullscreen .el-tabs{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .sms-markdown-fullscreen .el-tabs .el-tabs__content{
    overflow: auto!important;
    flex: 1;
  }
  .sms-markdown-fullscreen .CodeMirror{
    height: 100%!important;
  }

  .sms-markdown-fullscreen .CodeMirror-scroll{
    margin-right: -30px;
  }
</style>