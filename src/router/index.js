import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/repair',
      name: 'repairCustom',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RepairCustom.vue')
    },
    {
      path: '/craft',
      name: 'craftWork',
      component: () => import('../views/CraftWork.vue')
    },
    {
      path: '/recTech',
      name: 'recTech',
      component: () => import('../views/RecTech.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductList.vue')
    },
    {
      path: '/equipment',
      name: 'eqList',
      component: () => import('../views/Equipment.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/Support.vue')
    }
  ]
})

export default router
