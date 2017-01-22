// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

  import FirstComponent from './components/firstComponent.vue'
  import SecondComponent from './components/secondComponent.vue'

import 'bootstrap/dist/css/bootstrap.css'

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
	}
];
const router = new VueRouter({routes});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
