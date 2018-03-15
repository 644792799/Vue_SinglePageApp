import Index from 'views/main/Index.vue'
import Search from 'views/main/Search.vue'
import PageNotFound from 'views/404/404.vue'

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