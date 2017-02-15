// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

import FirstComponent from './components/pages/demo/firstComponent.vue'
import SecondComponent from './components/pages/demo/secondComponent.vue'
import CommonStyle from './components/pages/demo/CommonStyle.vue'
import Article from './components/pages/article/ArticleDetail.vue'
import Main from './components/pages/main/Index.vue'

import 'bootstrap/dist/css/bootstrap.css'
import '../static/css/common.css'
import '../static/plugins/highlight/styles/github-gist.css'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
	{
		path: '/first',
		component: FirstComponent
	},
	{
		path: '/second',
		component: SecondComponent
	},
	{
		path: '/commonstyle',
		component: CommonStyle
	},
	{
		path: '/article',
		component: Article
	},
	{
		path: '/index',
		component: Main
	}
];
const router = new VueRouter({routes});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
