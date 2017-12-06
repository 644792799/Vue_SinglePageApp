<template>
	<div class="article-detail">
		<div class="sub-nav">
			<div class="breadcrumb-container">
		  		<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ path: '/user/1' }">用户</el-breadcrumb-item>
				  <el-breadcrumb-item>码片详细</el-breadcrumb-item>
				</el-breadcrumb>
		  	</div>
		  	<div class="snipt-actions">
		  		<el-button-group>
		  			<el-button size="mini" class="icon-git-branch">
		  				<!-- <i class="icon-git-branch"></i> --> 派生
		  			</el-button>
		  			<el-button size="mini">30</el-button>
		  		</el-button-group>
		  		<el-button-group>
		  			<el-button size="mini" class="icon-bookmark-o">
		  				<!-- <i class="icon-bookmark"></i> --> 收藏
		  			</el-button>
		  			<el-button size="mini">20</el-button>
		  		</el-button-group>
		  	</div>
		</div>
		<div class="flex-row-layout">
			<div class="left">
			  	<div class="grid-content">
			  		<div class="article-title">
			  			<h3>
			  				<i class="icon-pin">&nbsp;</i>
			  				<span class="" pubpri="公开">这是标题</span>
			  				<el-tooltip class="item pull-right hide" effect="dark" content="如果你认为此代码片的内容侵权或者或者违反了本站的约定，请通过单击此按钮反馈给我们。" placement="top">
								<i class="icon-flag2"></i>
							</el-tooltip>
			  			</h3>
			  			<el-tag v-for="(i, index) in tagTypes" :type="i">标签{{index + 1}}</el-tag>
			  		</div>
					<div class="article-content" id="article-content">
						<div class="tools">
							<articletools :code="function(){}"></articletools>
						</div>
						<div class="source">
							<highlightcode v-for="i in 3"></highlightcode>
						</div>
						
						<!-- <div class="source">
							<pre lan="javascript" class="lan-mark"><code class="javascript">$(document).ready(function() {
			$('pre code').each(function(i, block) {
				hljs.highlightBlock(block);
			});
		});</code></pre>
						</div>
						<div class="source">
							<pre lan="javascript" class="lan-mark"><code class="javascript">$(document).ready(function() {
			$('pre code').each(function(i, block) {
				hljs.highlightBlock(block);
			});
		});</code></pre>
						</div> -->
						<div class="description" id="description">
							<div class="text-center article-desc-container">
								<h4 class="article-desc-title">代码片描述<SmsLine gradfrom="center"></SmsLine></h4>
								<div class="gradient-line"></div>
							</div>
							{{
								description.length > 500 && !showReadMore ? 
								description.substring(0, 500) : 
								description
							}}
						</div>
						<div :class="readMoreBoxCls" v-if="description.length > 500">
							<div class="read_more_mask"></div>
							<el-button @click="hideReadMore">阅读全文</el-button>
						</div>
						<!-- <div class="article-cat">JAVA</div> -->
						
					</div>
			  	</div>
			  	<div class="comments">
			  		<messenger></messenger>
			  	</div>
			</div>
		    <div class="rightcontainer">
			   <div class="right">
			   		<div class="grid-content article-stats">
			   			<img src="/static/img/头像示例2.jpg" class="userimg">
			   			<div class="username stats-item">
			   				<span class="tag">码片作者</span> 
			   				<span> 张三</span>
			   				<el-tooltip class="item" effect="dark" content="关注" placement="top">
			   					<span class="icon-user-plus3 follow"></span>
			   				</el-tooltip>
			   			</div>
						<div class="ctime stats-item">
							<div class="pull-left stats-item-name">
								<i class="icon-calendar"></i>创建时间:
							</div>
							<span>2017.6.1</span>
						</div>
						<div class="mtime  stats-item">
							<div class="pull-left stats-item-name">
								<i class="icon-calendar"></i>修改时间:
							</div>
							<span>2017.6.1</span>
						</div>
						<!-- <div class="viewcount  stats-item">
							<div class="pull-left stats-item-name">
								<i class="icon-eye"></i>阅读量:
							</div>
							<span>1254</span>
						</div> -->
						<div class="share stats-item">
							<div class="pull-left stats-item-name">
								<i class="icon-share2"></i>分享
							</div>
							<span></span>
						</div>
						<div class="vote stats-item">
							<!-- <div class="pull-left stats-item-name">赞</div>
							<span></span> -->
							<div style="display:flex;flex-direction:row;align-items: center;">
								<div>
									<el-button size="small">
										<i class="icon-thumbs-up2"></i> 
										<span class="votecount">43</span>
									</el-button>
								</div>
								<div style="display:flex;flex-direction:row;align-items: center;">
									<div>
										<ul class="voteAvators">
										<li>
											<img src="/static/img/头像示例2.jpg" width="30" height="30">
										</li>
										<li>
											<img src="/static/img/头像示例.jpg" width="30" height="30">
										</li>
										<li>
											<img src="/static/img/头像示例2.jpg" width="30" height="30">
										</li>
										</ul>
									</div>
									<div style="margin-left: 18px;line-height: 23px;">
										<strong title="小哥哥">小哥哥</strong> 等 77 位点了赞,<br>
										该码片被浏览 210 次.
									</div>
								</div>
							</div>
							<div>
								<!-- <el-button type="primary" size="small">
									<i class="icon-bookmark4"></i> 
									<span class="startxt">收藏</span>
								</el-button> -->
							</div>
						</div>
						<!-- <div class="puborpri stats-item">
							<div class="pull-left stats-item-name">公开 / 私有</div>
							<span></span>
						</div> -->
			   		</div>
			   		<div class="article-prop">
				   		<el-form>
				   			<el-form-item>
				   				<articleProp></articleProp>
				   			</el-form-item>
				   		</el-form>
			   		</div>
			   		<SmsCard header="作者其它码片" ico="icon-file2">
						<div slot="operation" class="operation">
							<el-button type="text" size="mini">更多<i class="icon-chevron-right el-icon--right"></i></el-button>
						</div>
						<div class="snipt">
					  		<ul>
					  			<li v-for="i in 10">
					  				<!-- <i class="icon-fire"></i> -->
					  				<a href="#" title="title" class="link-hover-effect-singleline">基础知识汇总2</a>
					  			</li>
					  		</ul>
					  	</div>
					</SmsCard>
					<SmsCard header="类似码片" ico="icon-file2">
						<div slot="operation" class="operation">
							<el-button type="text" size="mini">换一批<i class="icon-refresh-cw el-icon--right"></i></el-button>
						</div>
						<div class="snipt">
					  		<ul>
					  			<li v-for="i in 10">
					  				<!-- <i class="icon-fire"></i> -->
					  				<a href="#" title="title" class="link-hover-effect-singleline">基础知识汇总2</a>
					  			</li>
					  		</ul>
					  	</div>
					</SmsCard>
			   		<!-- <div>
			   			<SmsSimpleList title="作者发布的其它代码"></SmsSimpleList>
						<SmsSimpleList title="类似相关代码"></SmsSimpleList>
			   		</div> -->
			   	</div>	
		    </div>
		</div>   
	</div>
