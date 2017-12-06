<template>
	<div :class="aceeditorfullscreenclass">
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
                <!-- <SmsLine gradfrom='all'></SmsLine> -->
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
                    <el-input v-model="filename" class="ipt-filename" placeholder="如：Xxx.java" @change="changeFileName"></el-input>
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
            <div class="aceeditorTabTool">
                <i class="icon-angle-left" @click="preFile"></i>
                <i class="icon-angle-right" @click="nextFile($event)"></i>
            </div>
            <div class="aceeditorTabContent">
                <div class="tabContent">
                    <ul class="aceeditorTabs" id="aceeditorTabs">
                        <li v-for="d in aceeditorTabData" :class="d.isactive==true?'active':''" @click="aceeditorTabClick(d)">
                            <a href="#">{{d.filename}}</a>
                            <i class="icon-x2 close" @click="deleteTab(d, $event)"></i>
                        </li>
                    </ul>
                </div>
                <div class="tabAdd">
                    <i :class="tabAddClass" @click="addTab"></i>
                </div>
            </div>
            <div class="aceeditorTabTool">
                <el-dropdown trigger="click" @command="aceeditorTabClick">
                  <span class="el-dropdown-link">
                    <i class="icon-angle-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="d in aceeditorTabData" :command="d">{{d.filename}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <editor id="aceeditor" v-model="content" @init="editorInit" :lang="languageSelectVal" theme="github" width="inherit" :height="aceeditorheight" :style="aceeditorstyle" @input="editorInput"></editor>
        <div class="statusBar icon-edit2" id="statusBar">
            <div class="pull-right ace_status-right">{{languageSelectVal}}</div>
        </div>
	</div>
