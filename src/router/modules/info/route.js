import About from 'components/pages/about/about.vue'
import Help from 'components/pages/about/help.vue'
import Feedback from 'components/pages/feedback/feedback.vue'
import Categorized from 'components/pages/cat/Categorized.vue'
import CategorizedDetail from 'components/pages/cat/CategorizedDetail.vue'

export default route = [
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