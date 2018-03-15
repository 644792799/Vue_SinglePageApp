<template>
	<div class="index">
		<!-- <div class="sub-nav">
		</div> -->
		<div class="flex-row-layout">
			<div class="left">
			    <div style="margin-top: 15px;margin-bottom:15px;">
			    	<div class="filtercontainer">
			    		<span style="line-height:56px;font-size:18px;color:#586069;"><i class="icon-terminal" style="font-weight:600;"></i>&nbsp;发现代码</span>
			    		<el-button :class="icoclass" @click="toggleIcoClass()"></el-button>
			    		<el-form :inline="true" :model="formInline" class="demo-form-inline">
						  <el-form-item label="排序">
						    <el-select v-model="formInline.order" placeholder="类型选择">
						      <el-option label="最新发布" value="new"></el-option>
						      <el-option label="收藏最多" value="star"></el-option>
						      <el-option label="派生最多" value="fork"></el-option>
						      <el-option label="评分最高" value="vote"></el-option>
						    </el-select>
						  </el-form-item>
						</el-form>
						<SmsLine gradfrom="left"></SmsLine>
			    	</div>
			    	<div>
			    		<div class="grid-content">
					  		<articleList :articlesdata="articlesdata" :isfullmode="isfullmode"></articleList>
					  	</div>
			    	</div>
			    </div>
			</div>
			<div class="rightcontainer">
				<div class="right">
					<div style="text-align:right;position:relative;border-bottom:1px solid var(--border-color, #d4d9df);">
						<router-link to="/user/1/snipt/1/addsnipt">
							<el-button style="margin: 10px 5px">添加代码片<i class="el-icon-plus el-icon--right"></i></el-button>
						</router-link>
					</div>
					<div style="position:relative;">
						<categoryCard :categoriesdata="categories"></categoryCard>
					</div>
				</div>
				<SmsCard header="活跃贡献者" ico="icon-user">
					<div slot="operation" class="operation">
						<el-radio-group v-model="activeUserSort" size="small">
						    <el-radio-button label="本周"></el-radio-button>
						    <el-radio-button label="本月"></el-radio-button>
						    <el-radio-button label="本季"></el-radio-button>
					  	</el-radio-group>
				  	</div>
				  	<div class="img-list">
				  		<ul>
				  			<li v-for="i in 14">
				  				<a href="javascript:void(0);">
				  					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498551826199&di=dd1413b07fcebf87e28b12316d4f14e7&imgtype=0&src=http%3A%2F%2Fk2.jsqq.net%2Fuploads%2Fallimg%2F1705%2F7_170524143440_5.jpg" title="小哥哥">
				  					<!-- <div style="font-size: 12px;    padding-top: 3px;">小哥哥</div> -->
				  				</a>
				  			</li>
				  		</ul>
				  	</div>
					<!-- <SmsUserCardHor shape="circle" v-for="i in 8" img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498551826199&di=dd1413b07fcebf87e28b12316d4f14e7&imgtype=0&src=http%3A%2F%2Fk2.jsqq.net%2Fuploads%2Fallimg%2F1705%2F7_170524143440_5.jpg">
						<div class="title">
							<h5>小哥哥</h5>
						</div>
					</SmsUserCardHor> -->
				</SmsCard>
				<SmsCard header="本周最受欢迎用户" ico="icon-user">
					<SmsUserCardHor shape="circle" v-for="i in 8" img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498551826199&di=dd1413b07fcebf87e28b12316d4f14e7&imgtype=0&src=http%3A%2F%2Fk2.jsqq.net%2Fuploads%2Fallimg%2F1705%2F7_170524143440_5.jpg">
						<div class="cardhor-userinfo">
							<div class="top">小哥哥</div>
							<div class="bottom">15,145人关注</div>
						</div>
						<div class="cardhor-operation">
							<el-button size="small" v-if="i%2==0">取消关注</el-button>
							<el-button type="primary" size="small" v-if="i%2!=0">添加关注</el-button>
						</div>
					</SmsUserCardHor>
				</SmsCard>
				<SmsCard header="热门码片" ico="icon-user">
					<div slot="operation" class="operation">
						<el-radio-group v-model="activeSniptSort" size="small">
						    <el-radio-button label="本周"></el-radio-button>
						    <el-radio-button label="本月"></el-radio-button>
						    <el-radio-button label="本季"></el-radio-button>
					  	</el-radio-group>
				  	</div>
				  	<div class="hot-snipt">
				  		<ul>
				  			<li v-for="i in 10">
				  				<!-- <i class="icon-fire"></i> -->
				  				<a href="#" title="title" class="link-hover-effect-singleline">基础知识汇总2</a>
				  			</li>
				  		</ul>
				  	</div>
				</SmsCard>	
			</div>
		</div>
	</div>