</template>

<script type="text/javascript">
	// import $ from 'jquery'
 //    import hljs from 'pluginspath/highlight/highlight.pack.js'
    import Tools from 'components/comps/article/ArticleTools.vue'
    import ArticleProperties from 'components/comps/article/ArticleProperties.vue'
	import Messenger from 'components/comps/common/Messenger/Messenger.vue'
	import HighlightCode from 'components/comps/common/CodeHighlight.vue'

    export default {
	    data () {
	      return {
	      	description: '我姥姥姓刘，在北京城也算是个大姓，我至今对祖上发生的一切一无所知也无从考据，只知上世纪三四十年代家道中落，母亲出生不久就随父母和其他亲戚举家南迁，据说当时还余了些小钱在“红庙”地区开小旅馆为生，能供母亲读完师范和她两个妹妹长大。我姥姥姓刘，在北京城也算是个大姓，我至今对祖上发生的一切一无所知也无从考据，只知上世纪三四十年代家道中落，母亲出生不久就随父母和其他亲戚举家南迁，据说当时还余了些小钱在“红庙”地区开小旅馆为生，能供母亲读完师范和她两个妹妹长大。我姥姥姓刘，在北京城也算是个大姓，我至今对祖上发生的一切一无所知也无从考据，只知上世纪三四十年代家道中落，母亲出生不久就随父母和其他亲戚举家南迁，据说当时还余了些小钱在“红庙”地区开小旅馆为生，能供母亲读完师范和她两个妹妹长大。我姥姥姓刘，在北京城也算是个大姓，我至今对祖上发生的一切一无所知也无从考据，只知上世纪三四十年代家道中落，母亲出生不久就随父母和其他亲戚举家南迁，据说当时还余了些小钱在“红庙”地区开小旅馆为生，能供母亲读完师范和她两个妹妹长大。',
	      	showReadMore: false,
	      	readMoreBoxCls: 'read-more-box',
	      	tagTypes : ['gray', 'primary', 'success', 'warning', 'danger']
	      }
	    },
	    components: {
	      "articletools": Tools,
	      articleProp: ArticleProperties,
	      messenger: Messenger,
	      highlightcode : HighlightCode
	    },
	    mounted () {
	      // hljs.initHighlightingOnLoad();
	      // $(function () {
	      //   $('pre code').each(function (i, block) {
	      //     hljs.highlightBlock(block)
	      //   })
	      // })
	    },
	    methods:{
	    	hideReadMore: function(){
	    		//未登陆提示登陆
	    		this.readMoreBoxCls = "read-more-box hide";
	    		this.showReadMore = true;
	    	}
	    }
	  }
