import Editor from 'views/personal/Editor.vue'
import MyArticle from 'views/personal/MyArticleList.vue'
import Article from 'views/article/ArticleDetail.vue'
import MyWelcome from 'views/personal/MyWelcome.vue'
import Setting from 'views/personal/EditProfile.vue'

export default [
	{
		path: '/user/:user_id',
		component: MyArticle
	},
	{
		path: '/user/:user_id/snipt/:snipt_id',
		component: Article
	},
	{
		path: '/user/:user_id/snipt/:snipt_id/addsnipt',
		component: Editor
	},
	{
		path: '/user/:user_id/snipt/:snipt_id/editsnipt',
		component: Editor
	},
	{
		path: '/mywelcome',
		component: MyWelcome
	},
	{
		path: '/setting',
		component: Setting
	}
]