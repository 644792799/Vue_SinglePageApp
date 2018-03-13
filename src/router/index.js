import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let arr = [];
let t = (r => {
	r.keys().map(key=>{
		r(key).default.map(key=>arr.push(key))
	})
})(require.context('./', true, /^\.\/modules\/((?!\/)[\s\S])+\/route\.js$/))

export default new Router({
  mode: 'history',
  routes: arr
})