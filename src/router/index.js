import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import article from '@/components/article'
// import newArticle from '@/components/new-article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article/:id', // 这里表示，这个URL是这样的    /article/1   并且这个 1 可以通过route拿到. 这样就能正常访问了。如果不在这里加:id，那么路由是匹配不到的
      // 这里的id无论是数字还是字符串都可以，但是必须要有:
      name: 'article',
      component: article
    },
    {
      path: '/article/create',
      name: 'new-article',
      component: article
    }
  ]
})
