// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import SmsUI from './components/sms'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/common.css'
import '../static/plugins/highlight/styles/github-gist.css'
import '../static/css/font/style.css'

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(SmsUI);

Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
