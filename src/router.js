import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'main'},
      component: () => import('./views/Categories.vue')
    }
  ]
})
