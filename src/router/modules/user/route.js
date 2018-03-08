import Editor from 'components/pages/personal/Editor.vue'
import MyArticle from 'components/pages/personal/MyArticleList.vue'
import Article from 'components/pages/article/ArticleDetail.vue'
import MyWelcome from 'components/pages/personal/MyWelcome.vue'
import Setting from 'components/pages/personal/EditProfile.vue'

export default route = [
	{
		path: 'user/:user_id',
		component: MyArticle
	},
	{
		path: 'user/:user_id/snipt/:snipt_id',
		component: Article
	},
	{
		path: 'user/:user_id/snipt/:snipt_id/addsnipt',
		component: Editor
	},
	{
		path: 'user/:user_id/snipt/:snipt_id/editsnipt',
		component: Editor
	},
	{
		path: 'mywelcome',
		component: MyWelcome
	},
	{
		path: '/setting',
		component: Setting
	}
]