</script>

<style type="text/css">
/*	.article-detail .labelspan{
		margin-top: -1px;
	    margin-bottom: -1px;
	    font-weight: normal;
	    color: #586069;
	    background-color: transparent;
	    border: 1px solid rgba(27,31,35,0.15);
	    box-shadow: none;
	    display: inline-block;
	    padding: 3px 4px;
	    font-size: 12px;
	    line-height: 1;
	    border-radius: 2px;
	}*/
	.article-detail{
		display: flex;
		flex-direction: column;
		*padding: 0 4.16667%;
		*padding-top: 50px;
	}
	.article-detail .sub-nav{
		background: var(--bg-color, #fbfcfc);
		padding: 0 50px;
		display: flex;
    	align-items: center;
    	justify-content: space-between;
		*border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.article-detail .flex-row-layout{
		padding: 0 50px;
	}
	.article-detail .left{
		flex: 1;
	}
	.article-detail .right{
		width: 300px;
	    margin-top: 25px;
	    margin-left: 45px;
	    *padding: 10px;
	    *background: #Fff;
	    border-radius: 3px;
	    *border: 1px solid var(--border-color, #d4d9df);
	    *box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.article-detail h3{
		color: var(--title-color, #4E5359);
	}
	.article-detail .breadcrumb-container{
		margin: 15px 0;
		position: relative;
	}
	.article-detail .snipt-actions{
		width: 150px;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	    margin-right: 345px;
	}
	.article-desc-title{
		font-size: 18px;
		color: var(--sub-title-color, #A5A7A8);
		display: table;
		margin: 10px auto;
		padding: 2px 0;
		font-weight: 400;
		position: relative;
	}
	.article-desc-container{
		position: relative;
	}
	.article-content{
		position: relative;
		border: 1px solid #eaeefb;
	    border-radius: 4px;
	    transition: .2s;
	    background: #fff;
	    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
	}
/*	.article-content pre{
		background-color: var(--code-bg-color, #F9FAFB)!important;
		border: 0!important;
		margin: 0;
		padding: 1em 24px;
	}
	.article-content .hljs{
		background-color: var(--code-bg-color, #F9FAFB)!important;
	}*/
	.article-content .tools{
		background: #fff;
		height: 30px;
		border-bottom: 1px solid var(--border-color, #eaeefb);
	}
	.article-content .source{
		margin: 10px;
    	*border: 1px solid var(--border-color, #eaeefb);
	}
	/*
	.article-content .source+.source{
		border-top: 1px solid var(--border-color, #eaeefb);
	}
	.article-content code {
    	font-family: var(--code-font-family, Menlo,Monaco,Consolas,Courier,monospace);
	}*/
	.article-content .code-highlight{
		border: 1px solid var(--border-color, #eaeefb);
		margin-top: 10px;
		border-radius: 1px;
	}
	.article-content .description{
	    border-top: 1px solid var(--border-color, #eaeefb);
	    clear: both;
	    *min-height: 300px;
	    *transition: height .3s;
	    padding: 24px;

	    color: var(--content-color, #4E5359);
	    word-break: break-word;
	    font-size: 16px;
	    font-weight: 400;
	    line-height: 1.7;

	    transition: .2s ease-in-out;
	    -webkit-transition: .2s ease-in-out;
	    -moz-transition: .2s ease-in-out;
	    -o-transition: .2s ease-in-out;
	    -ms-transition: .2s ease-in-out;
	}
	.article-content .read-more-box{
		position: absolute;
		bottom: 0;
	    text-align: center;
	    width: 100%;
	}
	.article-content .read-more-box .el-button{
		position: absolute;
    	bottom: 10px;
        left: 50%;
        margin-left:-44px;
        border-color: var(--btn-border-color-primary, #20a0ff);
    	color: var(--btn-hover-color-default, #ea7069);
	}
	.article-content .read-more-box .el-button:hover{
		background: var(--color-red, #ea7069);
		color: var(--btn-font-color-primary, #fbfcfc);
	}
	.article-content .read-more-box .read_more_mask{
		height: 200px;
	    background: -moz-linear-gradient(bottom,rgba(255,255,255,0.1),rgba(255,255,255,0));
	    background: -webkit-gradient(linear,0 top,0 bottom,from(rgba(255,255,255,0)),to(#fff));
	}
	.article-stats{
		display: flex;
		flex-direction: column;
		margin-top: 12px;
		position: relative;
		color: var(--default-color, #4E5359);
		background: #fff;
    	box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}

	.article-stats .viewcount span{
		box-shadow: var(--btn-box-shadow, #d5d9de 3px 0px 7px 0px);
		background-color: var(--btn-bg-color-primary, #ea7069)!important;
    	color: var(--btn-font-color-primary, #fbfcfc)!important;
    	padding: 3px 5px;
    	font-size: 12px;
    	border-radius: 4px;
	}

	.article-stats .userimg{
		width: 56px;
	    height: 56px;
	    position: absolute;
	    top: -23px;
	    left: -28px;
	    border-radius: 28px;
	    box-shadow: var(--img-box-shadow, 1px 2px 4px 0px #d4d9df);
	}

	.article-stats .stats-item{
		height: 40px;
		border-bottom: 1px solid var(--border-color, #eaeefb);
		align-items: center;
		*line-height: 40px;
    	font-size: 12px;
    	font-weight: 400;
    	padding: 0 0 0 10px;
    	display: flex;
	}

	.article-stats .vote{
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.article-stats .vote .el-button--default:hover {
	    border-color: var(--btn-border-color-primary, #20a0ff);
	    color: var(--btn-hover-color-default, #ea7069);
	    background: var(--btn-border-color-primary, #20a0ff);
	}

	.article-stats .vote .el-button--default:hover span, 
	.article-stats .vote .el-button--default:hover i {
	    color: #fff !important;
	}

	.article-stats .vote .voteAvators{
		padding-left: 3px;
	}

	.article-stats .vote .voteAvators li{
		list-style: none;
		padding: 0;
	    width: 20px;
	    display: inline-block;
	}

	.article-stats .vote .voteAvators li img{
		border-radius: 50%;
    	border: 1px solid #fff;
	}

	.article-stats .vote .el-button{
		*background: #eceff5;
	}

	.article-stats .vote .votecount{
		font-family: Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
		font-size: 14px;
    	font-weight: 600;
    	color: var(--default-color, #4E5359);
	}

	.article-stats .vote .startxt{
		font-size: 14px;
    	font-weight: 400;
	}

	.article-stats .vote .el-button i{
		font-size: 15px;
		color: var(--default-color, #4E5359);
	}

	.article-stats .vote .el-button--primary i{
		color: #fff;
	}

	.article-stats .stats-item span{
		margin-left: 3px;
	}

	.article-stats .stats-item .stats-item-name{
		width: 70px;
	}

	.article-stats .stats-item>div:last-child{
		padding-right: 10px;
	}

	.article-stats .stats-item .stats-item-name i{
		font-size: 12px;
		margin-right: 2px;
	}

	.article-stats div .tag{
		margin-left: 28px;
		margin-right: 5px;
	}

	.article-stats div .follow{
		cursor: pointer;
		background: #eceff5;
    	padding: 3px;
	}

	.article-stats div i{
		*font-size: 20px;
	}

	.article-prop{
		text-align: center;
    	margin-top: 20px;
	}

	.article-detail .article-title{
		margin-bottom: 12px; 
	}

	.article-detail .article-title:hover .el-tooltip{
		display: block;
	}

	.article-detail .article-title h3>span:after{
		content: attr(pubpri);
	    font-size: 12px;
	    font-weight: 600;
	    margin-left: 5px;
	    border: 1px solid #eee;
	    border-radius: 4px;
	    padding: 2px 3px;
	    background: #e4e8f1;
	    color: #939c99;
	}

	.article-title .el-tag+.el-tag {
	    margin-left: 10px;
	}

	.article-detail .comments{
		margin: 0px 0 15px 0;
		position: relative;
		z-index: 2;
	}

	.article-detail .CodeMirror{
		height: 150px;
	}

	.article-detail .rightcontainer .sms-card .snipt ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.article-detail .rightcontainer .sms-card .snipt ul li{
		*padding: 10px 10px 10px 25px;
		padding: 5px 10px;
	    font-size: 14px;
	    font-weight: 600;
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-align: center;
	    align-items: center;
	    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
	.article-detail .rightcontainer .sms-card .snipt ul li+li{
		border-top: 1px solid var(--border-color, #e4e8f1);
	}
	.article-detail .rightcontainer .sms-card .snipt ul li i{
		margin-right: 5px;
    	font-size: 16px;
    	color: var(--color-red, #ea7069);
	}
	.article-detail .rightcontainer .sms-card .snipt a{
		color: var(--link-hover-color, #20a0ff)!important;
	    display: inline-block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    vertical-align: top;
	    transition: .1s ease-in-out;
	    -webkit-transition: .1s ease-in-out;
	    -moz-transition: .1s ease-in-out;
	    -o-transition: .1s ease-in-out;
	    -ms-transition: .1s ease-in-out;
	    padding: 5px 0px 5px 5px;
	}
	.article-detail .rightcontainer .sms-card .snipt a:hover{
		color: var(--link-hover-color, #20a0ff)!important;
    	*text-decoration: underline!important;
	}
	.article-detail .rightcontainer .sms-card .sms-card__body {
	    padding: 0;
	}
</style>