import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Articles from '../views/Articles'
import ArticleType from '../views/ArticleType'
import Article from '../views/Article'
import Login from '../views/Login'
import Register from '../views/Register'
import UserInfo from '../views/UserInfo'
import Mails from '../views/Mails'
import Mail from '../views/Mail'
import Collection from '../views/Collection'
import Admin from '../views/admin/Admin'
import WriterArticle from '../views/admin/WriterArticle'
import AdminArticles from '../views/admin/AdminArticles'
import AdminUsers from '../views/admin/AdminUsers'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/articleType',
    name: 'ArticleType',
    component: ArticleType
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/userinfo/:username',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/mail',
    name: 'Mails',
    component: Mails
  },
  {
    path: '/mailGetter/:id',
    name: 'Mail',
    component: Mail
  },
  {
    path: '/collection',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/admin', component: Admin,
    children: [
      {
        // 当 /admin 匹配成功再进行匹配，
        path: 'article',
        component: WriterArticle
      },
      {
        // 当 /admin 匹配成功再进行匹配，
        path: 'articles',
        component: AdminArticles
      },
      {
        // 当 /admin 匹配成功再进行匹配，
        path: 'users',
        component: AdminUsers
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
