// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

import FirstComponent from './components/pages/demo/firstComponent.vue'
import SecondComponent from './components/pages/demo/secondComponent.vue'
import CommonStyle from './components/pages/demo/CommonStyle.vue'
import Article from './components/pages/article/ArticleDetail.vue'
import Main from './components/pages/main/Index.vue'
import Search from './components/pages/main/Search.vue'
import SignIn from './components/pages/Sign/SignIn.vue'
import SignUp from './components/pages/Sign/SignUp.vue'
import Editor from './components/pages/personal/Editor.vue'
import MyArticle from './components/pages/personal/MyArticleList.vue'
import PageNotFound from './components/pages/404/404.vue'
import SmsUI from './components/sms'

//import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/common.css'
import '../static/plugins/highlight/styles/github-gist.css'
import '../static/css/font/style.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(SmsUI);

const routes = [
	{
		name: '',
		path: '/',
		component: Main
	},
	{
		name: 'first',
		path: '/first',
		component: FirstComponent
	},
	{
		name: 'second',
		path: '/second',
		component: SecondComponent
	},
	{
		name: 'commonstyle',
		path: '/commonstyle',
		component: CommonStyle
	},
	{
		name: 'article',
		path: '/article',
		component: Article
	},
	{
		name: 'index',
		path: '/index',
		component: Main
	},
	{
		name: 'search',
		path: '/search',
		component: Search
	},
	{
		name: 'signin',
		path: '/signIn',
		component: SignIn
	},
	{
		name: 'signup',
		path: '/signUp',
		component: SignUp
	},
	{
		name: 'editor',
		path: '/editor',
		component: Editor
	},
	{
		name: 'myarticle',
		path: '/myarticle',
		component: MyArticle
	},
	{
		path: '*',
		component: PageNotFound
	}
];
const router = new VueRouter({routes});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