</template>
<script>
	import Editor from 'vue2-ace-editor'

    export default {
        name: 'CodeEditor',
        data () {
          return {
            content: 'function test(){}',
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
                }, {
                  value: 'xml',
                  label: 'XML'
                }],
            themes: [
                'ambiance','chrome','eclipse','github','tomorrow','twilight','xcode'
            ],
            themeSelectVal: '',    
            languageSelectVal: '',
            edit: '',
            aceeditorstyle: 'margin-left:0px;',
            editorToolBarClass: 'editorToolBar editorHide',
            editorToolBarOpen: false,
            aceeditorfullscreenclass: 'sms-codeeditor',
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
                    language: 'javascript',
                    isactive: true,
                    token: 1,
                    content: 'function test(){alert(111);}'
                },
                {
                    filename: "b.java",
                    language: 'text',
                    isactive: false,
                    token: 2,
                    content: 'function test(){alert(222);}'
                },
                {
                    filename: "c.java",
                    language: 'java',
                    isactive: false,
                    token: 3,
                    content: 'function test(){alert(333);}'
                }
            ],
            tabAddClass: 'icon-plus-circle2'
          }
        },
        components: {
          editor:Editor,//require('vue2-ace-editor'),
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

            if(this.aceeditorTabData.length > 0){
                this.content = this.aceeditorTabData[0].content;
                this.languageSelectVal = this.aceeditorTabData[0].language;
                this.filename = this.aceeditorTabData[0].filename;
            }
        },
        watch: {
            // aceeditorfullscreenclass(curVal, oldVal){
            //  if(curVal === ''){
            //      this.aceeditorheight = 300;
            //  }else{
            //      this.aceeditorheight = window.document.getElementById("aceeditor").clientHeight;
            //      console.log(this.aceeditorheight);
            //  }
            // }
        },
        updated: function(val){
            //console.log(this.edit.getOptions());
            this.edit.resize();
        },
        methods:{
            addTab(){
                if(this.aceeditorTabData.length >= 5){
                    this.$message('码片最多不能超过五条');
                    return;
                }

                var tabDataArr = [];
                var token;
                for(var index in this.aceeditorTabData){
                    var d = this.aceeditorTabData[index];
                    d.isactive = false;
                    tabDataArr.push(d);
                }

                var tabData = {
                    filename: "未命名.txt",
                    language: 'text',
                    isactive: true,
                    token: this.uuid(8, 16),
                    content: ''
                };

                tabDataArr.push(tabData);
                this.aceeditorTabData = tabDataArr;
                if(tabDataArr.length >= 5){
                    this.tabAddClass = "icon-plus-circle2 is-disabled";
                }
            },
            changeFileName(){
                for(var index in this.aceeditorTabData){
                    var d = this.aceeditorTabData[index];
                    if(d.isactive){
                        d.filename = this.filename;
                    }
                }
            },
            preFile(){
                var activeIndex = -1;
                for(var index in this.aceeditorTabData){
                    var d = this.aceeditorTabData[index];
                    if(d.isactive){
                        activeIndex = index;
                    }
                }
                if(activeIndex > 0){
                    this.aceeditorTabData[activeIndex].isactive = false;

                    activeIndex = parseInt(activeIndex) - 1;

                    this.aceeditorTabData[activeIndex].isactive = true;
                    this.content = this.aceeditorTabData[activeIndex].content;
                    this.languageSelectVal = this.aceeditorTabData[activeIndex].language;
                    this.filename = this.aceeditorTabData[activeIndex].filename;
                    //this.aceeditorTabData = Object.assign({}, this.aceeditorTabData);
                }
            },
            nextFile(event){
                var ul = document.getElementById("aceeditorTabs");

                var activeIndex = -1;
                for(var index in this.aceeditorTabData){
                    var d = this.aceeditorTabData[index];
                    if(d.isactive){
                        activeIndex = index;
                    }
                }
                if(activeIndex < this.aceeditorTabData.length - 1){
                    this.aceeditorTabData[activeIndex].isactive = false;

                    activeIndex = parseInt(activeIndex) + 1;

                    this.aceeditorTabData[activeIndex].isactive = true;
                    this.content = this.aceeditorTabData[activeIndex].content;
                    this.languageSelectVal = this.aceeditorTabData[activeIndex].language;
                    this.filename = this.aceeditorTabData[activeIndex].filename;
                    //this.aceeditorTabData = Object.assign({}, this.aceeditorTabData);
                }

                //var activeli = ul.getElementsByTagName("li")[activeIndex];
                //console.log(activeli.width);
            },
            aceeditorTabClick(e){
                var that = this;
                for(var index in this.aceeditorTabData){
                    var d = this.aceeditorTabData[index];
                    if(d.token == e.token){
                        d.isactive = true;
                        that.content = d.content;
                        this.languageSelectVal = d.language;
                        this.filename = d.filename;
                    }else{
                        d.isactive = false;
                    }
                }
            },
            deleteTab(e, event){
                event.stopPropagation();
                
                var idx;
                var iscurrent = false;
                var tabDataArr = [];
                for(var index in this.aceeditorTabData){
                    var d = this.aceeditorTabData[index];
                    if(e == d){
                        idx = index;
                        iscurrent = d.isactive;
                        continue;
                    }
                    tabDataArr.push(d);
                }
                
                this.aceeditorTabData = tabDataArr;
                
                if(iscurrent && this.aceeditorTabData.length > 0){
                    this.aceeditorTabData[0].isactive = true;
                    this.content = this.aceeditorTabData[0].content;
                    this.languageSelectVal = this.aceeditorTabData[0].language;
                    this.filename = this.aceeditorTabData[0].filename;
                    this.aceeditorTabData = Object.assign({}, this.aceeditorTabData);
                }

                if(this.aceeditorTabData == null || 
                    this.aceeditorTabData.length == 0){
                    this.content = "";
                    this.languageSelectVal = "text";
                    this.filename = "";
                }

                if(tabDataArr.length < 5){
                    this.tabAddClass = "icon-plus-circle2";
                }
            },
            languageChange(){
                require('vue2-ace-editor/node_modules/brace/mode/' + this.languageSelectVal);
                this.edit.getSession().setMode('ace/mode/' + this.languageSelectVal);

                for(var index in this.aceeditorTabData){
                    var d = this.aceeditorTabData[index];
                    if(d.isactive){
                        d.language = this.languageSelectVal;
                    }
                }
                //console.log(this.content.toString());
            },
            themeChange(){
                require('vue2-ace-editor/node_modules/brace/theme/'+this.themeSelectVal);
                this.edit.setTheme('ace/theme/' + this.themeSelectVal);
            },
            uuid(len, radix) {
                var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
                var uuid = [], i;
                radix = radix || chars.length;
             
                if (len) {
                  // Compact form
                  for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
                } else {
                  // rfc4122, version 4 form
                  var r;
             
                  // rfc4122 requires these characters
                  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                  uuid[14] = '4';
             
                  // Fill in random data.  At i==19 set the high bits of clock sequence as
                  // per rfc4122, sec. 4.1.5
                  for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                      r = 0 | Math.random()*16;
                      uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                  }
                }
             
                return uuid.join('');
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
                for(var index in this.aceeditorTabData){
                    var d = this.aceeditorTabData[index];
                    if(d.isactive){
                        d.content = content;
                        break;
                    }
                    //return;
                }
          //    this.aceeditorTabData.forEach(function(d, index, arr){
                //  if(d.isactive){
                //      d.content = content;
                //  }
                //  return;
                // });
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
                if(this.aceeditorfullscreenclass == 'sms-codeeditor'){
                    this.aceeditorfullscreenclass = 'sms-codeeditor aceeditor-fullscreen';
                    this.aceeditorfullscreenicoclass = 'icon-compress';
                }else{
                    this.aceeditorfullscreenclass = 'sms-codeeditor';
                    this.aceeditorfullscreenicoclass = 'icon-expand';
                }
            }
        }
      }
