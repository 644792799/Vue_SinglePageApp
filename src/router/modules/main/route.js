import Index from 'components/pages/main/Index.vue'
import Search from 'components/pages/main/Search.vue'
import PageNotFound from 'components/pages/404/404.vue'

export default [
	{
		path: '/',
		component: Index
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
		path: '*',
		component: PageNotFound
	}
]