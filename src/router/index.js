import Vue from 'vue'
import Router from 'vue-router'

import Index from 'components/pages/main/Index.vue'
import Search from 'components/pages/main/Search.vue'
import PageNotFound from 'components/pages/404/404.vue'


Vue.use(Router)

// let t = (r => {
// 		    return r.keys().map(key => r(key));
// 		})(require.context('', true, /^modules\/((?!\/)[\s\S])+\/route\.js$/))
// 		console.log(t)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index,
    children: (r => {
        return r.keys().map(key => r(key));
    })(require.context('./', true, /^modules\/((?!\/)[\s\S])+\/route\.js$/))
  }, ]
})