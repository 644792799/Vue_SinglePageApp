import Editor from 'components/pages/personal/Editor.vue'
import MyArticle from 'components/pages/personal/MyArticleList.vue'
import Article from 'components/pages/article/ArticleDetail.vue'

export default {
	path: 'user/:user_id',
	component: MyArticle,
	children: [
		{
			path: '/snipt/:snipt_id',
			component: Article
		},
		{
			path: '/snipt/:snipt_id/addsnipt',
			component: Editor
		},
		{
			path: '/snipt/:snipt_id/editsnipt',
			component: Editor
		}
	]
}