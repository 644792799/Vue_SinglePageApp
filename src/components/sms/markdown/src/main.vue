<template>
  <div class="sms-markdown">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="编辑" name="edit" class="edit">
          <textarea v-model="preMark"></textarea>
      </el-tab-pane>
      <el-tab-pane label="预览" name="review" class="review">
          <div v-html="postMark"></div>
      </el-tab-pane>
    </el-tabs>
    <div class="sms-markdown-tools" id="sms-markdown-tools">
      <span class="icon-link2"></span>
      <span class="icon-mention"></span>
      <span class="icon-quote"></span>
      <span class="icon-embed2"></span>
      <span class="icon-question"></span>
    </div>
  </div>
</template>

<script>
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
        postMark: ''
      }
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
      }
    }
  };

  import Vue from 'vue'
  var exText = "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"

</script>
<style type="text/css">
  .sms-markdown{
    display: block;
    position: relative;
    border: 1px solid #d4d9df;
    border-radius: 4px;
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
    padding: 8px;
    padding-right: 24px;
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


  .review .pl-c {
    color: #969896;
}

.review .pl-c1,
.review .pl-s .pl-v {
    color: #0086b3;
}

.review .pl-e,
.review .pl-en {
    color: #795da3;
}

.review .pl-smi,
.review .pl-s .pl-s1 {
    color: #333;
}

.review .pl-ent {
    color: #63a35c;
}

.review .pl-k {
    color: #a71d5d;
}

.review .pl-s,
.review .pl-pds,
.review .pl-s .pl-pse .pl-s1,
.review .pl-sr,
.review .pl-sr .pl-cce,
.review .pl-sr .pl-sre,
.review .pl-sr .pl-sra {
    color: #183691;
}

.review .pl-v,
.review .pl-smw {
    color: #ed6a43;
}

.review .pl-bu {
    color: #b52a1d;
}

.review .pl-ii {
    color: #f8f8f8;
    background-color: #b52a1d;
}

.review .pl-c2 {
    color: #f8f8f8;
    background-color: #b52a1d;
}

.review .pl-c2::before {
    content: "^M";
}

.review .pl-sr .pl-cce {
    font-weight: bold;
    color: #63a35c;
}

.review .pl-ml {
    color: #693a17;
}

.review .pl-mh,
.review .pl-mh .pl-en,
.review .pl-ms {
    font-weight: bold;
    color: #1d3e81;
}

.review .pl-mq {
    color: #008080;
}

.review .pl-mi {
    font-style: italic;
    color: #333;
}

.review .pl-mb {
    font-weight: bold;
    color: #333;
}

.review .pl-md {
    color: #bd2c00;
    background-color: #ffecec;
}

.review .pl-mi1 {
    color: #55a532;
    background-color: #eaffea;
}

.review .pl-mc {
    color: #ef9700;
    background-color: #ffe3b4;
}

.review .pl-mi2 {
    color: #d8d8d8;
    background-color: #808080;
}

.review .pl-mdr {
    font-weight: bold;
    color: #795da3;
}

.review .pl-mo {
    color: #1d3e81;
}

.review .pl-ba {
    color: #595e62;
}

.review .pl-sg {
    color: #c0c0c0;
}

.review .pl-corl {
    text-decoration: underline;
    color: #183691;
}

.review .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
}

.review a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

.review a:active,
.review a:hover {
    outline-width: 0;
}

.review strong {
    font-weight: inherit;
}

.review strong {
    font-weight: bolder;
}

.review h1 {
    font-size: 2.4em;
    margin: 0.67em 0;
}

.review img {
    border-style: none;
}

.review svg:not(:root) {
    overflow: hidden;
}

.review code,
.review kbd,
.review pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

.review hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

.review input {
    font: inherit;
    margin: 0;
}

.review input {
    overflow: visible;
}

.review [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}

.review * {
    box-sizing: border-box;
}

.review input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.review a {
    color: #0366d6;
    text-decoration: none;
}

.review a:hover {
    text-decoration: underline;
}

.review strong {
    font-weight: 600;
}

.review hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
}

.review hr::before {
    display: table;
    content: "";
}

.review hr::after {
    display: table;
    clear: both;
    content: "";
}

.review table {
    border-spacing: 0;
    border-collapse: collapse;
}

.review td,
.review th {
    padding: 0;
}

.review h1,
.review h2,
.review h3,
.review h4,
.review h5,
.review h6 {
    margin-top: 0;
    margin-bottom: 0;
}

.review h1 {
    font-size: 36px;
    font-weight: 600;
}
.review h2 {
    font-size: 28px;
    font-weight: 600;
}

.review h3 {
    font-size: 20px;
    font-weight: 600;
}

.review h4 {
    font-size: 18px;
    font-weight: 600;
}

.review h5 {
    font-size: 14px;
    font-weight: 600;
}

.review h6 {
    font-size: 12px;
    font-weight: 600;
}

.review p {
    margin-top: 0;
    margin-bottom: 6px;
}

.review blockquote {
    margin: 0;
}

.review ul,
.review ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

.review ol ol,
.review ul ol {
    list-style-type: lower-roman;
}
.review ul ul ol,
.review ul ol ol,
.review ol ul ol,
.review ol ol ol {
    list-style-type: lower-alpha;
}

.review dd {
    margin-left: 0;
}

.review code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 12px;
}