</template>

<script type="text/javascript">
	import ArticleList from 'components/code/ArticleList.vue'
	import CategoryCard from 'components/container/CategoryCard.vue'
	import CodeFilter from 'components/code/CodeFilter.vue'
	
	export default{
		data(){
			return {
				articlesdata: [
					{
						avator: '/static/img/头像示例2.jpg',
						title: '基础知识汇总',
						category: ['类别1','类别2'],
						url: '/#/article',
						cat: 'java',
						view: 56,
						star: 24,
						fork: 71,
						date: '2017-05-05 10:05',
						userid: 1,
						sniptid: 1,
						username: '小哥哥'
					},
					{
						avator: 'https://www.gravatar.com/avatar/644792799?d=http://tva4.sinaimg.cn/crop.0.0.599.599.50/62e42164gw1ev348sehr3j20go0go3zm.jpg',
						title: 'test2',
						category: ['类别3','类别4','类别5','类别6'],
						url: '/#/article',
						cat: 'css',
						view: 72,
						star: 30,
						fork: 66,
						date: '2017-04-05 12:05',
						userid: 2,
						sniptid: 1,
						username: '张三'
					},
					{
						avator: '/static/img/头像示例.jpg',
						title: '基础知识汇总2',
						category: ['类别1','类别2'],
						url: '/#/article',
						cat: 'javascript',
						view: 100,
						star: 80,
						fork: 98,
						date: '2017-04-03 09:05',
						userid: 3,
						sniptid: 1,
						username: 'Admin'
					}
				],
				categories: [
					{
						name: 'JAVA',
						count: 155,
						isactive: false
					},
					{
						name: 'C#',
						count: 2546,
						isactive: false
					},
					{
						name: 'C++',
						count: 2546,
						isactive: false
					},
					{
						name: 'C',
						count: 2546,
						isactive: false
					},
					{
						name: 'PYTHON',
						count: 2546,
						isactive: false
					},
					{
						name: 'JAVASCRIPT',
						count: 155,
						isactive: false
					},
					{
						name: 'CSS',
						count: 2546,
						isactive: false
					},
					{
						name: 'HTML',
						count: 2546,
						isactive: false
					},
					{
						name: 'VUE',
						count: 2546,
						isactive: false
					},
					{
						name: 'REACT',
						count: 2546,
						isactive: false
					}
				],
				input5: '',
      			select: '',
      			activeName: 'second',
      			formInline: {
		          type: 'All',
		          language: 'All',
		          language2: 'All',
		          order: 'new'
		        },
		        icoclass: "icon-list",
		        isfullmode: true,
		        activeUserSort: '本周',
		        activeSniptSort: '本周',
		        scrollDisable: false
			}
		},
		components: {
			"articleList": ArticleList,
			"categoryCard": CategoryCard,
			"codefilter": CodeFilter
		},
		mounted(){
			window.addEventListener('scroll', this.scroll);
		},
		beforeDestroy(){
			window.removeEventListener('scroll', this.scroll)
		},
		methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      },
	      toggleIcoClass: function(){
	      	if(this.icoclass == "icon-list"){
	      		this.icoclass = "icon-th-list";
	      		this.isfullmode = false;
	      	}else{
	      		this.icoclass = "icon-list";
	      		this.isfullmode = true;
	      	}
	      },
	      loadMore(){
	      	this.scrollDisable = true;
	      	console.log("加载数据......");
	      	this.scrollDisable = false;
	      },
	      scrollTop(){
			  return Math.max(
			   //chrome
			   document.body.scrollTop,
			   //firefox/IE
			   document.documentElement.scrollTop);
		  },
		  documentHeight(){
			  //现代浏览器（IE9+和其他浏览器）和IE8的document.body.scrollHeight和document.documentElement.scrollHeight都可以
			  return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
		  },
		  windowHeight(){
			  //document.compatMode有两个取值。BackCompat：标准兼容模式关闭。CSS1Compat：标准兼容模式开启。
			  return (document.compatMode == "CSS1Compat")?
			  document.documentElement.clientHeight:
			  document.body.clientHeight;
			 },
		  scroll : function() {
			  //var scrollTop = window.scrollY;
			  var self = this;
			  if(self.scrollTop() + self.windowHeight() >= (self.documentHeight() )){
		          if(!self.scrollDisable){	
			          self.loadMore();
			      }
		        }
			}
	    }
	}
</script>

