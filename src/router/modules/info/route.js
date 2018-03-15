import About from 'views/about/about.vue'
import Help from 'views/about/help.vue'
import Feedback from 'views/feedback/feedback.vue'
import Categorized from 'views/cat/Categorized.vue'
import CategorizedDetail from 'views/cat/CategorizedDetail.vue'

export default [
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
		path: '/feedback',
		component: Feedback
	}
]