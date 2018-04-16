// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import App from './App'
import router from './router'
import Axios from 'axios'
import Vuex from 'vuex'
import store from './vuex'
import SmsUI from './components/sms'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/common.css'
import '../static/plugins/highlight/styles/github-gist.css'
import '../static/css/font/style.css'
import {GetGlobalConfigAsync} from './assets/js/Tools.js'

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(SmsUI);

let conf = GetGlobalConfigAsync('/static/config/smsConfig.json?_=', Axios)

Vue.prototype.$echarts = echarts;
Vue.prototype.$http = Axios
Vue.prototype.$myconfig = conf;
//去掉警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