</script>
<style type="text/css">
	.sms-codeeditor{
        line-height: 36px;
        position: relative;
    }

    .sms-codeeditor .ace-github .ace_gutter {
        background: var(--acegutter-bg-color, #fbfcfc);
        color: var(--acegutter-color, #AAA);
        z-index: 2;
    }
    .sms-codeeditor .select-language{
        width: 120px;
    }
    .sms-codeeditor .select-language .el-input{
        width: 100%;
    }
    .sms-codeeditor .ipt-filename{
        width: 110px;
    }
    .sms-codeeditor .select-theme, 
    .sms-codeeditor .select-keybindding{
        width: 150px;
    }
    .sms-codeeditor .select-theme .el-input, 
    .sms-codeeditor .select-keybindding .el-input{
        width: 100%;
    }
    .sms-codeeditor .statusBar{
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
    .sms-codeeditor .ace_status-indicator{
        font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
        margin-left: 3px;
        padding: 3px 5px 2px 5px;
    }
    .sms-codeeditor .ace_status-right{
        line-height: 19px;
        border-left: 1px solid var(--ace-theme-github-border-color, #d4d9df);
        padding: 0 10px 0 10px;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
        text-transform: uppercase;
    }
    .sms-codeeditor .codeToolBar{
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
    .sms-codeeditor .codeToolBar .acesetting{
        *width: 40px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        color: #586069;
    }
    .sms-codeeditor .codeToolBar .acesettingright{
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        color: #586069;
    }
    .sms-codeeditor .codeToolBar .acesettingright>div:last-child{
        width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sms-codeeditor .codeToolBar .acesetting>div{
        width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sms-codeeditor .codeToolBar .acesetting>div:hover,
    .sms-codeeditor .codeToolBar .acesettingright>div:last-child:hover{
        color: var(--color-red, #ea7069);
    }
    .sms-codeeditor .codeToolBar .acesetting i{
        *margin: 0 10px;
    }
    .sms-codeeditor .codeToolBar .acesetting:hover{
        *background: var(--acegutter-bg-color, #fbfcfc);
        *color: var(--acegutter-color, #AAA);
    }
    .sms-codeeditor .codeToolBar input{
        border: 0;
        border-radius: 0;
        *border-right: 1px solid var(--border-color);
        background: var(--banner-color, #eef1f6);
    }
    .sms-codeeditor .editorToolBar{
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
    .sms-codeeditor .editorToolBar>div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2px 10px;
        background: #fff;
        font-size: 12px;
        position: relative;
    }
    .sms-codeeditor .editorToolBar .el-select input{
        border: 0;
        border-radius: 0;
    }
    .sms-codeeditor .editorToolBar .el-input-number{
        display: flex!important;
    }
    .sms-codeeditor .editorHide{
        width: 0px!important;
        border-right: 0!important;
        box-shadow: none!important;
    }
    .sms-codeeditor .ace_editor, 
    .sms-codeeditor .el-form-item__content{
        transition: all .2s cubic-bezier(.645,.045,.355,1);
    }
    .sms-codeeditor .ace_editor{
        height: 300px;
        width: inherit;
        margin-left: 0px;
        clear: both;
        border: 1px solid var(--ace-theme-github-border-color, #d4d9df);
    }
    .sms-codeeditor .ace_editor .ace_gutter{
        z-index: 3!important;
    }
    .aceeditor-fullscreen{
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
    .aceeditor-fullscreen .ace_editor{
        flex: 1;
    }
    /*editor tab*/
    .sms-codeeditor .aceeditorTabContainer{
        margin: 0;
        padding: 0;
        max-height: 35px;
        background: var(--bg-color, #fbfcfc);
        border: 1px solid var(--ace-theme-github-border-color, #d4d9df);
        border-bottom: 0;
        overflow: hidden;
        display: flex;
        flex-direction: row;
    }
    .sms-codeeditor .aceeditorTabContainer .clearfix:before,
    .sms-codeeditor .aceeditorTabContainer .clearfix:after{
        content: ""; 
        display: table;
    }
    .sms-codeeditor .aceeditorTabContainer .clearfix:after{
        clear: both;
    }
    .sms-codeeditor .aceeditorTabContainer .clearfix{
        zoom: 1;
    }
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabTool{
        width: 40px;
        height: 100%;
        text-align: center;
    }
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabTool i{
        font-size: 14px;
        font-weight: 600;
        color: #586069;
        cursor: pointer;
    }
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabTool i:first-child{
        margin-right: 5px;
    }
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabTool i:hover,
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabContent .tabAdd i:hover{
        color: var(--color-red, #ea7069);
    }
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabContent{
        position:relative;
        flex:1;
        display:flex;
        flex-direction:row;
    }
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabContent .tabContent{
        overflow:hidden;
        position:relative;
        display:block;
        white-space:nowrap;
    }
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabContent .tabAdd{
        flex:1;
        display:flex;
        align-items:center;
        justify-content: left;
        padding-left: 5px;
    }
    .sms-codeeditor .aceeditorTabContainer .aceeditorTabContent .tabAdd i{
        font-size: 14px;
        color: #586069;
        cursor: pointer;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs{
        margin: 0;
        list-style-type : none;
        line-height : 35px;
        max-height: 35px;
        overflow: hidden;
        display: inline-block;
        padding-left: 10px;
        padding-right: 3px;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li{
        -webkit-transition: 0.3s ease;
        transition: 0.3s ease;
        *float : left;
        margin : 5px -10px 0;
        border-top-right-radius: 25px 170px;
        border-top-left-radius: 20px 90px;
        padding : 0 30px 0 25px;
        height: 170px;
        background: var(--banner-color, #eef1f6);
        position : relative;
        *box-shadow: 0 10px 20px rgba(0,0,0,.5);
        max-width : 200px;
        color: var(--sub-title-color, #939c99);
        display: inline-grid;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li:before,
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li:after{
        content : '';
        background : transparent;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        border-width: 10px;
        top: 0px;
        border-style : solid;
        position : absolute;
        -webkit-transition: 0.3s ease;
        transition: 0.3s ease;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li:before{
        border-color : transparent var(--banner-color, #eef1f6) transparent transparent;
        -webkit-transform : rotate(48deg);
        left: -23px;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li:after{
        border-color : transparent transparent transparent var(--banner-color, #eef1f6);
        -webkit-transform : rotate(-48deg);
        right: -17px;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li > a{
        display: inline-block;
        max-width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        color: var(--sub-title-color, #939c99);
        padding: 0 25px 0 10px;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li > i{
        position: absolute;
        top: 10px;
        right: 40px;
        z-index: 1;
        font-weight: 600;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li > i.close:hover{
        color: var(--title-color, #4e5359);
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li.active{
        z-index: 3;
        background: #d4d9df;
        color: var(--title-color, #4e5359);
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li.active > a{
        color: var(--title-color, #4e5359);
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li.active:before{
        border-color : transparent #d4d9df transparent transparent;
    }
    .sms-codeeditor .aceeditorTabContainer ul.aceeditorTabs > li.active:after{
        border-color : transparent transparent transparent #d4d9df;
    }
</style>