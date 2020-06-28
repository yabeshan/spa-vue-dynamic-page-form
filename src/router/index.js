import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFoundPage.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/DynamicPage.vue')
  },
  {
    path: '/:page',
    name: 'page',
    component: () => import('../views/DynamicPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
