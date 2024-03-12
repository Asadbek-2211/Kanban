import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/Message.vue')
    },
    {
      path: '/minute',
      name: 'minute',
      component: () => import('../views/Minute.vue')
    },
    {
      path: '/desk',
      name: 'desk',
      component: () => import('../views/Desk.vue')
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('../views/Bar.vue')
    },
  ]
})

export default router
