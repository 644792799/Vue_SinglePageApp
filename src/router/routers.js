import Vue from 'vue'
import Router from 'vue-router'

import Index from 'components/pages/main/Index.vue'
import Search from 'components/pages/main/Search.vue'
import MyWelcome from 'components/pages/personal/MyWelcome.vue'
import Setting from 'components/pages/personal/EditProfile.vue'
import Categorized from 'components/pages/cat/Categorized.vue'
import CategorizedDetail from 'components/pages/cat/CategorizedDetail.vue'
import PageNotFound from 'components/pages/404/404.vue'
import About from 'components/pages/about/about.vue'
import Help from 'components/pages/about/help.vue'
import Feedback from 'components/pages/feedback/feedback.vue'

Vue.use(Router)

const rootRoute = [
    {
        path: '/',
        component: Index,
        childRoutes: (r => {
            return r.keys().map(key => r(key));
        })(require.context('./', true, /^\.\/modules\/((?!\/)[\s\S])+\/route\.js$/))
    },
    {
		path: '/explore',
		component: Index
	},
	{
		path: '/index',
		component: Index
	},
	{
		path: '/search',
		component: Search
	},
	{
		path: '/setting',
		component: Setting
	},
	{
		path: '/categorized',
		component: Categorized
	},
	{
		path: '/categorizedDetail',
		component: CategorizedDetail
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/help',
		component: Help
	},
	{
		path: '/mywelcome',
		component: MyWelcome
	},
	{
		path: '/feedback',
		component: Feedback
	},
	{
		path: '*',
		component: PageNotFound
	}
]

export default rootRoute;