<style type="text/css">
	.index{
		display: flex;
		flex-direction: column;
		*padding: 0 4.16667%;
		*padding-top: 50px;
	}
	.index .sub-nav{
		background: var(--bg-color, #fbfcfc);
		padding: 0 50px;
		display: flex;
    	align-items: center;
		*border-bottom: 1px solid var(--border-color, #d4d9df);
	}
	.index .flex-row-layout{
		padding: 0 50px;
	}
	.index .left{
		flex: 1;
	}
	.index .right{
		width: 300px;
	    margin-top: 25px;
	    margin-left: 45px;
	    *padding: 10px;
	    background: #Fff;
	    border-radius: 3px;
	    *border: 1px solid var(--border-color, #d4d9df);
	    box-shadow: var(--left-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.index .rightcontainer .sms-card{
		box-shadow: var(--left-box-shadow, #d5d9de 0.5px 0.5px 4px 0px);
    	margin-bottom: 15px;
    	margin-left: 45px;
    	width: 302px;
	}
	.index .rightcontainer .sms-card .hot-snipt ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.index .rightcontainer .sms-card .hot-snipt ul li{
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
	.index .rightcontainer .sms-card .hot-snipt ul li+li{
		border-top: 1px solid var(--border-color, #e4e8f1);
	}
	.index .rightcontainer .sms-card .hot-snipt ul li i{
		margin-right: 5px;
    	font-size: 16px;
    	color: var(--color-red, #ea7069);
	}
	.index .rightcontainer .sms-card .hot-snipt a{
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
    	*width: 100%;
	}
	.index .rightcontainer .sms-card .hot-snipt a:hover{
		color: var(--link-hover-color, #20a0ff)!important;
    	*text-decoration: underline!important;
	}
	.index .rightcontainer .sms-card:nth-child(2){
		margin-top: 15px;
	}
	.index .rightcontainer .sms-card .sms-card__body{
		padding: 0;
	}
	.index .rightcontainer .sms-usercard-hor{
		box-shadow: none!important;
		font-size: 12px;
	}
	.index .rightcontainer .sms-usercard-hor .sms-usercard-hor-info{
		flex: 1;
		display: flex;
		padding-right: 10px;
	}
	.index .rightcontainer .sms-usercard-hor .cardhor-userinfo{
		flex: 1;
	}
	.index .rightcontainer .sms-usercard-hor .cardhor-operation .el-button--small{
		border-radius: 14px;
	}
	.index .rightcontainer .sms-usercard-hor .cardhor-userinfo .top{
		color: var(--title-color, #4e5359);
		font-weight: 600;
	}
	.index .rightcontainer .sms-usercard-hor .cardhor-userinfo .bottom{
		color: var(--sub-title-color, #939c99);
	}
	.index .rightcontainer .sms-usercard-hor:last-child{
		margin-bottom: 0;
	}
	.index .rightcontainer .sms-usercard-hor+.sms-usercard-hor {
	    *border-top: 1px solid var(--border-color, #d4d9df);
	    position: relative;
    	overflow: hidden;
	}
	.index .rightcontainer .sms-usercard-hor+.sms-usercard-hor:before {
	    /*position: absolute;
	    top: 0;
	    width: 100%;
	    content: '';
	    left: 50px;
	    border-top: 1px solid var(--border-color, #d4d9df);*/
	}
	.index .filtercontainer{
		position: relative;
		*text-align: right;
		display: flex;
    	justify-content: space-between;
    	flex-direction: row;
    	align-items: center;
	}
	.index .el-button--default:hover{
		border-color: var(--btn-border-color-primary, #20a0ff);
		color: var(--btn-hover-color-default, #ea7069);
	}
	.index .el-button--default:focus{
		color: var(--default-color, #1f2d3d);
	    border: 1px solid var(--border-color, #bfcbd9);
	}
	.index .el-form-item{
		width: 150px;
		vertical-align: middle;
		margin: 10px 5px;
	}
	.index .right-container{
		background: #fff;
    	box-shadow: var(--right-box-shadow, #d5d9de 1px 1px 4px 0px);
	}
	.index .sms-card{
		box-shadow: none;
		margin-bottom: 0;
	}
	.el-select .el-input {
    	width: 75px;
  	}
  	.el-tabs__header{
  		margin: 0 0 0!important;
  		border-bottom: 1px solid #d4d9df!important;
  	}
  	.el-tabs__content{
		box-shadow: #d5d9de -1px 1px 2px 0px;
	}
	.subtitle{
		font-size: 14px;
    	font-weight: 600;
    	display: inline-block !important;
    	padding-top: 15px;
		padding-left: 15px;
    	line-height: 1.5;
	}
</style>