.review pre {
    margin-top: 0;
    margin-bottom: 0;
    font: 12px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

.review .octicon {
    vertical-align: text-bottom;
}

.review .pl-0 {
    padding-left: 0 !important;
}

.review .pl-1 {
    padding-left: 4px !important;
}

.review .pl-2 {
    padding-left: 8px !important;
}

.review .pl-3 {
    padding-left: 16px !important;
}

.review .pl-4 {
    padding-left: 24px !important;
}

.review .pl-5 {
    padding-left: 32px !important;
}

.review .pl-6 {
    padding-left: 40px !important;
}

.review::before {
    display: table;
    content: "";
}

.review::after {
    display: table;
    clear: both;
    content: "";
}

.review > *:first-child {
    margin-top: 0 !important;
}

.review > *:last-child {
    margin-bottom: 0 !important;
}

.review a:not([href]) {
    color: inherit;
    text-decoration: none;
}

.review .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
}

.review .anchor:focus {
    outline: none;
}

.review blockquote,
.review ul,
.review ol,
.review dl,
.review table,
.review pre {
    margin-top: 0;
    margin-bottom: 10px;
}

.review hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
}

.review blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
}

.review blockquote > :first-child {
    margin-top: 0;
}

.review blockquote > :last-child {
    margin-bottom: 0;
}

.review kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
}

.review h1,
.review h2,
.review h3,
.review h4,
.review h5,
.review h6 {
    margin-top: 20px;
    margin-bottom: 12px;
    font-weight: 600;
    line-height: 1.25;
}

.review h1 .octicon-link,
.review h2 .octicon-link,
.review h3 .octicon-link,
.review h4 .octicon-link,
.review h5 .octicon-link,
.review h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
}

.review h1:hover .anchor,
.review h2:hover .anchor,
.review h3:hover .anchor,
.review h4:hover .anchor,
.review h5:hover .anchor,
.review h6:hover .anchor {
    text-decoration: none;
}

.review h1:hover .anchor .octicon-link,
.review h2:hover .anchor .octicon-link,
.review h3:hover .anchor .octicon-link,
.review h4:hover .anchor .octicon-link,
.review h5:hover .anchor .octicon-link,
.review h6:hover .anchor .octicon-link {
    visibility: visible;
}

.review h1 {
    padding-bottom: 0.3em;
    font-size: 2.2em;
    border-bottom: 1px solid #eaecef;
}

.review h2 {
    padding-bottom: 0.3em;
    font-size: 1.8em;
    border-bottom: 1px solid #eaecef;
}

.review h3 {
    font-size: 1.5em;
}

.review h4 {
    font-size: 1.2em;
}

.review h5 {
    font-size: 16px;
}

.review h6 {
    font-size: 14px;
    color: #6a737d;
}

.review ul,
.review ol {
    padding-left: 2em;
}

.review ul ul,
.review ul ol,
.review ol ol,
.review ol ul {
    margin-top: 0;
    margin-bottom: 0;
}

.review li > p {
    margin-top: 16px;
}

.review li + li {
    margin-top: 0.25em;
}

.review dl {
    padding: 0;
}

.review dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
}

.review dl dd {
    padding: 0 16px;
    margin-bottom: 12px;
}

.review table {
    display: block;
    width: 100%;
    overflow: auto;
}

.review table th {
    font-weight: 600;
}

.review table th,
.review table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
}

.review table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
}

.review table tr:nth-child(2n) {
    background-color: #f6f8fa;
}

.review img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
}

.review code {
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
}

.review code::before,
.review code::after {
    letter-spacing: -0.2em;
    content: "\00a0";
}

.review pre {
    word-wrap: normal;
}

.review pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
}

.review .highlight {
    margin-bottom: 12px;
}

.review .highlight pre {
    margin-bottom: 0;
    word-break: normal;
}

.review .highlight pre,
.review pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
}

.review pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
}

.review pre code::before,
.review pre code::after {
    content: normal;
}

.review .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
}

.review kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fcfcfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
}

.review :checked + .radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
}

.review .task-list-item {
    list-style-type: none;
}

.review .task-list-item + .task-list-item {
    margin-top: 3px;
}

.review .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
}

.review hr {
    border-bottom-color: #eee;
}

/* 高亮 */
.review .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f2f3f1
}

.review .hljs-comment, .hljs-quote {
    color: #998;
    font-style: italic
}

.review .hljs-keyword, .hljs-selector-tag, .hljs-subst {
    color: #333;
    font-weight: bold
}

.review .hljs-number, .hljs-literal, .hljs-variable, .hljs-template-variable, .hljs-tag .hljs-attr {
    color: #008080
}

.review .hljs-string, .hljs-doctag {
    color: #d14
}

.review .hljs-title, .hljs-section, .hljs-selector-id {
    color: #900;
    font-weight: bold
}

.review .hljs-subst {
    font-weight: normal
}

.review .hljs-type, .hljs-class .hljs-title {
    color: #458;
    font-weight: bold
}

.review .hljs-tag, .hljs-name, .hljs-attribute {
    color: #000080;
    font-weight: normal
}

.review .hljs-regexp, .hljs-link {
    color: #009926
}

.review .hljs-symbol, .hljs-bullet {
    color: #990073
}

.review .hljs-built_in, .hljs-builtin-name {
    color: #0086b3
}

.review .hljs-meta {
    color: #999;
    font-weight: bold
}

.review .hljs-deletion {
    background: #fdd
}

.review .hljs-addition {
    background: #dfd
}

.review .hljs-emphasis {
    font-style: italic
}

.review .hljs-strong {
    font-weight: bold
}
</style>