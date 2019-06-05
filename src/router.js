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
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'main'},
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
    },
    {
      path: '/detail-record',
      name: 'detail-record',
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'main'},
      component: () => import('./views/DetailRecord.vue')
    },
    {
      path: '/history',
      name: 'history',
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'main'},
      component: () => import('./views/History.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'main'},
      component: () => import('./views/Planning.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'main'},
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'main'},
      component: () => import('./views/Record.vue')
    },
    {
      path: '/register',
      name: 'rregister',
      // eslint-disable-next-line object-curly-spacing
      meta: {layout: 'empty'},
      component: () => import('./views/Register.vue')
    }
  ]
})
